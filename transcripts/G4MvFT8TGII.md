# O Computador de Turing e Von Neumann | Por que calculadoras não são computadores?

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=G4MvFT8TGII
- **Duração:** 45:43
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No final da segunda parte do video sobre teclados, quem assistiu viu que mostrei o avô dos teclados mecânicos, a máquina de |
| 0:09 | escrever de verdade. E quando eu adicionei ele no video eu tinha dois objetivos. O primeiro, claro, era adicionar uma camada de história naquele video, mas o segundo era usar de gancho |
| 0:19 | pra historinha que quero contar hoje. Aliás, historinha nada, se prepara que essa vai ser uma história bem longa e se você nunca leu sobre Turing e Von Neumann, você vai finalmente entender |
| 0:28 | o que é um computador e porque uma máquina de calcular não é um computador. Além disso este episódio vai servir como ponte entre os vídeos do guia hardcore de introdução |
| 0:39 | a computação com o Nintendinho que mostrei alguns vídeos atrás, e o próximo que vai ser mais leve e |
| 0:44 | quero falar um pouco mais sobre meus video games e emuladores preferidos. Quero explicar como que de uma máquina de escrever foi possível chegar no computador moderno. E quero contar um pouco |
| 0:54 | da história das duas pessoas que eu considero mais importantes e que representam o tipo de |
| 0:59 | gigantes que construíram as bases da computação moderna. Vamos focar em duas dessas pessoas, |
| 1:04 | uma é famosa e você provavelmente conhece. O outro é um dos maiores gênios que já existiu, |
| 1:10 | um monstro de proporções bíblicas, pau a pau ao intelecto de um Albert Einstein, mas que você |
| 1:16 | provavelmente nunca ouviu falar. (...) |
| 1:24 | Como disse na introdução, a história que vou contar agora eu tô segurando desde quando fiz |
| 1:30 | a série sobre teclados. Quem assistiu vai se lembrar da máquina de escrever mecânica original de Christopher Sholes. O que vocês não sabem é que a máquina de escrever teve |
| 1:39 | um papel crucial na invenção do computador moderno. Não lembro como mas anos atrás eu |
| 1:44 | esbarrei num artigo muito bom do blog de um cara chamado Robert Messenger, de 2013, e eu vou pegar |
| 1:50 | bastante coisa dele. O artigo começa assim: em vinte e três de junho de 1912, no quadragésimo quarto aniversário da primeira patente de máquina de escrever |
| 1:59 | de Christopher Latham Sholes, uma data celebrada até hoje como o Dia da Máquina de Escrever - Ethel |
| 2:04 | Stoney Turing, filha do engenheiro chefe da Madras Railways, deu a luz em Paddington. Um filho. Onze |
| 2:11 | anos depois, no verão de 1923, esse menino, Alan Mathison Turing escreveu a seus pais a partir da |
| 2:17 | sua escola em Hazelhurst, Sussex. Os pais estavam na India porque o pai, Julius Mathison Turing |
| 2:23 | trabalhava no serviço civil da India. Ele contava que naquela semana ele imaginou como fazer uma |
| 2:29 | máquina de escrever.. Alan Turing nunca inventou uma máquina de escrever, mas usou de inspiração pra se tornar o pai da Ciência da Computação. Talvez vocês |
| 2:38 | se lembrem do filme The Imitation Game, onde o eterno Sherlock Holmes, Benedict Cumberbatch, |
| 2:43 | interpreta Alan Turing no famoso episódio da Segunda Guerra Mundial, onde ele derrota a máquina |
| 2:49 | de criptografia Enigma dos alemães com uma máquina de computar enorme, um passo importante pra ajudar |
| 2:56 | terminar a guerra a favor dos Aliados. Se ainda não assistiu o filme, recomendo, embora ele não explique de fato como funciona a máquina de Turing, pra isso recomendo ver meus videos sobre |
| 3:05 | criptografia. (mostrar maquina) O filme foi baseado no livro Alan Turing: The Enigma, de Andrew Hodges, que foi publicado em |
| 3:12 | 1983. Num dos trechos dessa biografia temos a passagem que diz que a mãe de Turing tinha |
| 3:18 | uma máquina de escrever e que isso fascinava o jovem Alan. Ele desenhou sua máquina automática |
| 3:23 | ou a-machine como um tipo idealizado de máquina de escrever com carriage, ou carro, infinito, sobre a |
| 3:29 | qual uma cabeça de leitura passava com habilidade não só de escrever, mas de ler e apagar um |
| 3:35 | quadrado de cada vez antes de mover pro quadrado imediatamente adjacente. A biografia segue explicando que, claro, existiam máquinas que manipulavam símbolos naquela época, |
| 3:45 | a máquina de escrever era um exemplo. Alan sonhou em inventar máquinas de escrever quando criança. |
| 3:51 | Sua mãe tinha uma e ele pode ter começado se perguntando o que significava dizer que uma máquina é "mecânica". Podia significar que sua resposta, pra alguma ação de um operador, |
| 4:01 | era perfeitamente previsível. Esquece por um momento que você já conhece computadores, e pense numa época que só se conhecesse máquinas como a de escrever. |
| 4:10 | Alguém poderia descrever de antemão exatamente como a máquina se comportaria sob qualquer |
| 4:15 | contingência. Mas havia mais a ser dito sobre a humilde máquina de escrever do que isso. A |
| 4:21 | resposta depende das condições da máquina, ou o que o Alan chamava da "configuração" atual da máquina. Em particular, uma máquina de escrever poderia estar na configuração de |
| 4:30 | maiúscula ou minúscula. Essa era uma idéia que o Alan elaborou de forma mais genérica e abstrata. Ele considerou máquinas que em qualquer determinado momento |
| 4:40 | estariam em uma de um número finito de possíveis configurações. Então, se existe somente um número |
| 4:46 | finito de coisas que a máquina pode fazer, é possível saber todo o comportamento da máquina de uma forma finita. Entretanto, a máquina de escrever tinha uma |
| 4:55 | funcionalidade a mais que era essencial à sua função. Seu ponto de digitação se mexia, |
| 5:00 | relativo à página. Sua ação de digitação seria independente da posição desse ponto na página. |
| 5:06 | Ela teria "configurações" internas e uma posição variável na linha de impressão. A ação da máquina |
| 5:12 | não dependeria da sua posição. Sem levar em consideração detalhes como margem, linha de controle e assim por diante, o que eu acabei de listar seria suficiente |
| 5:22 | pra dar uma descrição completa da natureza de uma máquina de escrever. Um relato exato das configurações e posições permitidas e de como teclas determinam os símbolos impressos, |
| 5:32 | tecla de shift pra mudar configuração de minúscula pra maiúscula, a barra de espaço e backspace, |
| 5:39 | tudo isso resumiria as funcionalidades mais relevantes. Se um engenheiro olhasse essa descrição e criasse uma máquina física que atendesse a |
| 5:48 | essas especificações, o resultado seria uma máquina de escrever, independente da cor, |
| 5:53 | peso ou outros atributos. Mas uma máquina de escrever era muito limitada pra servir de modelo. |
| 5:58 | Ela lidava com símbolos, só conseguia escrever, e precisava de um operador humano pra escolher os |
| 6:04 | símbolos e mudar as configurações de posição, uma de cada vez. Então Turing se perguntou, o que seria um tipo "mais" genérico de máquina que lidasse com símbolos? |
| 6:14 | Pra ser uma "máquina" ela precisaria reter a qualidade de uma máquina de escrever, |
| 6:20 | de ter um número finito de configurações, e um comportamento determinado exato em cada. |
| 6:25 | Mas deveria ser capaz de muito mais. Então ele começou a imaginar máquinas que seriam super-máquinas de escrever. Pra simplificar, ele imaginou máquinas trabalhando |
| 6:35 | só em uma linha. Isso é uma tecnicalidade, mas que permitia esquecer de coisas como margens e |
| 6:40 | linhas de controle. Mas era importante que o suprimento de papel pudesse ser, tipo, infinito. Nessa imagem, o ponto de digitação de sua super máquina de escrever poderia progredir |
| 6:51 | pra esquerda ou pra direita indefinidamente. Por uma questão de definição, ele imaginou |
| 6:56 | esse papel sendo uma forma de fita, marcado com unidades quadradas, de tal forma que somente um |
| 7:02 | símbolo pudesse ser escrito em cada uma. Então suas máquinas teriam uma definição finita, |
| 7:07 | mas poderiam trabalhar em uma quantidade infinita de espaço. E assim foi nascendo as sementes da idéia de uma máquina discreta universal, ou seja, que pudesse |
| 7:17 | ser configurada pra várias tarefas diferentes. A máquina de escrever de Sholes, reduzida aos |
| 7:23 | seus princípios fundamentais, nos suporta até hoje. Turing simplesmente se livrou das |
| 7:28 | pessoas e digitadores. E isso é possível porque a máquina de Turing é ainda mais excepcionalmente |
| 7:34 | crua do que uma máquina de escrever. Tudo que ele usa é uma fita de papel que é ao mesmo |
| 7:39 | tempo material de programa e dados, seu input e output ao mesmo tempo. |
| 7:44 | Turing enxugou a máquina de escrever a essa fita. Mas tem ainda mais economias, sua máquina não |
| 7:51 | precisa de letras redundantes, cifras e sinais de um teclado de máquina, ele consegue se virar |
| 7:56 | somente com um sinal e a ausência desse sinal, ou seja, 1 e zero. Essa informação binária pode |
| 8:03 | ser lida ou escaneada pela máquina. Daí ela pode mover a fita de papel um espaço pra direita, um |
| 8:09 | pra esquerda, ou não se mexer. E é só isso. Sério, isso que acabei de descrever |
| 8:14 | é um computador. E nenhum computador que já foi construído ou vai ser construído vai conseguir |
| 8:20 | fazer mais que esse modelo. Isso foi provado matematicamente por Alan Turing em 1936. E |
| 8:25 | resumindo, uma máquina de Turing conforme definido no seu paper On Computable Numbers, |
| 8:30 | with an application to the Entscheidungsproblem, são construções matemáticas abstratas que nos |
| 8:37 | ajudam a descrever rigorosamente o que significa computação. Se você não entendeu ainda o que é isso de fita infinita e cabeça de leitura, |
| 8:45 | eu achei um site chamado Turing Machine Visualization que permite escrever uma máquina de Turing usando uma simplificação da notação que ele usou no seu paper. No paper, |
| 8:55 | Turing define sua máquina como tendo um ou mais estados, cuja notação é esse Quezão, daí um estado |
| 9:01 | inicial q0 pertencente a Quezão, algum parâmetro de entrada Sigma, a tal fita Gamma, onde Sigma |
| 9:07 | que é o parâmetro está contido na fita Gamma, um símbolo branco bezinho pertencente à fita Gamma, |
| 9:12 | e uma ou mais funções de transição Delta que tem o tipo indo de Quezão e Gamma para Gamma, |
| 9:18 | left ou right ou seja, comando pra esquerda ou pra direita e Quezão. Ver notação matemática é um troço que faz o cérebro da maioria desligar em pânico, |
| 9:27 | mas relaxa que vai ficar mais simples já já. Vamos considerar uma máquina de Turing muito simples |
| 9:33 | de exemplo, que faz um incremento em um número binário, basicamente soma 1 a um número. A gente |
| 9:38 | viu isso no video do guia hardcore de introdução à computação, então você deve se lembrar. Vamos implementar usando essa notação. Começamos definindo os estados possíveis nessa |
| 9:48 | lista Quezão, temos direita, sobe um, e término. O processo começa no estado inicial q0 sendo ir |
| 9:56 | pra direita. O número de entrada em binário é o Sigma igual a 1 0 nesse exemplo, mas poderia ser |
| 10:02 | qualquer número em binário. A fita Gamma contém o Sigma então ele tem 1 0 e espaço em branco. E |
| 10:08 | o bezinho define o espaço em branco. Agora definimos as funções de transição. Se o |
| 10:15 | estado for pra direita e a cabeça estiver lendo 1 na fita ele devolve 1, ou seja, |
| 10:20 | não muda nada, vai pra direita e mantém o estado em ir pra direita. Mesma coisa pro zero. Porém, |
| 10:26 | se ele ler um espaço em branco, não escreve nada mas agora muda o comando pra ir pra esquerda e |
| 10:31 | muda o estado pra carry, ou sobe um. Se o estado for sobre um e ele ler 1, agora apaga |
| 10:39 | e escreve zero no lugar, em seguida dá comando pra continuar pra esquerda e mantém o estado em |
| 10:45 | sobe um. Agora, se for zero, escreve 1, dá comando pra esquerda e muda o estado pra done ou término. |
| 10:52 | Mesma coisa se ler espaço em branco. Eu sei, até agora muitos de vocês provavelmente não estão entendendo nada, mas aguenta aí. Indo pro site que eu recomendei, o Turing Machine |
| 11:03 | Visualization, podemos reescrever dessa notação mais formal pra uma mais prática e mais parecida |
| 11:09 | com uma linguagem de programação. Eles fizeram um interpretador pra facilitar a gente escrever o |
| 11:14 | equivalente a programinhas. Se você é programador, isso deve ser super trivial. Então vamos trocar a notação matemática por ... isto! Agora deve estar assustando menos |
| 11:23 | né? Recapitulando, começamos definindo o equivalente a uma variável com o número binário que queremos incrementar, esse é tipo o argumento ou parâmetro de entrada. Daí tem esse |
| 11:32 | blank que define o que é um espaço em branco. Temos start state sendo right que é o estado |
| 11:38 | inicial de indo pra direita. Em seguida temos a tabela de configuração de transições. Se você alguma vez já trabalhou num sistema de e-commerce por exemplo, já deve ter |
| 11:48 | visto uma máquina de estados que define o estado de uma ordem de venda, por exemplo. Se eu vou |
| 11:54 | na Amazon e compro um Kindle, meu pedido pode iniciar com um estado de aguardando pagamento |
| 11:59 | e dá o comando de executar o pagamento. Quando o pagamento é confirmado o estado do pedido |
| 12:04 | muda pra, por exemplo, aguardando envio, e ele solta um comando pra mandar pra fila do |
| 12:09 | centro de distribuição. E assim por diante até o pedido ter confirmação da entrega. Como é um conjunto finito de estados, chamamos essa estrutura de estados e transições de máquinas |
| 12:21 | de estado finito ou autômatos finitos. Isso se estuda em Teoria dos autômatos, que é um sub-tópico de ciências da computação. Na prática você define diferentes estados que |
| 12:31 | seu sistema pode estar, e define o que acontece na transição de um estado pra outro. Qualquer |
| 12:36 | linguagem moderna tem bibliotecas pra lidar com isso. Mas de qualquer forma, a máquina de Turing original é configurada com uma tabela de estados e transições. No exemplo do site ela pode estar |
| 12:46 | no estado de "right" ou o que eu chamaria de "indo pra direita" ou "carry" que seria "subindo um". Subindo um no sentido do sobe um que fazemos em somas. |
| 12:55 | O primeiro estado é muito simples, ele simplesmente vai indo pra direita sem fazer |
| 13:00 | nada enquanto for lendo 1 ou 0 na fita. Mas ele pára quando encontra um espaço em branco. Nesse |
| 13:05 | caso ele muda o estado pra subindo um e recebe o comando de voltar pra esquerda. No estado de subindo um, se encontrar 1 ele escreve 0, porque vai subir um pra esquerda. |
| 13:17 | E vai trocando 1 por 0, 1 por 0, até encontrar 0. Daí ele pode colocar o 1 que tinha subido e |
| 13:24 | terminar, já que esse programa é simplesmente um incremento de 1. E daí ele muda o estado pra "done" ou terminado. Nesse site você vai encontrar exemplos bem mais complexos que isso, por exemplo, |
| 13:33 | pra determinar se um número é divisível por três. Ou melhor ainda, nós já vimos no outro video como fazer uma máquina de adição de números binários com o processador MOS 6502 |
| 13:42 | num protoboard. Eis a versão de autômatos finitos numa máquina de Turing. Você pode ir avançando passo a passo pra ver o sistema funcionando visualmente, então é bem fácil de |
| 13:52 | entender. Divirtam-se. Na prática você poderia pensar no tal ponto de digitação que falei antes ou "cabeça" como a cabeça de leitura de um disquete, ou CD, |
| 14:02 | ou Blu Ray, e a fita como sendo a cadeia de bits que tem nas trilhas. Nós sempre lidamos com dados |
| 14:09 | e programas da mesma forma, como uma cadeia super longa de bits. Alguns dos bits são instruções que |
| 14:14 | executamos como programa, outros bits são dados como um texto, uma imagem ou um video. E se for um HD, podemos escrever também. Além disso essa cabeça pode se movimentar pra trás ou pra |
| 14:24 | frente, ou seja, ela pode ter acesso aleatório a qualquer posição na fita. E por exemplo, você |
| 14:29 | vai se lembrar que RAM quer dizer exatamente isso, memória de acesso aleatório. A beleza do trabalho de Turing foi ter definido com rigor matemático o que é um programa, |
| 14:39 | na forma da máquina de Turing, configurado como transições entre estados finitos. E o conceito |
| 14:46 | de uma máquina universal que consegue executar quaisquer máquinas de Turing, que é o que ele |
| 14:51 | chama de máquina de Turing Universal e na prática chamamos isso de computador. Uma máquina Universal |
| 14:57 | de Turing é uma máquina de Turing cuja tarefa é simular outra máquina de Turing arbitrária, com |
| 15:04 | uma entrada de dados arbitrária. O que chamamos de computador moderno tem uma característica muito importante: ela consegue carregar e armazenar configurações, ou o que |
| 15:14 | chamamos de programas. Essa é uma distinção que eu considero importante. Recentemente me perguntaram isso: o que diferencia um ábaco ou uma calculadora mecânica de um "computador" |
| 15:24 | de verdade? A definição é se ela é ou não é uma máquina universal de Turing, particularmente com |
| 15:31 | a característica de não distinção entre programa e dados no armazenamento, na tal fita infinita, |
| 15:37 | o que permite a universalidade dele poder simular outra máquina de Turing. Antes de Turing existem diversos experimentos que alguns chamam de "computador" mas que na |
| 15:48 | realidade seria mais correto chamar de máquinas de calcular grandes. E aqui eu |
| 15:53 | vou usar trechos do artigo "Quem Inventou o Computador" do site do próprio autor da biografia do Turing, o Andrew Hodges. Ele diz, e eu concordo, por exemplo, |
| 16:02 | que não podemos chamar o Engenho Analítico de Charles Babbage de computador. Ele não incorpora |
| 16:08 | a idéia vital de armazenar programas da mesma forma que os dados. A máquina de Babbage foi desenhada pra armazenar programas em cartões perfurados, |
| 16:17 | enquanto o trabalho de calcular era feito mecanicamente por engrenagens e rodas. Havia |
| 16:22 | outras diferenças, claro, como ainda usar base numérica decimal em vez de binário, ou obviamente |
| 16:28 | não ser eletrônico já que sequer Thomas Edison tinha nascido naquela época. Cem anos depois, em 1940, dava pra usar relays eletromagnéticos no lugar de engrenagens. Mas |
| 16:39 | ninguém avançou além dos princípios da Babbage. Existiam grandes calculadoras que você podia |
| 16:44 | reconfigurar mas nenhum deles era um computador. A idéia era a mesma: você construía uma máquina |
| 16:50 | que fazia aritmética, e então rearranjava as instruções encodadas num cartão perfurado ou |
| 16:56 | mudando cabos e switches de lugar ou algo assim, e fazia a máquina calcular. Depois que terminasse e precisasse fazer outro cálculo, precisava reconfigurar a máquina inteira de novo. Eram |
| 17:05 | calculadoras grandes reconfiguráveis, mas não eram computadores. De novo, elas não tinham como |
| 17:11 | armazenar programas e não eram capazes de simular qualquer outra máquina. Pelo mesmo motivo, o ENIAC que muitos consideram um dos primeiros computadores também não |
| 17:21 | era um computador. Era outra calculadora gigante. Sim, só porque era grande e complexa usava |
| 17:27 | válvulas no lugar de engrenagens, não é isso que faz a máquina ser um computador. Durante a guerra |
| 17:33 | teve várias tentativas de quebrar a criptografia alemã e um deles foi a máquina batizada de Colussus, na Inglaterra. Novamente, não era um computador, era uma máquina especificamente |
| 17:43 | desenhada pra quebrar ciphers da máquina de Lorenz. E por mais complexa e útil que ela fosse, |
| 17:48 | ainda não era um computador. O papel mais importante do Colossus foi de fato mostrar pra Alan Turing, que também tava trabalhando pra quebrar a criptografia alemã, |
| 17:58 | sobre a velocidade e confiabilidade da eletrônica. E esse aparato britânico tava na frente dos |
| 18:04 | esforços norte-americanos já que o ENIAC tinha tamanho e complexidade comparáveis ao Colossus, |
| 18:10 | mas só começou realmente a funcionar depois que a guerra tinha acabado, em 1946. E aí |
| 18:15 | ela já tava obsoleta. O engenheiro alemão Konrad Zuse desenhou calculadoras mecânicas e eletromecânicas de forma independente também, antes e durante a guerra. |
| 18:24 | Ele não usou eletrônicos. E o que ele construiu ainda era mais próximo dos princípios de Babbage, |
| 18:30 | mas teve o mérito de reconhecer a importância da programação e pode ser creditado por um |
| 18:35 | tipo de linguagem, o Plankalkül. Zuse foi um caso de azar. Ele era um gêniozinho também, autodidata, fazia tudo sozinho. Pra descrever circuitos lógicos ele inventou um |
| 18:45 | sistema próprio de notação de diagramas. Depois de acabar o Z1 em 1938 ele descobriu que o cálculo |
| 18:51 | que inventou sozinho já existia e era conhecido como cálculo proposicional. Enquanto trabalhava na sua dissertação de doutorado, ele desenvolveu o primeiro sistema formal conhecido pra notação |
| 19:01 | de algoritmos, capaz de lidar com branches e loops. Ele descreveu sua linguagem Plankalkül |
| 19:07 | num livro que não foi publicado, porque foi bem no período conturbado quando caiu a Alemanha Nazista. Os computadores que construiu foram destruídos por bombas durante a guerra, |
| 19:16 | ele só conseguiu resgatar o Z4. O Z3 também é considerado por muitos como o |
| 19:21 | primeiro computador programável. Um ENIAC precisava ser reprogramado pra cada tarefa |
| 19:26 | via o trabalhoso, tedioso e fácil de errar mecanismo via conexão de dezenas de cabos. E |
| 19:33 | diferente do monstruoso ENIAC ou mesmo do Colossus da Inglaterra, foi o Z3 feito na unha por Zuse, |
| 19:40 | sem financiamento do governo ou institutos nem nada, quem chegou mais perto do que Turing viria a |
| 19:45 | definir como máquina de Turing. O problema é que o Z3 não tinha condicionais, mesmo assim, |
| 19:51 | pelo menos na teoria, ele quase poderia ser considerado Turing Complete. Nas palavras de Raúl Rojas que em 1998 demonstrou isso, ele diz "Nós podemos portanto dizer que, |
| 20:03 | de uma perspectiva abstrata teórica, o modelo de computação do Z3 é equivalente ao modelo |
| 20:09 | de computação dos computadores de hoje, mas de uma perspectiva prática, e do jeito que o Z3 é realmente programado, ele não equivale ao modelo moderno de computador". |
| 20:19 | Aliás, assim como Raúl demonstrou, existem diversas formas artificiais e bem tortuosas |
| 20:25 | de tentar montar experimentos teóricos abstratos que no caso extremo dá pra dizer que um Engenho |
| 20:32 | Analítico de Babbage, o Z3 de Zuse ou o Colossus tem "potencial" de ser Turing Complete, mas na |
| 20:39 | prática eles não tinham chegado lá de verdade. Eu disse que o caso de Zuse foi de azar porque sendo |
| 20:44 | conterrâneo de Turing a diferença entre os dois é que Turing foi escolhido pelo governo Britânico pra ajudar nos esforços da guerra e teve a sorte de trabalhar num projeto de grande notoriedade, |
| 20:53 | mas quando Zuse se voluntariou pra ajudar na guerra, ele foi rejeitado. Antes de continuar a história eu falei algumas vezes o termo Turing Complete. E se você é |
| 21:02 | programador faz algum tempo, já deve ter visto ou participado de discussões inúteis sobre se uma |
| 21:08 | linguagem é Turing Complete ou não. Deixa eu aproveitar pra esclarecer isso. Máquinas de Turing podem ser funções parciais, ou seja funções pras quais não tem saídas bem |
| 21:18 | definidas. Elas podem receber qualquer número inteiro e dar de saída qualquer número inteiro. |
| 21:24 | No paper dele tem uma definição bem mais formal do que isso, mas só imagine uma máquina de Turing como uma função numa linguagem moderna, |
| 21:31 | que recebe números e devolve números. E o conjunto de funções que você pode expressar com máquinas de Turing é o que chamamos de funções computáveis. |
| 21:39 | Existem números computáveis e também números não-computáveis. Se for possível calcular um |
| 21:45 | número com precisão arbitrária, esse número é computável. No universo de todos os números |
| 21:51 | possíveis, de inteiros a complexos a pi e tudo mais, nem todos são computáveis, mas |
| 21:56 | na prática é difícil de cabeça chegar num número não computável. A maioria que mexemos no dia a dia são computáveis. Mas isso é só pra relembrar que computadores não necessariamente conseguem lidar |
| 22:07 | com 100% dos números possíveis na matemática. No máximo aproximamos. Pra um programador que não é cientista da computação e não vai lidar no dia a dia com |
| 22:17 | construção de CPUs ou linguagens de computador, talvez as definições formais não sejam tão |
| 22:22 | interessantes, por isso não estou detalhando demais. Mas é mais pra entender que existe uma definição matemática que delimita o que são números computáveis e funções computáveis, |
| 22:33 | ou seja, existe uma definição não só do que dá pra fazer, mas também do que não é computável. Se |
| 22:38 | quiser se aprofundar, o conceito mais importante sobre isso é o que Turing chamou de sequências |
| 22:44 | computáveis. Fica de lição de casa pra vocês pesquisar o que é isso. Mas voltando pra definição, uma linguagem Turing complete é uma que pode simular uma máquina de |
| 22:54 | Turing, como no site de visualização. Só isso. Ou seja, se você pode simular uma máquina de Turing, |
| 22:59 | então pode computar qualquer função que uma máquina de Turing consegue computar, |
| 23:05 | mas o que a torna "completa" é que ela pode computar todo o conjunto de funções computáveis |
| 23:10 | de Turing, e não só algumas. Na prática, todas as linguagens de programação que você consegue imaginar provavelmente podem ser "consideradas" Turing Complete na prática. |
| 23:20 | Se fôssemos rigorosos ao pé da letra, acho que nem existem linguagens que são |
| 23:25 | Turing Complete.Por definição uma máquina de Turing tem uma memória, a tal fita de papel, que não tem limites pra esquerda ou pra direita, é infinita. Um computador de verdade obviamente |
| 23:36 | tem limites. Você nunca vai ter RAM infinita. Ela pode ser muito grande, ter peta-petabytes, |
| 23:41 | mas isso não tá longe, mas muito longe de infinito. Máquinas ou linguagens que conseguem fazer tudo que uma máquina de Turing consegue mas até um certo limite de memória, chamamos de Linear |
| 23:51 | Bounded Automations ou Automação Linear Limitada, que são máquinas de Turing que impõe um limite pra |
| 23:57 | esquerda e pra direita da fita. E a pergunta mais óbvia é, se um computador não pode ser 100% uma máquina de Turing, como uma linguagem de programação, que roda num computador |
| 24:07 | com limites, poderia ser Turing Complete? Tem um jeito, que é definir uma linguagem só |
| 24:13 | no papel dizendo que suporta Listas ou Arrays infinitos, mas na prática a implementação que |
| 24:19 | limita o tamanho máximo. Ou seja, tipo dizer que na "intenção" ele tá dentro das regras, |
| 24:24 | mas quando tenta rodar, o hardware que é limitado e não deixa acessar memória infinita e crasheia. É um truquinho sujo usando uma tecnicalidade da definição. |
| 24:34 | Na formalidade matemática isso faz diferença. Mas pra um engenheiro faz pouca diferença. Então, |
| 24:40 | se você encontrar alguma discussão acirrada se a linguagem X ou Y é ou |
| 24:45 | não é Turing Complete e ninguém tá provando que as tais linguagens conseguem de verdade lidar |
| 24:50 | com memória sem limites, então a discussão é uma grande perda de tempo. Na prática, toda linguagem de programação que chamamos por aí de Turing Complete tem capacidade |
| 25:00 | de fazer qualquer coisa que outra linguagem Turing Complete consegue fazer. Dado tempo suficiente |
| 25:06 | de execução e memória suficiente, elas são equivalentes. Agora, ser capaz não é a mesma coisa |
| 25:12 | que ser eficiente. Muita gente confunde isso. Por isso é possível e não deveria ser surpresa, fazer um simulador de PC antigo em Javascript, como nesse site chamado PC Junior que vou deixar |
| 25:23 | linkado nas descrições. Se você ainda não entendeu, um PC é uma máquina universal de Turing, que consegue rodar um simulador de PC, que é uma máquina de Turing, |
| 25:33 | feita numa linguagem Turing Complete como Javascript, pra simular outras máquina de Turing, |
| 25:40 | no caso um PC virtual pra jogar Doom. Como os PCs de hoje são exponencialmente mais |
| 25:46 | poderosos que PCs dos anos 90, até usando uma linguagem como Javascript conseguimos simular |
| 25:51 | o PC velho inteiro a ponto de rodar Windows 95, Windows 3.1, jogos como Commander Keen ou Doom, |
| 25:56 | e esses programas não sabem que estão rodando num ambiente simulado. De qualquer forma, pra uma linguagem ser Turing Complete na prática, não precisa de muita coisa. |
| 26:06 | Não são sintaxes exóticas, bibliotecas complicadas nem nada disso. Numa linguagem imperativa basta |
| 26:13 | ter alguma forma de repetição condicional como um "while" ou um "if com go to" e uma forma de ler |
| 26:21 | e escrever pra algum lugar, tipo registradores ou variáveis. E numa linguagem funcional, baseada em |
| 26:26 | lambda calculus, basta conseguir abstrair funções de argumentos e aplicar funções em argumentos. |
| 26:32 | Tecnicamente, se você consegue fazer recursão, tá com meio caminho andado. Existe um conceito chamado Turing tarpit ou poço de piche, no sentido de você se sujar e afundar, |
| 26:43 | de linguagens que foram desenhadas especificamente pra terem só o mínimo do mínimo pra ser Turing |
| 26:49 | Complete. Ser legível e fácil de usar não é parte do requerimento. E nessa categoria se encontram linguagens como Brainfuck, que é uma linguagem Turing Complete, e teoricamente |
| 26:59 | consegue fazer tudo. Só vai ser terrivelmente traumático tentar. Se você nunca viu, eis um exemplo de um programa que calcula números de fibonacci em Brainfuck. Sim, acreditem ou não, |
| 27:09 | isso é uma linguagem de verdade, e é Turing Complete. Divirtam-se. Por isso eu repito, sim, qualquer linguagem Turing Complete consegue fazer tudo que outra |
| 27:19 | Turing Complete faz, mas não quer dizer que vai ser eficiente. Uma que confunde muita gente são Expressões Regulares que toda linguagem decente suporta hoje em dia. E não, |
| 27:27 | Expressões Regulares não são Turing Complete. Primeiro que ele só se move numa direção. Quando adicionaram backreferences não lembro se passava a ser Turing Complete, |
| 27:35 | mas pra todos os propósitos pode considerar que não é. Como o próprio nome diz, ela faz parte da categoria de Linguagens Regulares, que são linguagens que podem ser definidas puramente |
| 27:44 | com Expressões Regulares. Você vai entender isso se estudar autômato finito determinístico. Se estudar compiladores vai ver isso e chegar em coisas como a hierarquia de Chomsky. Fica |
| 27:54 | de lição de casa também. Outros exemplos que você já deve ter ouvido falar e é verdade, SQL não é Turing Complete e HTML ou XML não são Turing Complete. Na prática sim, |
| 28:05 | podem ser consideradas linguagens de programação, mas não são completas, ou seja, não conseguem |
| 28:11 | fazer o que outras linguagens conseguem. Pra um engenheiro isso não importa muito, o que importa é a eficiência pra certos casos de uso. Por exemplo, o horroroso Brainfuck é Turing |
| 28:21 | Complete, mas é inútil pra ser usado de verdade a menos que você seja sadomasoquista. Já HTML, |
| 28:27 | mesmo não sendo Turing Complete, é beeem mais útil na prática. Então é uma discussão mais acadêmica que não tem tanta utilidade a menos que, de novo, você seja alguém |
| 28:35 | trabalhando na pesquisa e desenvolvimento de novas linguagens por exemplo. Finalmente, se for pra ser rigorosamente formal, nenhum computador nem linguagem é Turing Complete |
| 28:46 | de verdade porque não temos memória infinita. Turing Complete é o ideal inatingível, o topo |
| 28:51 | da cadeia alimentar da ciência da computação. Nada que foi construído até hoje supera o que é |
| 28:57 | possível fazer com uma máquina de Turing teórico, a gente só se aproxima. Mesmo se pensarmos em um |
| 29:02 | computador quântico, ele também não consegue fazer nada a mais que uma máquina de Turing já não faça. Vai ser absurdamente eficiente, mas só isso: eficiente. É importante esse conceito pra |
| 29:13 | entender que o paradigma geral de computação que conhecemos hoje foi delimitado por Alan Turing e ninguém conseguiu pensar em outro modelo que supera o dele. Não é impossível, |
| 29:23 | só ninguém conseguiu ainda. Agora, voltando sobre a diferença entre grandes |
| 29:28 | máquinas de calcular e um computador moderno, ou seja, uma máquina universal de Turing, agora |
| 29:33 | você já sabe que muita gente chama as máquinas de Babbage, o de Zuze, o Eniac, o Colossus como |
| 29:39 | "computadores". Mas na real são máquinas de calcular glorificadas. Não são máquinas de |
| 29:44 | Turing e portanto não tem parentesco com nossos computadores modernos. Se eu usar a analogia de |
| 29:49 | parentesco, o computador de Babbage tem tanto parentesco com nossos PCs ou Smartphones quanto |
| 29:55 | um macaco tem parentesco com seres humanos. O DNA bate uma porcentagem alta, mas nós e os macacos |
| 30:01 | somos espécies completamente diferentes. Nós não descendemos dos macacos. Apesar do Turing ter desenvolvido toda a matemática que dá origem à ciência da computação; |
| 30:10 | a máquina de Turing é teórica, um modelo. Quem de verdade trabalhou no desenvolvimento |
| 30:16 | do primeiro hardware que pode ser considerado de fato o primeiro computador moderno completo |
| 30:22 | de verdade foi John Von Neumann no projeto do EDVAC, cujo paper pode ser considerado as bases |
| 30:28 | do computador moderno. Por isso chamamos a arquitetura de hardware de todo computador como arquitetura Von Neumann. E segundo ele, o que o Turing desenvolveu é impressionante, mas |
| 30:37 | ele não chegou a descrever como de fato construir uma máquina de Turing de verdade. Aí o Von Neumann |
| 30:43 | preencheu as lacunas que faltavam do ponto de vista da engenharia do hardware. Eu falei bastante de Turing e todo mundo hoje em dia já ouviu falar dele, |
| 30:52 | especialmente depois do filme e por outros motivos que não tem nada a ver com ciências da computação. Mas eu acho que a maioria dos programadores não ouve falar em Von Neumann |
| 31:02 | como deveria e eu vou corrigir isso hoje. E essa descrição vai ser lotada de superlativos, |
| 31:07 | pode se preparar. Eu gostei de um artigo que saiu no blog Cantors Paradise em 2019 escrito |
| 31:13 | por Jørgen Veisdal e vou pegar emprestado alguns trechos, mas recomendo ler o artigo completo que |
| 31:18 | vou deixar nas descrições abaixo. O artigo abre com uma frase sem autoria que diz "A |
| 31:24 | maioria dos matemáticos prova o que eles podem, Von Neumann prova o que ele quiser". Pois é, |
| 31:29 | eu falei que ia ter superlativos. E o artigo continua descrevendo como "o último representante dos grandes matemáticos". Qualquer um poderia descrevê-lo como a pessoa mais inteligente que |
| 31:39 | já viveu e não seria um exagero. Digamos que todo prêmio Nobel de ciências do século XX iria |
| 31:44 | reconhecer Von Neumann não como um par, mas muitas vezes como um superior. E não seria exagero dizer |
| 31:50 | que se a física teórica teve Albert Einstein, a matemática e computação não ficaram nem um pouco |
| 31:56 | longe, porque tiveram Von Neumann. Ele nasceu no começo do século XX em Budapeste, |
| 32:02 | na Hungria e desde criança já era prodígio. Histórias circulam que quando ele tinha seis |
| 32:08 | anos já conseguia fazer cálculos tipo dividir números de 8 dígitos de cabeça e conversar em |
| 32:13 | grego antigo. Isso não pareceu grande coisa? Ele já era proficiente em cálculo aos 8 anos |
| 32:18 | e leu a teoria das funções de Emile Borel aos 12. E segundo relatos de muitos que o conheceram ao longo dos anos, todos dizem que ele tinha memória eidética. Lembram do |
| 32:27 | Sheldon de The Big Bang Theory? Pois é, só que aqui era real. Ele era capaz de repetir tudo que |
| 32:32 | havia lido, mesmo anos depois. Num dos relatos no livro The Computer from Pascal |
| 32:38 | to Von Neumann de Herman Goldstein, ele diz o seguinte: "uma de suas habilidades impressionantes era seu poder de lembrança absoluta. Dentro do que eu posso dizer, |
| 32:47 | Von Neumann era capaz de ler um livro ou um artigo e citar de volta palavra por palavra; |
| 32:52 | e ele podia fazer isso anos depois sem hesitar. Ele também conseguia traduzir sem diminuir a |
| 32:58 | velocidade da sua língua original pra inglês. Numa ocasião eu testei sua habilidade e pedi que ele |
| 33:03 | me dissesse como o conto clássico A Tale of Two Cities começava. E assim ele começou a recitar o |
| 33:08 | primeiro capítulo inteiro, sem pausas, e continuou citando até que eu pedi que ele parasse depois de uns dez ou quinze minutos". Puta que o pariu. Esse é o tipo de coisa que é |
| 33:18 | quase super poder de herói da Marvel. O cara era tipo um Reed Richards com Tony Stark. Mas isso é |
| 33:24 | só a ponta do iceberg. Quando von Neumann entrou pra faculdade em 1921 ele já tinha escrito um |
| 33:29 | paper com seu tutor sobre uma generalização do teorema de Fejér. Aos 18 anos ele já era |
| 33:34 | reconhecido como um matemático propriamente dito. Colaborou em papers sobre teoria dos conjuntos |
| 33:39 | em Berlin e teve aulas de física, incluindo estatística mecânica com Albert Einstein. Ah sim, |
| 33:46 | ele tava na dúvida de que faculdade fazer, então eventualmente se formou tanto em engenharia química quanto Ph.D em matemática. Aos 24 anos. Sim, ele fez duas faculdades ao mesmo |
| 33:55 | tempo e se formou nas duas summa cum laude, ou seja, com a maior das honras. Um dos professores de matemática relatou o seguinte: "Durante um seminário pra |
| 34:04 | estudantes avançados em Zürich que eu tava ensinando, eu cheguei num certo teorema, e eu disse que ele ainda não estava provado e que poderia ser difícil. Von Neumann não |
| 34:13 | disse nada por cinco minutos, daí levantou a mão. Quando eu chamei ele pra ir pra lousa, ele foi e escreveu a prova. Depois disso eu tive medo de Von Neumann." Ah sim, e esse professor |
| 34:24 | era George Pólya, por si só um dos maiores matemáticos da Hungria. Depois disso ele continuou trabalhando em pesquisa com o maior matemático do mundo na época, |
| 34:33 | David Hilbert. E durante esse período ele escreveu um monte de papers sobre teoria dos |
| 34:38 | conjuntos e lógica enquanto ainda estava na faixa dos 20 anos. E em resumo, sua maior contribuição |
| 34:44 | à teoria dos conjuntos é o que seria chamado de teoria de Von Neumann-Bernays-Gödel. E não, |
| 34:49 | eu não sei o que isso significa. Fica de lição de casa pra vocês. Mais ou menos na mesma época que estava contribuindo pra teoria dos conjuntos, |
| 34:56 | ele também provou um teorema conhecido como minimax pra jogos de soma zero. E isso criaria |
| 35:02 | a fundação pro novo campo de estudos que viria a ser chamado de teoria dos jogos. Lembra aquele |
| 35:07 | filme do Russell Crowe, Mente Brilhante? Por causa do filme todo mundo acha que foi John Nash que deu |
| 35:12 | origem à teoria dos jogos, e apesar de ter sido importante depois, quem criou a fundação toda |
| 35:18 | foi Von Neumann. Em colaboração com o economista Oskar Morgenstern, Von Neumann depois publicaria |
| 35:24 | o livro definitivo em jogos cooperativos de soma zero, intitulado Teoria dos Jogos e Comportamento |
| 35:30 | Econômico em 1944. Mas voltando pra 1929, ou seja, |
| 35:35 | quando tava com 26 anos ele já tinha publicado 32 papers de pesquisa, quase um paper por mês. E |
| 35:42 | até aqui ele já influenciou os campos de teoria dos conjuntos e ajudou a fundar teoria dos jogos. O que mais? Nessa época um tema que tava só começando gerava discussões ferrenhas entre |
| 35:52 | físicos, a tal da física quântica. Numa dessas disputas estava nomes que você já ouviu falar, |
| 35:57 | Heisenberg e Schrödinger. E não, não é esse Heisenberg e sim este outro. Schrodinger era meio |
| 36:03 | hater do Heisenberg, dizendo que as formulações dele tava tudo errado. Iniciando com um incidente entre esses dois, nos anos seguintes o von Neumann publicou |
| 36:12 | vários papers que estabeleceram um framework matemático rigoroso pra mecânica quântica, |
| 36:18 | hoje conhecido como axiomas de Dirac-Von Neumann, isso sem contar que ele explicou como entender |
| 36:23 | mecânica quântica do ponto de vista estatístico. Ele teve um insight que nem Heisenberg, nem Niels Bohr, ou Schrodinger tiveram, baseado no campo de estudos de seu mentor David Hilbert, |
| 36:34 | os espaços vetoriais de Hilbert que eu menciono no meu video sobre Supremacia Quântica. Mas só |
| 36:39 | resumindo que enquanto gênios como Schrodinger tavam batendo cabeça entre eles, Von Neumann |
| 36:44 | foi e encerrou a discussão. Só que daí Hitler subiu ao poder na Alemanha, |
| 36:50 | a guerra tava pra começar e Von Neumann foi pros Estados Unidos, recrutado pra Universidade Princeton como professor visitante. Logo no começo ele se virou pra teoria ergódica. E sim, eu também |
| 37:01 | não tenho a mínima idéia do que diabos é isso. Mas segundo o artigo, teoria ergódica é uma área da |
| 37:06 | matemática que estuda as propriedades estatísticas de sistemas dinâmicos determinísticos. Enfim, |
| 37:11 | basta dizer que pra surpresa de ninguém a essa altura, Von Neumann fez contribuições essenciais |
| 37:17 | incluindo o teorema ergódico médio de Von Neumann, considerado a primeira base matemática |
| 37:22 | rigorosa pra estatística da mecânica de líquidos e gases. O matemático Paul Halmos disse sobre isso: |
| 37:28 | "se von Neumann nunca tivesse feito mais nada, só isso já teria sido suficiente pra garantir |
| 37:34 | imortalidade na matemática". Com a Segunda Guerra iminente, os nazistas |
| 37:39 | perseguindo judeus, era questão de tempo pra chegarem na Universidade de Göttingen na Alemanha, que era então a referência do mundo em matemática e física. Mas por causa da perseguição, diversos |
| 37:50 | nomes famosos ou foram expulsos ou fugiram e muitos foram pro recém formado Instituto |
| 37:55 | pra Estudos Avançados nos Estados Unidos. Além de Von Neumann e Wigner veio Einstein que era judeu, |
| 38:00 | claro. Daí outros como Max Born, Leó Szilárd, Edward Teller, Edmund Landau, James Franck, Richard Courant e vários outros foram também. |
| 38:09 | Enquanto estava no Instituto de Estudos Avançados, Von Neumann, só pra variar, fundou o campo de |
| 38:14 | geometria contínua. Assim como no caso da teoria ergódica, ele publicou dois papers, um provando sua existência e discutindo suas propriedades, e outra dando exemplos. Fundar |
| 38:24 | campos novos virou rotina pro Von Neumann. Fico imaginando ele acordando e pensando "hmm, que |
| 38:29 | novos campos de estudo que não existem eu quero revolucionar hoje?" E pra provar isso, lá pro meio dos anos 30 ele desenvolveu expertise também na ciência de explosões, fenômeno que é bem |
| 38:40 | difícil de modelar matematicamente. Veja uma explosão em CG em filmes dos últimos 20 anos |
| 38:45 | e você vai ver que só hoje conseguimos simular explosões de forma mais realista. De qualquer forma Von Neumann acabou se tornando uma autoridade também na matemática de cargas |
| 38:56 | moldadas, cargas explosivas pra focar o efeito da energia na explosão. E sua maior contribuição pra |
| 39:02 | a bomba atômica foi no conceito e design das lentes explosivas que era necessárias pra comprimir o |
| 39:07 | núcleo de plutônio da arma Fat Man, que foi a usada em Nagasaki. Ah sim, ele participou do |
| 39:13 | projeto Manhattan e era conhecido de Richard Feynman e Robert Oppenheimer. No currículo de Von Neumann até agora temos contribuições na matemática, incluindo teoria |
| 39:23 | dos conjuntos, teoria dos números e espaços de Hilbert; na física, em especial em mecânica quântica; na economia com a teoria dos jogos; na biologia com autômatos celulares e depois em |
| 39:33 | computadores e inteligência artificial. E aqui voltamos no nosso tópico central. Seu trabalho com computadores começou em Princeton no meio dos anos 30 depois de se encontrar com um |
| 39:44 | jovem Alan Turing de 24 anos, quando ele passou um ano no Instituto de Estudos Avançados entre 1936 |
| 39:51 | e 37. Turing começou sua carreira trabalhando no mesmo campo que Von Neumann, em teoria dos |
| 39:56 | conjuntos, lógica e o problema de decisão de Hilbert, o tal de "Entscheidungsproblem" e por |
| 40:02 | isso seu paper seminal de 1936 se chama "On Computable Numbers, with an Application to |
| 40:08 | the Entscheidungsproblem". Quando terminou seu ph.D em 1938, Turing já |
| 40:13 | tinha estendido o trabalho de Von Neumann e Gödel e introduziu lógica original e a noção de |
| 40:19 | computação relativa, aumentando suas máquinas de Turing anteriores por máquinas Oráculo, permitindo |
| 40:25 | o estudo de problemas que vão além das capacidades da máquina de Turing original. Von Neumann chegou |
| 40:31 | a convidar Turing pra uma posição de pós-doutorado como assistente de pesquisa depois do ph.D |
| 40:36 | mas Turing rejeitou e em vez disso viajou de volta pra Inglaterra, pra participar do filme |
| 40:42 | do Cumberbatch quebrando o código dos nazistas e ajudando a vencer a guerra. Apesar do Turing ter ido embora, Von Neumann continuou pensando sobre computadores durante |
| 40:51 | o fim dos anos 30 e durante a guerra. Depois da sua experiência no projeto Manhattan ele foi |
| 40:56 | atraído pelo projeto do ENIAC da universidade da Pensilvânia durante o verão de 1944. E ele |
| 41:02 | tinha boa noção da quantidade massiva de cálculos necessários pra prever o raio de |
| 41:07 | uma explosão nuclear, ou o planejamento do caminho da bomba e também sobre como quebrar esquemas de criptografia. São centenas de cálculos complexos diferente e lembrem que o ENIAC era uma |
| 41:17 | calculadora eletrônica gloficada e horrorosa, que só conseguia fazer uma tarefa de cada vez e |
| 41:23 | toda vez pra reprogramar precisava reconfigurar dezenas e dezenas de cabos. Pro Von Neumann tava claro que isso não ia rolar e em 1945, pro projeto da construção do computador |
| 41:33 | EDVAC, ele propôs a descrição pra uma arquitetura de computadores hoje conhecido como arquitetura |
| 41:38 | Von Neumann, que inclui o básico de um moderno computador eletrônico digital, que inclui: uma unidade de processamento que contém uma unidade de lógica aritmética e registradores de processo. Uma |
| 41:49 | unidade de controle que contenha um registrador de instrução e um contador de programa. Uma unidade |
| 41:55 | de memória que possa armazenar dados e instruções. Armazenamento externo e mecanismos de entrada |
| 42:01 | e saída. Ou seja, ele especificou o que hoje chamamos de CPU, RAM e tudo mais. É a descrição |
| 42:07 | de um computador moderno. Como eu disse antes, o grande insight que separa o computador moderno das grandes calculadores, que tanto Turing quanto Von |
| 42:16 | Neumann pensaram mas que não era nem um pouco óbvio na época, era o conceito de instruções de programa e dados conviverem no mesmo espaço de memória e armazenamento, em vez de serem duas |
| 42:26 | coisas separadas como na máquina de Babbage. E não contente em ter feito só isso, claro que |
| 42:32 | Von Neumann foi além. Se você estudou algoritmos e estruturas de dados na faculdade e viu algoritmos de ordenação, com certeza esbarrou no Merge Sort, |
| 42:41 | que divide arrays pela metade antes de ordená-los recursivamente, pra no final fazer o merge do |
| 42:47 | resultado. Foi inventado por Von Neumann, claro. E ele mesmo escreveu o algoritmo pro computador |
| 42:53 | EDVAC. De bônus, já que parece que ele tinha tempo sobrando, ele introduziu computação estocástica, |
| 42:59 | embora a idéia era tão inovadora pra época que não seria implementada por mais uma década. E por fim, |
| 43:05 | ele criou o campo de autômatos celulares, que precedeu a descoberta da estrutura do |
| 43:10 | DNA por muitos anos. E esse provavelmente vai ser o maior, melhor e mais influente currículo de um acadêmico e engenheiro que você jamais vai |
| 43:20 | ver. E só pra jogar mais lenha na fogueira. Você poderia imaginar que um matemático do calibre de |
| 43:25 | Von Neumann, que tá ali pau a pau no grupo de nomes como Einstein ou Schroedinger ou Hilbert, |
| 43:31 | deve ser um daqueles matemáticos introspectivos, quietos, tímidos, isolados e anti-sociais bem no |
| 43:36 | estilo Turing do Cumberbatch, né? Não, pelo contrário, segundo relatos de |
| 43:41 | conhecidos: "Festas e vida noturna tinham um apelo especial pra Von Neumann. Enquanto ensinava |
| 43:47 | na Alemanha, ele foi assíduo da era de cabarés do circuito noturno de Berlin. E as festas na |
| 43:54 | casa de Von Neumann eram frequentes, e famosas, e longas." Ele era aquele tipo mais bonachão, |
| 43:59 | que fazia piadinhas infames. E durante o período no Instituto de Estudos Avançados ele recebia reclamações porque ligava seu gramofone super alto tocando marchas alemãs no escritório, |
| 44:10 | distraindo os escritórios vizinhos, incluindo Albert Einstein, que ficava putaço. Von Neumann morreu de câncer em 1957, aos 53 anos. Ou seja, tudo isso que eu contei, foi antes |
| 44:21 | dos 50 anos. Se você é do tipo que gosta de ter alguém em quem se espelhar, um ideal inatingível, |
| 44:26 | esquece porcaria de CEO de startup ou influencier mamão com açúcar. Isso é a definição de padrões |
| 44:33 | muito baixos. Se é pra sonhar, então sonha alto e coloca um Von Neumann como objetivo de vida |
| 44:38 | pra ser fã. Quando estiver em dúvida, pense, o que Von Neumann faria? Hmm, ok, vamos pegar um |
| 44:44 | problema que todo mundo acha impossível resolver, e resolver. E por hoje é isso aí! Eu disse que essa história ia ser comprida, mas eu acho que a grande maioria |
| 44:53 | dos programadores simplesmente desconhece John Von Neumann. Todo mundo já ouviu falar |
| 44:58 | de Alan Turing mas só o que tem no filme. E muito programador iniciante adora falar sobre Turing |
| 45:03 | Complete e se eu perguntar o que é uma máquina de Turing só sobra silêncio. Turing e Von Neumann definiram o que é o computador moderno que usamos até hoje, |
| 45:13 | tanto do ponto de vista do rigor matemático até a arquitetura do hardware propriamente dito. E |
| 45:19 | por isso eu considero essa dobradinha como os verdadeiros pais da computação. E eu sei, |
| 45:24 | muita gente vai perguntar, mas cadê o doutor Alonzo Church e Lambda Calculus? Relaxa que tá nos planos falar disso uma hora. Pra não perder quando sair, |
| 45:32 | assine o canal e clique no sininho pra ser notificado. Se curtiu o video deixa um joinha e compartilhe o video com seus amigos. A gente se vê, até mais! |
