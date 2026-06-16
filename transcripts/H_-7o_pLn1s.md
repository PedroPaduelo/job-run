# Rant: Projetos, TESTES e Estimativa??? | Rated-R

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=H_-7o_pLn1s
- **Duração:** 53:08
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Vamos dar uma pausa na série de videos técnicos. Se não assistiu ainda, fiz uma minissérie falando sobre redes e logo em seguida começando |
| 0:09 | a falar sobre Linux. Como foi muita coisa técnica, eu me entediei, então resolvi mudar a marcha hoje pra falar |
| 0:16 | sobre gerenciamento de projetos, em particular finalmente quero discutir sobre o famigerado desenvolvimento orientado a testes. |
| 0:23 | É um puta tema cabeludo que daria pra fazer um canal inteiro sobre, mas a idéia é discutir |
| 0:28 | só alguns pontos básicos, pra iniciantes no assunto mesmo. Então vamos lá. |
| 0:37 | (...) Se você já tem experiência, trabalha em grandes empresas e grandes projetos, certamente vai discordar de algumas coisas que vou falar hoje e não está errado. |
| 0:46 | Processos de gerenciamento de projetos de software variam bastante e devem ser customizados |
| 0:52 | especificamente pro seu tipo de empresa, pro seu estilo de trabalho em equipe. |
| 0:57 | Não existe nenhuma metodologia que vai se encaixar magicamente em todos os lugares. Simplesmente não existe, é inútil tentar fazer isso. |
| 1:05 | Eu falei sobre isso no video de Esqueça Metodologias Ágeis. Recomendo assistir esse também depois. |
| 1:10 | A expectativa é que existe algum conjunto de procedimentos que toda equipe consegue |
| 1:15 | seguir pra manter os projetos estáveis e eficientes. Certamente deve existir algum tipo de PMI, Agile, CMMi, bla bla bla Alguma fórmula que |
| 1:25 | o Spotify, o Netflix, a Microsoft, alguém inventou, que resolve todos os problemas. E não tem. |
| 1:31 | Quanto mais cedo aceitarem isso, menos dor de cabeça vão ter. Se você se ver dizendo "a gente segue o modelo Spotify" ou segue qualquer modelo, certamente |
| 1:40 | está fazendo errado. Veja no meu video do Guia Definitivo de Organizações. Além disso, se você é um empreendedor não-técnico, certamente assistiu um monte de palestras |
| 1:50 | motivacionais, bullshit de startups e tá fazendo um monte de coisas erradas. Eu fiz 3 videos pra vocês também, o de Empreendendo Errado com Software e o video em duas partes |
| 2:00 | dos 10 Mitos sobre Tech Startups. Vou tentar não repetir o que já disse lá, então assistam depois também. |
| 2:06 | Vamos lá, no final do dia, você, como membro de uma equipe de desenvolvimento de software, |
| 2:12 | precisa entregar alguma coisa que seu chefe ou seu cliente precisam no produto deles. |
| 2:18 | Ou mesmo no seu próprio produto. Se for iniciante, é muito mais fácil integrar uma equipe que já existe, que tem membros |
| 2:24 | experientes e processos já em andamento. Um iniciante sempre vai fazer errado da primeira vez, especialmente sozinho. |
| 2:31 | Não tem como acertar de cara sem nunca ter feito, e isso não é um defeito, é natural. |
| 2:37 | São muitas peças móveis que você nunca viu funcionando. É que nem eu dar um carro desmontado e mandar montar tudo e ainda funcionar direito no final. |
| 2:45 | Impossível. Vai parecer que é simples, só encaixar as peças e apertar os parafusos. Mas não é só encaixar. |
| 2:51 | Precisa monitorar cada pedaço, testar, ver se não tem vazamentos, se tá tudo alinhado, balanceado, etc. |
| 2:57 | Porque se sair só montando tudo sem testar nada, quando terminar e tentar ligar o carro, vai explodir. |
| 3:03 | Ou, o mais provável, nem vai ligar, e ninguém vai saber porque. E agora que tá tudo montado, vai precisar desmontar tudo e ir testando. |
| 3:10 | No mínimo vai ser uma grande perda de tempo. Antes de mais nada, você precisa de pelo menos um membro da equipe um pouco mais experiente. |
| 3:18 | Nem vou dizer sênior porque não quero ficar tentando definir hoje o que é junior ou sênior, mas alguém que já entregou no mínimo um projeto de sucesso. |
| 3:26 | Porque essa pessoa precisa se responsabilizar pelas decisões técnicas. Decidir qual framework, bibliotecas, módulos, como as coisas vão ficar organizadas, como |
| 3:36 | vai ser feito deployment. E lógico, todo mundo da equipe pode e deve contribuir com idéias, sugestões, mas alguém |
| 3:42 | precisa bater o martelo e todo mundo seguir em frente. Senão toda hora se perde tempo com discussão inútil. |
| 3:50 | Um grupo cheio de opiniões que leva horas ou dias pra decidir as coisas é ineficiente |
| 3:55 | e o resultado sempre vai ser uma droga. Aliás, se isso acontece, é um bom sinal que o tal sênior responsável é ruim. |
| 4:03 | Nenhuma equipe respeita alguém que só fala mas não faz. Um bom sênior fala menos e mostra mais, ensina como faz na prática. |
| 4:10 | E o melhor é errar cedo, ter evidências de porque a primeira decisão deu errado, e isso servir de input pra uma segunda decisão melhor. |
| 4:17 | Do que ficar horas discutindo o melhor caminho, pra no final dar errado de qualquer jeito. |
| 4:22 | Isso talvez seja a coisa mais fundamental numa equipe. Errar antes e consertar rápido é infinitamente melhor do que horas e horas de discussão |
| 4:31 | tentando chegar em consenso e bikeshedding. Ninguém tem certeza? Foda-se. |
| 4:37 | Cara ou coroa. Faz um teste. Vê se funciona. Se falhar, agora veja porque falhou, conserta, e segue em frente. |
| 4:43 | Essa é a essência do processo de lidar com o desconhecido. Todo mundo pensa que quando algo é desconhecido o certo é tentar planejar infinitamente até |
| 4:52 | ter todos os passos minuciosamente detalhados. Mas tá errado. É desconhecido, qualquer planejamento que tentar fazer, quanto mais detalhado for, mais |
| 5:01 | errado vai estar. Acho que esse é o ponto principal da discussão de hoje. Quando você e sua equipe são inexperientes, das duas uma, ou vão andar super lento porque |
| 5:10 | vão tentar planejar em excesso, discutir em excesso, ou vão ser kamikazes retardados |
| 5:15 | que vão começar a fazer e só ir fazendo sem parar pra ver se estão indo na direção certa. Ambos estão errados. Não consigo entender porque o desespero não leva ao mais óbvio, que é errar cedo, consertar |
| 5:25 | rápido e o mais importante: garantir que o que já foi feito e está certo, não quebre à toa, porque isso seria o equivalente a andar pra trás. |
| 5:33 | Não tem nenhum problema rascunhar o que precisa ser feito. Faça um checklist de funcionalidades. |
| 5:39 | Faça post-its com cada tarefa. Faça uma planilha. Não importa. Todo mundo da equipe precisa ter uma noção geral do que precisa ser feito. |
| 5:46 | Mas não tente detalhar em excesso. Só coloque detalhes no que estiver muito incerto, no momento em que precisa ser feito |
| 5:54 | e não com meses de antecedência. Portanto, qualquer um que tenha estudado engenharia de software ou gerenciamento de projetos tradicional, |
| 6:02 | e viu coisas como requisitos, casos de uso, ou até mesmo stories, pára. Você só precisa de uma lista, curta, com poucas palavras. |
| 6:09 | Não é pra levar dias escrevendo, é pra levar horas, no máximo. Vou voltar nesse ponto mais pro fim. |
| 6:16 | Não importa quantos diagramas, fluxogramas, photoshops ou words vocês produzam, nada |
| 6:21 | disso é o software. Pra um amador, dá impressão que o ideal é ter o máximo de páginas de requerimentos |
| 6:27 | detalhados quanto possível. Tá errado. Essa noção errada vem pelo seguinte: qualquer projeto de engenharia civil, pra fazer uma |
| 6:34 | casa ou um prédio, precisa de meses de planejamento, várias plantas baixas, diagramas de encanamento, |
| 6:40 | diagrama elétrico e tudo mais, pra garantir que o prédio seja construído perfeitamente dentro das especificações. |
| 6:46 | Portanto, software deveria ser a mesma coisa. Vamos fazer quinhentas páginas de diagramas UML, que é o equivalente a planta baixa, |
| 6:54 | porque daí, quando for escrever o software propriamente dito, vai sair tudo perfeitamente dentro das especificações. |
| 7:00 | Essa premissa está errada. Todo mundo acha que um programador é um pedreiro. Não querendo desvalorizar o trabalho de pedreiros, mas um programador, na realidade, é o arquiteto. |
| 7:10 | O trabalho de pedreiro, é 100% automático desde sempre. O pedreiro de software é o compilador ou interpretador. |
| 7:17 | A planta baixa É o código fonte do software. Portanto todo programador, quer ele queira ou não, faz trabalho de um arquiteto. |
| 7:26 | Lógico, se sua linha de trabalho é só instalar Wordpress pra diversos clientes. Não se está produzindo software novo, só copiando e colando o que já existe e esse |
| 7:36 | trabalho, sim, parece mais uma linha de fábrica. Mas estamos falando de fazer software que não existe, quase do zero. |
| 7:42 | Reusando vários componentes como frameworks ou bibliotecas, sim, mas o software final |
| 7:47 | não seria possível fazer numa linha de fábrica. Cada passo no desenvolvimento desse software requer tomadas de decisões de cada programador |
| 7:55 | envolvido. Não existe receita. O famoso exemplo de fazer um botão com cor na tela. |
| 8:00 | Dá pra fazer de dezenas de jeitos diferentes. Posso fazer todo o CSS e HTML do zero. |
| 8:05 | Posso escolher usar um Tailwind da vida. Mas se escolher isso, não pode ser só pra um botão, o certo é usar em todos os botões |
| 8:12 | e elementos gráficos de todas as telas. Eu quero isso? Posso escolher fazer todo o sistema de eventos do zero ou usar React ou Vue. |
| 8:19 | Mas de novo, isso vai afetar todo o sistema. Qual minha equipe tem mais facilidade pra usar? |
| 8:24 | Já tinha começado como um sistema em Angular? Se eu decidir que quero usar Vue no lugar, quanto custa reescrever tudo? |
| 8:30 | Vale a pena? Tudo são decisões. Muitas sem grandes consequências, mas algumas podem quebrar seu projeto inteiro se feito |
| 8:37 | de forma irresponsável. Como se toma esse tipo de decisão? Não tem receita pra isso. |
| 8:42 | Na maioria das vezes, seu prazo tá apertado, e o ideal é não escolher decisões que envolvam jogar tudo fora e fazer tudo de novo, então isso já elimina várias escolhas. |
| 8:50 | Mas algumas são incertas, se der certo talvez vocês ganhem produtividade pra frente. |
| 8:55 | Pra isso se fazem provas de conceito. Todo mundo ignora o poder das provas de conceito. |
| 9:01 | Prova de conceito ou protótipos são pedaços de código, uma pequena parte da aplicação, |
| 9:06 | que deve ser feito com o objetivo de potencialmente jogar fora depois. Portanto não precisa ser integrado ao código principal. |
| 9:13 | Pode ser feito como uma branch do repositório, o que num GitHub chamamos de pull requests ou num GitLab chamamos de merge requests. |
| 9:21 | Tecnicamente é um desvio no repositório de código. Enquanto todo mundo continua trabalhando no tronco principal, a branch `main`, alguém |
| 9:28 | trabalha nesse desvio, num galho, por alguns poucos dias, pra ver na prática se a mudança sugerida realmente trás benefícios ou não. |
| 9:36 | Provas de conceito tem que ser um empreendimento curto, um micro-projeto de prazo fixo. |
| 9:41 | Coisa de 2 dias, uma semana no máximo. Mesmo estando incompleto, no final desse período deve dar pra equipe ver na prática como a |
| 9:48 | idéia se materializa em código, os impactos que causa, e se todo mundo está confortável |
| 9:54 | em seguir em frente. Daí pode até jogar fora esse galho e todo mundo voltar pro tronco principal aplicando |
| 9:59 | seja lá qual seja essa mudança técnica. Ou então se prova que a idéia era mais complexa do que se imaginava, e todo mundo descarta |
| 10:07 | essa idéia. Mas isso não foi perda de tempo. Você tem 10 grandes dúvidas técnicas que podem custar muito tempo, coisas no nível: |
| 10:15 | devemos usar React ou Vue? Devemos ficar no Postgres ou migrar pra Firebase? Devemos ficar só em APIs REST ou já começar tudo em GraphQL? |
| 10:24 | Vamos dar deploy das coisas em Vercel ou criar Terraform pra AWS? Só que ninguém da equipe nunca teve muita experiência em nenhuma dessas coisas. |
| 10:32 | Cada uma pode potencialmente custar 2 a 4 meses. Sua equipe só tem 3 pessoas. |
| 10:37 | Então fácil, se for fazer tudo, não vai sair por menos que 10 meses pra equipe, e |
| 10:42 | com a falta de experiência, fácil vai virar o ano. Em vez disso, pára tudo, cada um da equipe vai fazer provas de conceito de cada coisa, |
| 10:51 | num prazo máximo de 2 semanas. E esse prazo é fixo, depois de 2 semanas vamos ver o que saiu. |
| 10:57 | No final, mais da metade dessas coisas se provam realmente mais complicadas ou o custo claramente não vai compensar. |
| 11:03 | Em vez de ir em frente com 10 coisas incertas que vai custar pelo menos 1 ano pra fazer, |
| 11:08 | vocês concordam agora em desistir de 7 delas, porque a prova de conceito deu evidências que não vai dar certo. |
| 11:14 | Por outro lado, 3 dessas coisas se provaram boas, e vocês vão seguir em frente. Ao custo de 2 semanas da equipe, vocês economizaram mais de meio ano de trabalho que ia dar errado, |
| 11:25 | e vão prosseguir com 3 coisas que vão custar um mês da equipe e que todo mundo tem mais certeza que vai dar certo. |
| 11:31 | Esse é o grande truque: não se comprometa com coisas de longo prazo que ninguém tem certeza. |
| 11:37 | Pague um tempo curto pra descobrir se dá pra cobrir essa incerteza. Não é jogar tempo fora, é pagar um pouco pra não jogar muito mais fora. |
| 11:45 | Essa noção deveria ser simples, mas na minha experiência, pouca gente parece entender que mais vale a pena jogar fora 2 semanas do que se comprometer cegamente com um projeto |
| 11:54 | incerto que vai levar um ano. Na cabeça de muita gente, como 1 ano tá longe, fica aquela sensação de "vamos indo, |
| 12:01 | lá na frente a gente vê como faz". Especialmente em tech startups que vivem de dinheiro de investimento, esse tipo de decisão |
| 12:08 | errada acontece muito, porque afinal é muito mais fácil gastar o dinheiro dos outros. E mesmo quem tem que gastar do próprio bolso, fica apreensivo com essa noção de "jogar |
| 12:18 | 2 semanas fora". Só que não é "jogar fora", é o mesmo que pagar um seguro. |
| 12:23 | Ninguém gosta de pagar mil reais, dois mil reais, todo ano, que ao final do ano, parece que não serviu pra nada. |
| 12:29 | Só que se durante esse ano tiver um acidente, e você atropelar e machucar alguém, agora não é dois mil reais que vai custar, vai ser 100 mil, 200 mil reais. |
| 12:37 | Quem faz economia porca e fica de bravata achando que "não precisa, não vai acontecer", |
| 12:42 | é o primeiro que se envolve em acidentes e depois fica falido. Em projetos é a mesma coisa. Se for coisa que você já faz várias vezes antes, o risco é baixo, já sabe o que tem |
| 12:51 | que fazer, tem noção de quanto vai custar e mais ou menos sabe o que pode ou não dar errado, então consegue ir em frente. |
| 12:57 | Mas se nunca fez, é melhor fazer um teste antes de decidir. E caindo no dia a dia de programação, é esse o mesmo argumento de porque falamos que |
| 13:05 | todo programador deveria fazer, no mínimo, testes unitários de tudo que está trabalhando. |
| 13:10 | Toda nova funcionalidade, deveria ser coberta de testes. Toda correção de bugs, deveria começar com um teste que simula o bug, pra que já |
| 13:19 | comece falhando, e você sabe que corrigiu quando esse teste passa. Não só isso, esse bug em particular não vai acontecer de novo. |
| 13:26 | Todo teste que você começa escrevendo antes de fazer o código, é como uma mini prova de conceito antes de tentar fazer uma coisa que não tem muita certeza. |
| 13:34 | Se não tem certeza, comece escrevendo um teste. Muitas pessoas já me pediram pra fazer um video sobre testes, mas eu realmente não |
| 13:42 | tenho vontade, porque testes é um assunto que tem já toneladas de documentação, livros, |
| 13:47 | tutoriais, cursos, blog posts, PDFs gratuitos online, pra cada linguagem diferente, pra cada framework. |
| 13:53 | Testes não é um troço que você aprende em 5 minutos e faz igual pra sempre. É um conjunto de técnicas. |
| 13:59 | O ideal é um junior parear com alguém mais experiente e aprender na prática: quando precisa fazer, e com que nível de detalhes. |
| 14:05 | É muito importante que sua equipe tenha pelo menos uma pessoa mais experiente que entende a importância de ter testes e oriente os demais a fazer. |
| 14:14 | Deixa eu fazer o sales pitch de 2 minutos de porque todo programador deve fazer testes, |
| 14:19 | de porque nenhum pull request pode ser mergeado sem testes, e porque uma pessoa que se diz |
| 14:24 | sênior e é contra fazer testes, por definição, não deveria se considerar sênior. |
| 14:30 | Toda regressão é tempo e dinheiro jogado fora. E o que é uma regressão? Regressão é exatamente o que o nome diz. |
| 14:36 | Se até este momento, digamos que alguém de QA testou tudo e tinha zero bugs. Alguém me faz um pull request que ficou trabalhando sem integrar por duas semanas. |
| 14:44 | Sem testar. E dá merge na master. Faz deploy, e o que acontece? Surgem um monte de bugs. |
| 14:50 | Não só na funcionalidade que ele tava trabalhando, mas em outros lugares que antes funcionava. Esse amador regrediu o trabalho de todo mundo. |
| 14:58 | Tudo deu passos pra trás. Agora o certo é dar revert nesse pull request, reverter mesmo. |
| 15:04 | Só que esse pull request não tem mais como voltar atrás, porque dar deploy, ele alterou |
| 15:09 | o schema do banco de dados e não tem como voltar mais ao schema anterior sem um grande downtime. |
| 15:15 | Um desastre. E, claro, tenha certeza que esse indivíduo fez esse deploy na tarde de sexta-feira. |
| 15:21 | Lógico. Cancela o happy hour porque a noite de sexta vai ser longa, fim de semana adentro, pra consertar essa cagada. |
| 15:27 | O fluxo é simples: todo programador, seja fazendo testes-antes ou testes-depois, quando |
| 15:34 | diz que concluiu seu pull request, também adicionou um mínimo de testes, fez rebase com a master, e indicou pra equipe que tá tudo pronto. |
| 15:41 | Alguém da equipe sempre deve avaliar esse pull request, normalmente alguém mais experiente. Pelo menos pra bater o olho e ver que não tem nada que parece muito mau feito ou muito |
| 15:50 | fora do lugar e, principalmente, se tem testes. Se não tiver, já rejeita. Se for uma equipe minimamente bem equipada, está usando repositórios privados de Git |
| 16:00 | seja num GitHub ou GitLab. Ambos tem suporte a rodar testes automatizados num serviço separado. |
| 16:06 | Nesse momento ele já puxou o que está nesse pull request, subiu um container de docker, e executou os testes automatizados do projeto. |
| 16:14 | E quando o avaliador for checar o pull request, já vai saber inclusive se os testes passaram |
| 16:19 | ou não. O GitLab tem a própria ferramenta que é o GitLab CI, de Continuous Integration. |
| 16:24 | Tem diversos serviços externos que integram com GitHub como CircleCI, Travis CI, Semaphore |
| 16:31 | e outros. É super simples configurar no seu projeto e não vejo nenhum motivo pra não usar. |
| 16:36 | Se o pull request parece que está ok, e o CI diz que os testes passaram, só agora é |
| 16:41 | permitido fazer merge desse código novo na master. No mínimo, sabemos que as funcionalidades que funcionavam antes, cobertas com testes, |
| 16:50 | continuam funcionando depois, mesmo com a inclusão desse código novo. É um bom indicativo pra toda a equipe que as coisas estão andando pra frente, e não |
| 16:58 | ficando com débito técnico acumulado pra trás. Eu vi um tweet alguns dias atrás, de alguém que tava relatando como um idiota da equipe |
| 17:05 | resolveu atualizar a versão do Java, acho que do 16 pro 18 e fez deploy pra produção. |
| 17:11 | Óbvio que deu pau. Óbvio que o pau apareceu na sexta-feira. Tem idiota que acha que porque usa uma linguagem compilada, com tipagem estática como Java, |
| 17:21 | não tem problema não ter testes, porque se tudo compila, obviamente é porque funciona. |
| 17:26 | Não tem nada que é mais certificado de júnior, do que pensar assim. Ahhnnnn como assim? |
| 17:33 | Voltando ao exemplo de software livre. Vamos ver o projeto do navegador Firefox. Sabe Firefox? Sim, aquele Firefox. |
| 17:39 | Eu baixei o código aqui na minha máquina. Firefox é feito na maior parte em C++, um pouco de Rust, um pouco de Javascript. |
| 17:46 | É um navegador bem estável e quem usa acho que raramente tem algum problema dele renderizar |
| 17:51 | errado, crashear ou coisas estranhas assim. Se você é desenvolvedor de front-end, certamente já usou o Developer Tools certo? |
| 17:58 | Pra debugar o que está programando. E esse Developer Tools tem uma suite de testes, pra garantir que toda nova versão, antes |
| 18:04 | de lançar pra você baixar na sua máquina, passa todos os testes e não introduz nenhuma regressão. |
| 18:10 | Ou seja, tudo que funcionava numa versão continua funcionando na mais nova. No repositório de código fonte, só rodar `mach test devtools/*` e olha só, abre a |
| 18:20 | versão que acabei de compilar direto do código fonte e roda uma suite de testes de integração, |
| 18:25 | simulando cada funcionalidade do Developer Tools. É assim que a Mozilla garante que código novo não introduz regressões óbvias. |
| 18:32 | Se der uma fuçada no código, olha só, cada diretório tem um sub-diretório de testes. |
| 18:37 | E muitos deles tem testes específicos pra bugs que foram reportados. Assim eles garantem que bugs corrigidos também não vão aparecer do nada de novo. |
| 18:45 | Bugs que foram corrigidos e aparecem de novo porque não tinha um teste pra cobrir, se chama "jogar dinheiro fora". |
| 18:52 | Porque tem que corrigir mais de uma vez. Ao longo do tempo, você está perdendo tempo, dinheiro, eficiência, e mercado pra outro |
| 18:59 | projeto que vai fazer melhor que você com menos recursos. Tem gente que acha que porque é programador front-end, não precisa se preocupar com testes. |
| 19:07 | Acho que todo mundo gosta do projeto React do Facebook, quer dizer "meta", certo? Eu baixei aqui o código fonte da biblioteca React. |
| 19:15 | E olha só, se rodar `yarn test`, o React tem uma suite de testes feita em Jest. |
| 19:20 | Pelo mesmo objetivo. Mais de 7 mil testes unitários garantem que quando você atualiza o React, não vai quebrar |
| 19:26 | tudo. Sabe aquela biblioteca de estilos, o TailwindCSS? Um amador poderia imaginar que é só uma coleção de CSS, obviamente não precisa |
| 19:34 | de testes, certo? Errado. Eu baixei o código fonte do Tailwind e adivinha, se rodar `yarn test`, mais testes unitários |
| 19:42 | em Jest. Quase 900 testes unitários, fora checagens com eslint que por acaso deu alguns erros. |
| 19:48 | Eu baixei do branch principal, ainda estão mexendo e na próxima versão esses bugs serão corrigidos. |
| 19:53 | Mas está claro o que funciona e o que não funciona pra quem está contribuindo. Bah. Esse povo de front tá muito fresco. |
| 20:00 | Ficar fazendo testes é coisa de hipster. Certamente povo de Python, mais calejado, mais raíz, não se importa com essas besteiras. |
| 20:08 | Por isso eu baixei aqui o código fonte do framework Django. E olha só, tem um diretório chamado `tests` e dentro eu posso rodar esse script chamado |
| 20:16 | `runtests.py`. E lá vai ele rodar centenas de testes pra garantir também que versões novas do Django |
| 20:22 | não tá quebrando nada que já funcionava antes. Mais de 16 mil testes. Passando bonitinho. |
| 20:29 | Foda-se povo de Javascript e Python. Vamos mudar pra PHP. PHP sempre foi conhecido por ser Quick and Dirty, rápido e sujo. |
| 20:38 | Código raíz. Programador Cowboy que programa orientado a gambiarra. POG-zão na veia. |
| 20:43 | Eu baixei aqui o código fonte do framework Laravel que é um dos mais usados hoje. Só que não. |
| 20:49 | Eu posso rodar `composer exec phpunit` e olha só, quase 8 mil testes, de novo, pra garantir |
| 20:54 | que a versão mais nova não introduz nenhuma regressão. Por acaso falhou, povo ainda tá mexendo, próxima versão estável certamente já vai |
| 21:01 | ter corrigido esse bug. Mas nós sabemos que tem o bug, porque tem suite de testes. |
| 21:06 | Aliás, sabe o editor de textos mais usados por programadores hoje? O tal do Visual Studio Code? |
| 21:12 | Provavelmente até você assistindo que não gosta de testes aí usa pra fazer seus códigos porcaria. |
| 21:17 | Eu baixei o código fonte também e tem testes automatizados rodando `yarn smoketest`, que |
| 21:23 | segundo a documentação deles, é rodado antes de gerar o binário final que você baixa pra instalar. |
| 21:28 | Igual o Firefox, tem testes de integração onde abre o aplicativo e vai testando cada funcionalidade que a gente aceita que simplesmente funciona em toda nova versão. |
| 21:37 | E tudo só funciona, porque tem testes pra garantir isso. E voltando ao Firefox. |
| 21:42 | Parte dele é feito em Rust. E pra você, seu infeliz, que ainda acha que só porque o código compila, tá tudo bem? |
| 21:49 | Não era o Rust que tem o tal compilador mais inteligente de todos os tempos? Que muita gente acha que é mágica e garante não só binário super performático como |
| 21:58 | se tivesse sido feito em C e sem bugs de gerenciamento de memória e problemas de segurança? |
| 22:03 | Muita gente só falta dizer que o compilador escreve o código pra você, de tão bom que ele é. |
| 22:09 | Certamente, se o código em Rust compila, não precisa de testes, certo? |
| 22:14 | Bom, eu baixei o código fonte da biblioteca Tokio, que é o framework pra desenvolvimento |
| 22:19 | assíncrono em aplicativos feitos em Rust. Todo projeto Rust acompanha um arquivo `Cargo.toml`, assim como todo projeto Javascript acompanha |
| 22:28 | um `package.json`. E assim como existe npm ou yarn, em Rust temos o comando `cargo`. `cargo install` é equivalente |
| 22:35 | a um `npm install`. E adivinha, o próprio cargo, ferramenta padrão que já vem com o Rust, tem essa opção `test`. |
| 22:41 | E o que isso faz? Vamos ver. Só executar `cargo test`. Olha só ele rodando a suite de testes da biblioteca Tokio. |
| 22:49 | Ou seja, nem mesmo um projeto em Rust, que é armado com o compilador que é considerado |
| 22:55 | a obra prima dos compiladores, evita os autores do Tokio de não fazer testes. |
| 23:00 | Aliás, pode ver, ele sai rodando centenas de testes, não é um ou dois. Ahhh mas só de compilar já devia ser suficiente ... não, sua múmia paralítica, os criadores |
| 23:11 | do Rust armaram o Cargo pra rodar testes. Você acha que você, logo você, entende mais do que os criadores do Rust? |
| 23:19 | E você que é de Java e também detesta testes, que tem essa noção atrasada de porque o |
| 23:24 | Java compila, tem tipos estáticos, então se compila tá tudo certo. Você que acha que só linguagens dinâmicas não compiladas como Ruby ou Javascript que |
| 23:34 | precisam de testes. Sabe onde nasceu o conceito de TDD? Foi com Kent Beck, que fez o primeiro jUnit, em Java. |
| 23:42 | Desde os anos 90 a gente sabe que só porque alguma coisa compila, não quer dizer que funciona. |
| 23:47 | Só porque compila não significa que bugs não foram introduzidos. E por ficarem cansados de toda hora ter que correr atrás do próprio rabo, de ficar corrigindo |
| 23:55 | coisa que já funcionava, que os agilistas originais formalizaram o conceito de testes. |
| 24:02 | Aliás, falei de Java e não mostrei Java. Só de exemplo, baixei o código fonte de um dos frameworks web mais usados que é o |
| 24:09 | Spring Boot. Rodando o bom e velho `gradlew build` olha só. Baixa todas as dependências, junto com a internet inteira duas vezes, e roda todos |
| 24:18 | os testes automatizados na sequência. O build só é considerado ok se compila e os testes rodam sem erro até o fim. |
| 24:26 | E são milhares de testes. Ué, mas não era só compilar que já tava garantido que funciona? |
| 24:32 | Obviamente não. Muito antes de existir o conceito de TDD a gente já fazia testes automatizados de um |
| 24:38 | jeito ou de outro. Toda empresa de software madura faz testes. É por isso que seus programas e seu sistema operacional não quebram o tempo todo, toda |
| 24:46 | hora. E mesmo com tudo isso, ainda assim bugs acontecem. Significa que se não tivessem todos esses testes, teríamos ordens de grandeza mais |
| 24:55 | bugs em tudo. Novas versões iam demorar ordens de grandeza mais pra sair. |
| 25:00 | Ia precisar de ordens de grandeza mais pessoas testando. Mas não. Hoje em dia quase todo dia algum programa que você tem instalado ganha uma versão |
| 25:08 | nova, mas você raramente é incomodado. Bugs acontecem, mas são raros. E a razão disso é que todo software maduro, proprietário ou de código aberto, tem testes. |
| 25:18 | Veja meu blogzinho feito em Ruby on Rails. Ele é ridiculamente simples. Eu mesmo que fiz em 2012. |
| 25:24 | Não lembro se foi em Rails versão 3 ou 4. De lá pra cá eu atualizei até o Rails 6 rodando em Ruby 3. |
| 25:31 | Toda vez que sai versão nova da linguagem ou do framework, eu atualizo, pra ganhar as correções de segurança principalmente. |
| 25:37 | Eu venho atualizando faz 10 anos. E toda vez atualizo as bibliotecas também. Mas diferente do tweet da pessoa que falou que o cara atualizou o Java e subiu pra produção. |
| 25:45 | Antes eu rodo meus testes em Rspec. Se não passa, obviamente não subo. |
| 25:50 | Faço pequenos ajustes quando precisa, se a API de alguma biblioteca mudou. Mas meus testes pegam a maior parte dos problemas. |
| 25:57 | Uma vez por ano, gasto 30 minutos, atualizo as coisas e subo. Ter testes não é burocracia, não é perda de tempo. |
| 26:04 | É um seguro. Não fazer testes é a mesma coisa que dirigir sem seguro. Na maior parte do tempo, não parece ter muito valor mesmo. |
| 26:11 | Sempre dá pra fazer tudo rápido, sujo e na gambiarra. Você se sente o herói de entregar as coisas rápido. |
| 26:17 | Mas é inevitável, sua produtividade, e da sua equipe, vão gradativamente caindo. |
| 26:22 | Porque mais e mais se perde tempo corrigindo bugs do que fazendo coisa nova. Em breve, a maior parte do seu tempo é só corrigindo bugs. |
| 26:30 | E o que o amador fala? Ahhh, vamos mudar pro framework mais novo. Vamos mudar pra linguagem mais da hora. |
| 26:36 | Quantos de vocês conseguiram manter e atualizar o mesmo sistema por uma década? |
| 26:41 | Não existe nenhuma linguagem inventada na história que só pelo fato de compilar garante |
| 26:47 | que não precisa ter testes. Todo mundo que entendia isso já fazia testes de alguma forma. |
| 26:52 | A gente fazia alguns scripts separados do código pra rodar partes que eram mais sensíveis se quebrasse, ou que sabíamos que sempre alguém fazia merda e quebrava. |
| 27:00 | Era uma das coisas que separavam os amadores dos espertos. O que aconteceu foi que as comunidade ágeis deram nomes aos bois e criaram convenções |
| 27:08 | e semânticas pra todo mundo falar a mesma língua. Mas não existiu uma data especial que divide antes, com zero testes, e depois, com testes. |
| 27:17 | Foi gradual, onde décadas atirando no próprio pé naturalmente levaram os programadores |
| 27:22 | mais experientes a chegar na mesma conclusão. Enfim. O problema é que a maioria de vocês assistindo detesta fazer testes. |
| 27:30 | A desculpa é perda de tempo. Mas a verdade é porque vocês não conseguem fazer. Vocês acham que ninguém percebe. |
| 27:36 | Todo mundo que se sente incapaz de fazer alguma coisa, tenta denegrir esse alguma coisa. E é óbvio, não sabe fazer porque nunca faz. |
| 27:44 | Assim como tudo em programação, fazer testes depende de treino e prática. Não existe nenhum livro ou curso que dá pra ler e automaticamente sair fazendo testes |
| 27:53 | perfeitos. Você que é front, assistiu um curso e já saiu criando interfaces do nível de complexidade |
| 28:00 | de um Canvas instantaneamente? Ou precisou de semanas e semanas apanhando de CSS obscuro? |
| 28:06 | Ou você que é back, só leu um tutorial e já saiu criando APIs perfeitas em GraphQL |
| 28:12 | integrado com backend de Firebase? Em 5 minutos já saiu codando como se não houvesse amanhã? |
| 28:18 | Duvido. Não adianta ficar só procurando coisa pra ler. Precisa praticar. Assim como tudo que já fez, todos os seus primeiros testes vão ser uma bosta. |
| 28:26 | Mas é assim que começa. Eu citei vários projetos de código aberto. Dá uma olhada nos testes deles pra se inspirar. |
| 28:32 | Tem centenas de outros projetos mais parecidos com o que estiver trabalhando agora. Baixa e lê os testes deles. |
| 28:39 | Copia. Altera. Testa. Joga fora. Começa de novo. Repete. |
| 28:45 | É assim mesmo. Outra desculpa é falar que o projeto já tá faz meses ou até anos sem nenhum teste. É o cúmulo da preguiça ouvir isso. |
| 28:52 | Ótimo. Faça você o primeiro teste. Pelo menos essa uma funcionalidade que acabou de entregar, está coberto e vai ser mais |
| 29:00 | difícil de aparecer bug aleatório pela falta de atenção de outro programador depois. E se alguém pisar em cima do seu código, só de rodar esse um teste, dá pra saber |
| 29:09 | que quebrou, quem foi, em qual commit, e corrigir mais fácil. De 1 teste em 1 teste, a cobertura naturalmente aumenta. |
| 29:17 | Alguém reportou um bug? Abriu um ticket? Faça o teste que simula o bug reportado. |
| 29:22 | Agora corrige. Pronto, esse é 1 bug que dificilmente vai aparecer de novo. E olha só, do nada, você começou a andar pra frente em vez de ficar só olhando pra |
| 29:32 | trás. E total de cobertura? Precisa ser 100%? Isso é outra pergunta idiota que sempre aparece numa discussão de quem é desleixado. |
| 29:40 | Foda-se. Você não fez nem 1% ainda, pra que quer discutir 100%? Não interessa. Faz 50%, faz 500%. |
| 29:48 | Só, faz, a, porra, dos, testes. O que acontece é o seguinte. Sua equipe tem 3 pessoas. Cada um consegue pegar 2 ou 3 tarefas do backlog por semana. 6 a 9 tarefas entregas toda semana. |
| 30:00 | Se o sistema começa a ser usado por usuários de verdade, rapidamente começam a aparecer bugs e problemas. |
| 30:06 | Surge 1 ticket, 2 tickets. De repente a equipe só consegue entregar 3 a 6 tarefas por semana, porque precisa resolver |
| 30:12 | bugs urgentes. Mas continua entregando coisas. Só que essas coisas novas, causam mais bugs. |
| 30:18 | Na próxima semana a produtividade caiu pra 2 a 4 tarefas. E o número de bugs aumenta em vez de diminuir. |
| 30:25 | Em pouco tempo, a equipe male male entrega 1 ou 2 tarefas novas, o resto do tempo é |
| 30:30 | só resolvendo bugs. E qual a decisão do gerente do projeto? "Ah, é normal, precisa contratar mais programadores." |
| 30:38 | Ele convence a diretoria. Dobra a equipe. E voilá, a equipe volta e entregar 6 a 9 tarefas novas por semana. |
| 30:45 | E todo mundo continua sem se importar com testes ou qualidade em geral, é crunch, só entregar e entregar. |
| 30:51 | O volume de código só aumenta, ninguém joga nada fora, vai só acumulando débito técnico. |
| 30:57 | Mais código novo significa mais bugs. No final acontece a mesma coisa, nas semanas seguintes a produtividade cai pra 3 a 6 tarefas, |
| 31:04 | depois pra 2 a 4 tarefas, e de novo, a nova equipe, com o dobro de integrantes, tá male |
| 31:09 | male entregando 1 ou 2 coisas novas por semana, o resto é só apagando incêndio. Digamos que todo mundo é ruim em testes. |
| 31:16 | Se lá no começo tivesse decidido entregar tudo com testes, em vez de 6 a 9 tarefas, |
| 31:22 | a equipe estaria entregando só de 4 a 6 coisas, talvez menos. Parece bem ruim. A diferença é que vai ser 4 a 6 TODA semana. |
| 31:29 | Surgiu um bug novo? O programador que pega pra corrigir adiciona testes, e segue todo o processo que descrevi |
| 31:35 | antes. Esse bug em particular não aparece de novo. Entregou coisa nova? A suite de testes garante que o que tinha antes não quebrou por conta disso. |
| 31:42 | E assim, toda semana, de forma sustentável, a equipe entrega 4 a 6 tarefas. |
| 31:47 | Não é o máximo de 9, mas não cai pra 1 ou 2. Daí a empresa decide contratar mais gente e dobra a equipe. |
| 31:54 | Mas a equipe é diligente e treina os novos integrantes sobre a importância de qualidade. |
| 32:00 | A produtividade quase dobra, de 4 a 6 pra 8 a 10 tarefas. A produtividade só dobra se todo mundo segue o protocolo, ninguém pisa no calo de ninguém, |
| 32:09 | e tudo que já foi feito e testado continua funcionando no futuro. Todo upgrade de bibliotecas e correções de segurança tem garantia que o sistema continua |
| 32:18 | funcionando, porque a suite de testes tá passando. Daí nenhum deploy de upgrade feito na sexta feira causa desastre que vai precisar varar |
| 32:25 | fim de semana corrigindo. Olha só que mágico. Muita gente vai inventar um monte de desculpas pra não fazer testes, e eu garanto que pra |
| 32:33 | cada desculpa nós já temos soluções. Nenhum programador precisa rodar a suite de testes o tempo todo se essa suite demora muito |
| 32:40 | pra executar. Basta rodar alguns poucos ao redor do trabalho que está fazendo naquele momento. |
| 32:45 | Daí sobe um pull request que vai ser pego por um GitLab CI e esse servidor de CI é |
| 32:51 | quem vai rodar a suite inteira de testes. Não só isso, se a suite passar, esse CI pode fazer CD, que é continuous deployment, |
| 33:00 | e automaticamente subir em ambiente de staging e notificar a equipe de QA. Obviamente eu não posso mostrar projetos confidenciais dos meus clientes, mas posso |
| 33:09 | mostrar esse projeto interno que nós usamos. Olha um pull request. Se olharmos o que mudou podemos ver que além do código, temos ajustes em specs também, |
| 33:18 | que são testes. Quando o desenvolvedor subiu o código, o CI pegou e iniciou o job pra rodar os testes. |
| 33:24 | Nesse caso levou pouco mais de 5 minutos. Passou com sucesso e, lógico, só porque todos os testes passaram não significa que |
| 33:31 | não tem nenhum bug, só que não tem nenhum bug muito óbvio. Mais do que isso, no nosso caso tem configurado também checagens de segurança. |
| 33:39 | No ecossistema Ruby temos coisas como Brakeman, que avalia o código por buracos de segurança |
| 33:44 | conhecidos como injections. Essa aplicação sobe no Heroku, que tem uma funcionalidade chamada review apps. |
| 33:51 | Podemos ter um deployment separado de testes pra cada pull request que ainda está aberta. |
| 33:56 | Justamente pra alguém conseguir testar de verdade antes de aprovar. Um review app é um ambiente de staging, só que isolado pra cada pull request. |
| 34:05 | Dá pra ter dezenas de review apps em paralelo. Assim não precisa ficar acumulando e integrando tudo no mesmo ambiente de staging pra testar, |
| 34:13 | o que seria uma zona. Testa tudo isolado. Vai aprovando no ritmo do responsável pelos testes. |
| 34:19 | E no final, quando estiver tudo testado, aprovado e mergeado no branch principal, daí faz um |
| 34:24 | deployment pra produção aqui do lado. Neste exemplo, no dia que fui tirar foto de tela, não tinha nenhum pull request aberto. |
| 34:31 | Mas eles apareceriam listados aqui. Cada um com uma URL separada de testes. |
| 34:36 | Esse é outro motivo de porque eu sempre recomendo Heroku. Ele não é o mais barato, mas esse tipo de recurso facilita o fluxo de trabalho em ordens |
| 34:43 | de grandeza. Só as horas de desenvolvimento que se economiza de cada desenvolvedor já se paga. |
| 34:49 | Enfim, uma vez cada pull request de cada desenvolvedor sendo aprovado, tudo vai sendo integrado no |
| 34:54 | branch principal e podemos fazer um deploy de tudo integrado pro ambiente de staging. |
| 35:00 | Agora o pessoal de QA pode fazer o trabalho deles direito, que é testar as coisas novas, e não ficar retestando tudo de novo que já funcionava antes. |
| 35:07 | Todo report de bugs volta pro programador, que faz a correção e ajusta os testes pra |
| 35:12 | cobrir os casos que não tinha pensado. Com o pull request foi ajustado, os testes passam, QA já viu em staging, o sênior da |
| 35:19 | equipe pode dar a última olhada e fazer o merge na branch principal. E aí alguém de devops ou alguém responsável pela produção pode pegar o que está na |
| 35:27 | branch principal e fechar uma versão pra produção, com a segurança de saber que se está na branch principal, então está funcionando corretamente. |
| 35:35 | E se estiver usando Heroku, ainda tem uma facilidade extra. Digamos que todo mundo fez tudo direitinho, mas mesmo assim surgiu um bug que só aparecem |
| 35:43 | em produção. Basta ir nesta aba de atividades e clicar em roll back pra voltar pra versão anterior. |
| 35:49 | Heroku é caro, mas é nessas horas que ele se paga. Medo de deploy na sexta-feira só existe em equipes disfuncionais que não fazem esse |
| 35:57 | básico que acabei de falar. Falando em disfuncional, o maior desafio em toda equipe de projetos, é coordenar a comunicação. |
| 36:04 | Ao ter um repositório de códigos como Git, um processo de testes de integração contínua, |
| 36:09 | pareamento entre sêniors e juniors pra compartilhar conhecimento, e um protocolo como de pull |
| 36:14 | requests, estabelecemos um conjunto simples e objetivo de entendimento nessa equipe. |
| 36:20 | Não seguir esse protocolo é um desrespeito à equipe. Você não programa pra você mesmo, você contribui com sua equipe. |
| 36:27 | O importante não é andar rápido, o importante é não estragar o que já funcionava. Da mesma forma, ninguém deve sair adicionando coisas no projeto que ninguém está sabendo. |
| 36:36 | Por isso que no mundo ágil se inventou os tais rituais como de planejamento e revisão. Rituais não devem ser obrigações, mas pontos de coordenação. |
| 36:46 | Se os rituais estão sendo meramente pras pessoas aparecerem mas não participar, então não servem pra nada e devem ser eliminados e repensados. |
| 36:54 | Esse é um ponto não-técnico que não quero tentar detalhar demais, mas preciso falar de um ponto específico: estimativas. |
| 37:01 | Se tem uma coisa que programador odeia fazer mais do que testes é estimar tarefas. |
| 37:06 | Já disse isso em outros videos, mas existem duas palavras que todo mundo não-técnico confunde: estimar e prever. |
| 37:14 | O programador estima, mas os gerentes ou diretores acham que receberam previsões. |
| 37:20 | Estimativas são ordens de grandeza, não está certo nem errado. É uma ordem de grandeza. Previsões sim, é pra serem precisas. |
| 37:27 | Quando um programador diz que pode levar uns 2 ou 4 dias, é isso que pode levar, 2 a 4 |
| 37:32 | dias. Talvez leve 5. E aí o gerente que achava que tinha uma previsão na mão, fica puto, porque tava esperando |
| 37:38 | 2 dias, recebeu em 5 e quer sair chutando tudo. E é isso que eu chamo de um idiota. |
| 37:43 | Eu acho que todo gerente de projetos deveria gastar um tempo movimentando o próprio dinheiro no mercado financeiro. |
| 37:49 | Comprar e vender ações, ou opções, ou criptomoedas, não importa. Porque todo mundo gostaria de saber pra onde vai o mercado, se vai subir ou se vai cair. |
| 37:59 | É impossível acertar 100% do tempo. Se alguém soubesse prever isso, quebraria o mercado financeiro. |
| 38:04 | O máximo que podemos fazer é dar chutes educados. Estimativas. A gente tenta acertar, comprar na baixa, vender na alta. |
| 38:12 | Ou no mínimo planejar pra alta e se proteger da baixa. Criamos contingências, e sabemos que é impossível ganhar sempre. |
| 38:19 | O máximo que podemos fazer é tentar minimizar perdas. E as perdas nunca vão ser zero. |
| 38:25 | Gerenciamento de projetos é a mesma coisa. Um gerente inteligente não se interessa em tentar prever cada tarefa individualmente. |
| 38:33 | Ele observa o movimento geral da equipe e do produto. Tá em tendência de alta de produtividade? |
| 38:39 | Baixa de produtividade? Tem como influenciar a baixa? Qual é o obstáculo? Algum diretor deu carteirada e quebrou o planejamento? |
| 38:46 | Alguém ficou doente? Um bom gerente está numa posição que um analista financeiro não tem: de influenciar |
| 38:52 | as tendências. Lógico, quanto mais um programador ganha experiência e tem mais segurança no que |
| 38:58 | realmente sabe e o que não sabe, mais e mais suas estimativa se aproximam de previsões. |
| 39:03 | Ele já tem uma boa noção de quanto tempo leva a maioria das coisas. Quanto mais inexperiente, mais longe vai ser essa estimativa. |
| 39:11 | Faz parte do crescimento profissional de cada um começar a quantificar suas próprias capacidades. |
| 39:17 | Ninguém tem obrigação de "acertar" estimativas, mas claro, quanto mais precisas forem, mais |
| 39:23 | todo mundo consegue confiar mais e mais em você. É uma das formas de subir na carreira. Entregar o que promete. |
| 39:29 | Tarefas, stories ou seja lá como quer chamar, são meras formalidades. Quanto mais curtas, objetivas, direto ao ponto forem, melhor. |
| 39:38 | O objetivo não é um concurso de literatura onde todo mundo tem que fazer uma dissertação. A quantidade de palavras deve ser o suficiente pra que toda a equipe envolvida saiba no que |
| 39:48 | está sendo trabalhado. Só isso. Tem quinhentos blog posts, livros e cursos tentando ensinar "a melhor forma" de escrever |
| 39:56 | requerimentos. E a maioria é bullshit. Quer dizer, até faz sentido, pode ser usado como inspiração, mas não existe nenhuma |
| 40:03 | receita que dá pra só seguir. Assim como testes e estimativas, escrever requerimentos também depende de prática. |
| 40:11 | Estude o que se sugere, mas não siga ao pé da letra. User Stories tem aquele formato idiota de "eu, como usuário, quero conseguir adicionar |
| 40:20 | um produto no carrinho e ter o total do pedido, para poder pagar minha compra" ou algo assim. |
| 40:25 | Pode ser, é bonitinho, tem o objetivo de forçar as pessoas a pensar em pra quem é |
| 40:30 | a funcionalidade sendo feita, qual o objetivo e facilitar pensar na melhor forma de fazer. |
| 40:35 | Tem coisa que precisa de mais detalhe que isso. Um protótipo de tela no Canvas. Um rascunho de conta de imposto. |
| 40:41 | Tem coisa que nem precisa de tanto detalhe assim. Bugs costumam ser mais diretos "quando o usuário abre no firefox de mac, o box de items fica |
| 40:49 | em cima do box de cartão e não dá pra digitar o código de segurança do fucking pedido e a fucking compra não finaliza". |
| 40:56 | Tá super claro. Eu tive um cliente que o imbecil do CTO mandava todo programador descrever em detalhes como |
| 41:03 | ia programar, antes de escrever uma linha de códigos. Tinha que listar que classes novas ia criar, com que métodos, com quais nomes. |
| 41:11 | Era a coisa mais idiota que eu já vi, só perde pra época que povo achava que precisava fazer diagramas de classe UML precisos meses antes de escrever uma linha de código. |
| 41:21 | É idiótico. É da época que falei que se achava que programador era só pedreiro e havia uma forma mágica |
| 41:27 | de descrever tudo, antes de escrever o código. É uma noção boçal. O resumo é simples: a descrição deve ser a mais concisa, com o menor número de palavras |
| 41:38 | possível. A equipe deve conseguir se reunir e em pouco tempo entender o que precisa ser feito, quem |
| 41:45 | vai fazer, quem precisa de ajuda. O gerente, ou Product Owner, e o equivalente tech lead ou programador mais sênior, deveriam |
| 41:53 | estar alinhados. Daí quando seja lá qual programador entregar o pull request praquela funcionalidade, o |
| 41:59 | tech lead consegue avaliar rápido e mandar pro QA. O PO e o QA precisam estar alinhados, pra ver se o que foi entregue resolve o que se |
| 42:07 | queria resolver. Burocracia e formalidades em excesso aparecem em empresas onde esses personagens tem preguiça |
| 42:15 | de conversar ou pior: não sabem o que estão fazendo. Porque se soubessem, poderiam ir direto ao assunto. |
| 42:22 | Toda burocracia em excesso é defendida por aqueles que não sabem o que estão fazendo, porque aí podem usar a desculpa de "mas, mas, eu segui os procedimentos, a culpa não |
| 42:31 | é minha". Toda burocracia é uma muleta pra cabideiro que não deveria estar ocupando as posições |
| 42:38 | que estão ocupando. É assim simples. Voltando pra estimativas. Não existe nenhuma fórmula nem procedimento que, dado uma descrição em texto de um caso |
| 42:47 | de uso, ou user story ou seja lá o que for, chega num número de horas ou dias exatos pra resolver essa tarefa. |
| 42:54 | Cocomo e outras bullshitagens são lixo. Não tem como. Só a experiência dos programadores envolvidos é capaz de dar uma ordem de grandeza, cuja |
| 43:04 | qualidade vai ser proporcional à experiência da equipe. Se a equipe for super experiente, mesmo assim vai ser uma ordem de grandeza. |
| 43:13 | Não tem nada mais retardado do que gente que pega esses números de estimativas, número |
| 43:18 | de horas realizadas, vai pondo num gráfico e fica tentando derivar coisas desses números, |
| 43:24 | fazer integral, aplicar fórmulas. Só porque se tem números, não signfica que existe cálculos que dê pra fazer. |
| 43:31 | Eu posso sair jogando dados, colocar todos os resultados num gráficos e gerar um monte de conclusões. |
| 43:36 | É assim que nasce pseudo-ciência, numerologia, astrologia e todas essas logias idiotas. |
| 43:43 | Estimativa é um chute. Estimativas nunca estão erradas, porque não são previsões. Fazer contas com esses números não faz nenhum sentido. |
| 43:51 | Dá pra saber que vai ser perto de 6 meses mas menos de 1 ano. Agora, se vai ser 5 meses, 2 semanas, 4 dias e 5 horas, exatamente. |
| 44:00 | Isso é impossível. Gastar horas tentando estimar tudo é um exercício de futilidade. |
| 44:05 | Não perca tempo tentando prever com exatidão. Aprenda a lidar com ordens de grandeza. |
| 44:11 | Simplesmente escreva o que se sabe que realmente precisa fazer. E nem tente detalhar 6 meses de trabalho de uma só vez. |
| 44:17 | É inútil. Descreva o curto prazo em detalhes, 1 mês, no máximo 2 meses de trabalho. Tenha a direçao do longo prazo em mente, mas ajuste enquanto vai andando. |
| 44:27 | Deixe a equipe se dividir em quem faz o que. E siga o que falei até agora sobre pull requests e merge. |
| 44:32 | Mesmo sem ter estimativa nenhuma, você como gerente ou como qualquer membro da equipe vai ver que numa semana a equipe entregou 10 tarefas, stories ou seja lá como quer |
| 44:42 | chamar. Na semana seguinte, entregou 9. Na outra semana conseguiu entregar 11. Na semana seguinte entregou 7. |
| 44:49 | O que o gerente ou facilitador dessa equipe começa a notar? Uma tendência. Parece que, seja lá como se descreve tarefas nessa equipe, eles conseguem entregar uma |
| 44:58 | média de 8 a 9 unidades dessas "coisas". E se for esperto, vai notar que quando entrega menos coincide quando sobe versão nova pra |
| 45:07 | produção, daí o suporte recebe reports de bugs, que entram no backlog da equipe e isso diminui a quantidade de "coisas" entregues. |
| 45:14 | O gerente fala com o tech lead, que revê o processo, e vê que ele tava deixando passar pull requests com testes não tão bons. |
| 45:21 | Ele pareia com o programador júnior que tava fazendo errado. Ensina na prática onde tava errando. |
| 45:26 | E agora ele passa a produzir melhor. E é assim que uma equipe evolui, um passo de cada vez. |
| 45:32 | Não é via metodologia, nem aumentando formalidades e burocracias, é via bom senso. |
| 45:38 | Resolvendo problemas na raíz em vez de ficar inventando band-aids, ou pior, mais burocracias |
| 45:44 | inúteis. E o principal: reorganizado a lista de coisas a fazer pra garantir que as coisas mais importantes |
| 45:50 | estão sendo feitas primeiro e tudo que é opcional ou de pouco valor está no fim da lista. |
| 45:56 | Assim, caso não dê tempo de fazer tudo, pelo menos você sabe que o mais importante foi feito. |
| 46:01 | Cuidado, não estou dizendo que não se deve perder tempo descrevendo tarefas ou que não |
| 46:06 | se deve fazer estimativas. Estou falando que a formalidade não é tão importante, tem que começar a escrever e |
| 46:13 | aceitar que vai estar mau escrito. Aceitar o feedback de que o programador fez errado porque do jeito que tava escrito ficou |
| 46:19 | ambíguo. E aí vai ajustando os detalhes pra próxima vez, até o nível que faz sentido. |
| 46:25 | "Ah, se tivesse descrito essa conta com um exemplo, ele teria entendido", ou algo assim. |
| 46:30 | Aceitar que uma estimativa nunca vai estar certa ou errada. É só uma referência. Não tente fazer projeções baseado em estimativas, porque isso só vai multiplicar um erro com |
| 46:40 | outro erro. Em vez disso veja em ordens de grandeza como falei. Seja lá como organiza as tarefas da equipe, veja, no geral, que tipos de funcionalidades |
| 46:49 | ou correções de bugs a equipe entrega num certo período de tempo, como toda semana. Daí nem precisa perguntar pra equipe se o que tem no backlog cabe ou não na semana. |
| 46:58 | Você já sabe essa resposta pela velocidade que já conhece. Quando sabe que não vai caber, seja honesto e faça seu trabalho: corte ou simplifique. |
| 47:08 | Não tem mágica. Se não cabe, não cabe. Se tentar fazer caber, obviamente a qualidade vai cair. |
| 47:13 | É onde vai vir o "se eu pular fazer testes, talvez caiba". E quando se cede uma vez, isso vai acumular. |
| 47:20 | Na semana seguinte já começa a vir a conta. E uma decisão feita no desespero numa semana, vai prejudicar todo o resto do andamento daqui |
| 47:26 | pra frente. Não existe almoço de graça. Toda vez que vai se deixando passar uma pequena coisa errada, isso vai acumulando. |
| 47:33 | Em breve, vai estar tudo errado. Ser sustentável é exercitar disciplina. E não tem coisa mais maçante, mais entediante, do que ser disciplinado. |
| 47:42 | Quando tudo é uma bagunça, é difícil elencar os problemas. Mas numa equipe disciplinada, fica fácil ver quem tá puxando a equipe pra trás. |
| 47:49 | Sem ter a muleta da burocracia, fica fácil ver quem é a pessoa inconstante, aquele que |
| 47:55 | promete demais, entrega de menos, e quando entrega outra pessoa precisa consertar. A equipe inteira sabe quem é essa pessoa. |
| 48:02 | Eles devem ensinar, ajudar, mas quando a pessoa é resistente a trabalhar em equipe, ela deve |
| 48:07 | ser removida. É assim simples. A decisão errada é manter essa pessoa e contratar outra pra aumentar produtividade. |
| 48:15 | Muitas equipes que eu já vi teriam a produtividade aumentada só de cortar os maus elementos, porque agora eles não precisam ficar consertando o que o mau elemento tá entregando de mau |
| 48:24 | jeito. Automaticamente a produtividade aumenta, o stress diminui, todo mundo trabalha melhor. |
| 48:30 | Uma coisa que aconteceu durante esse período que já passou de vacas gordas, com montes de empresas contratando gente ruim no atacado, é que em vez de aumentar a produtividade, |
| 48:39 | eles prejudicaram a qualidade do produto e das equipes. Imagina um monte de gente ruim, fazendo o contrário de tudo que falei até agora. |
| 48:47 | Só acumulou um monte de código porcaria que funciona em produção na força bruta, |
| 48:53 | com alguns poucos hiper estressados, varando noite, consertando a porcaria que recebe. |
| 48:58 | Se a equipe não se importa com o que está entregando, nada do que eu falei até agora importa. E todo novo integrante, ao ver que ninguém tá realmente muito interessado, vai aprender |
| 49:08 | do jeito errado: que o melhor é ligar o foda-se e fazer igual todo mundo. E é assim que um projeto entra em colapso, porque ninguém está ligando. |
| 49:15 | Em empresas com dinheiro dos outros demais, é o que mais acontece. Mas se sua empresa realmente depende do código sendo feito, sinto dizer, rapidamente todo |
| 49:25 | mundo vai perder o controle. E daí pra frente é só cavar o buraco mais fundo. De novo. |
| 49:30 | Todo projeto é uma incerteza, especialmente nos primeiros dias. |
| 49:35 | Especialmente se for uma equipe nova, recém constituída. Precisam aprender a trabalhar juntos ao mesmo tempo que precisam entender o que diabos vão |
| 49:42 | construir. É uma montanha de incertezas. Por isso o ideal é garantir que o básico do básico está garantido: que pelo menos |
| 49:49 | o que está sendo entregue vai continuar funcionando ao longo do tempo. Exercitem o processo de testes, pull requests, integração contínua, deployment em staging. |
| 50:00 | Daí comecem a ver até que nível de detalhes realmente as tarefas precisam ser definidas. E vai ajustando. |
| 50:07 | Não tente estabelecer regras escritas em pedra no dia um. É inútil. |
| 50:12 | Comece no equivalente a fazer rascunhos. Avalie se o rascunho está num nível de detalhes suficiente. |
| 50:18 | Se não estiver, vai ajustando. O PO, o UX, precisam ir refinando isso. Daí o QA e o suporte precisam também ir refinando o processo de testes. |
| 50:26 | Esse processo volta pra equipe de desenvolvimento, que reflete se está cometendo deslizes técnicos |
| 50:31 | que poderiam evitar bugs óbvios. Todo mundo ainda estava crú em fazer testes, e aos poucos vai aprendendo a realmente testar |
| 50:38 | os casos que interessam e deixar de lado os casos que não precisa. Naturalmente vão se acostumando a saber até onde precisa ou não cobrir determinados tipos |
| 50:47 | de funcionalidades. Sério. Exercite sua equipe em usar Git direito, em usar os recursos de testes que certamente |
| 50:54 | já tem no seu framework. Como falei, Rails tem, Django tem, Laravel tem, Spring Boot tem, Express tem, React tem. |
| 51:01 | Todo mundo tem suporte a testes que vocês só escolheram não usar. Só que vocês não são seres ungidos que fazem código sem erros. |
| 51:09 | Pelo contrário, todo programador vai mais fazer erros do que acertar. |
| 51:14 | Especialmente se for júnior. É normal. Só que hoje todo mundo deixa esses erros acumularem no repositório, porque os deploys |
| 51:21 | pra produção acontecem só 1 vez por mês, ou 1 vez por bimestre. Daí toda vez que faz deploy fica todo mundo apreensivo, porque já sabe que vai dar merda. |
| 51:29 | Todo mundo sabe que empurrou os problemas com a barriga. Daí o dia do deploy é o dia da pizza na madrugada. |
| 51:35 | Todo mundo correndo atrás do próprio rabo pra consertar os erros que vão aparecendo. Um caos. |
| 51:41 | Não seja esse clichê. Faz direito um pouco todo dia pro dia de deploy em produção ser só mais um dia normal, |
| 51:49 | tedioso, sem nenhuma adrenalina, porque todo mundo tem segurança que tá tudo testado |
| 51:54 | e funcionando. Fazer as coisas direito é muito chato, eu sei. Deixa pra fazer código porco gambiarrado nos seus projetinhos pessoais. |
| 52:01 | Mas em projeto dos outros, aprenda a ser profissional. Imagina se seu médico também fizesse programação orientada a gambiarras sem testes como você |
| 52:09 | faz. Imagine se o médico do seu filho fizesse como você faz. Acho que não ia gostar né? |
| 52:15 | Cresce, e age como profissional. Se ficaram com dúvidas, mandem nos comentários abaixo. |
| 52:20 | Se curtiram o video deixem um joinha, assinem o canal e compartilhem o video com seus amigos. |
| 52:56 | A gente se vê, até mais! |
