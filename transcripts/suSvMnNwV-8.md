# Entendendo Apple, GPL e Compiladores

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=suSvMnNwV-8
- **Duração:** 43:47
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Desta vez vamos dar uma pequena pausa na série Começando aos 40. |
| 0:06 | Vocês já viram dois episódios falando sobre back-end e o assunto ainda não acabou, mas |
| 0:12 | pra quebrar um pouco decidi fazer uma longa tangente hoje e falar sobre um tema cabeludo |
| 0:17 | que envolve o mundo de software livre, a Apple e compiladores. É até difícil definir que tema é esse exatamente. |
| 0:25 | Tem a ver com compiladores e linguagens mas não é só isso. Mas é uma história que eu acho fascinante e queria compartilhar com vocês. |
| 0:32 | Além disso hoje finalmente estou completando o episódio 42. Se você é geek que nem eu sabe que 42 é um número especial. Segundo o sábio profeta Douglas Adams o número 42 é a resposta da vida, do universo e de tudo. |
| 0:37 | Se não acreditam leiam a bíblia do Guia do Mochileiro das Galáxias. De curiosidade é por isso que minha empresa se chama Codeminer 42. E em especial este ano eu vou completar meus 42 anos. Mas chega de numerologia, vamos começar a história de hoje. (...) Como vocês viram nos vídeos passados, acho que deu pra entender que a Microsoft foi um |
| 0:46 | rolo compressor nos anos 90 empurrando tecnologia atrás de tecnologia, boas ou ruins. |
| 0:52 | Depois ela foi bruscamente parada no começo do século por causa do julgamento anti-truste. |
| 0:57 | E de 2001 até pelo menos 2014, quem calçou seus sapatos de certa forma foi a Apple. |
| 1:03 | Sem repetir muito o que todo mundo já sabe vamos resumir: em 1999 os iMacs translúcidos |
| 1:08 | de plástico colorido foram um enorme sucesso pra marcar o retorno de Steve Jobs, numa época |
| 1:14 | onde a Apple estava a dias de fechar as portas e declarar falência. Em 2001 surgia o Mac OS X baseado no NextStep e BSD UNIX, também em 2001 o iPod conquistou |
| 1:25 | o mundo, em 2003 o iTunes conquistou o mundo. Em 2005 com a ascendência do Ruby on Rails e a preferência por Macs de seu criador fez |
| 1:34 | com que a comunidade Rails e o gosto pela estética da Apple andassem lado a lado. De 2005 a 2006 a Apple migrou dos processadores PowerPC pra Intel e de repente todo mundo |
| 1:46 | queria usar Macs pra desenvolvimento já que ele era um sabor de BSD UNIX. |
| 1:51 | Diversas ferramentas que só existiam em Linux passaram a ser portados. |
| 1:56 | Gerenciadores de pacotes como Fink, MacPorts e hoje HomeBrew começaram a surgir. |
| 2:02 | E mais importante, Ruby vinha pré-instalado nos Macs, facilitando ainda mais a adoção inicial. |
| 2:08 | Por duas vezes a Apple não só passou ilesa como explodiu em crescimento no meio de duas |
| 2:13 | grandes crises. Em 2001 ela lançou seu iPod bem na queda da Crash das Ponto Coms, um dos piores episódios |
| 2:20 | da história da Internet. E em 2007 os iPhones aparecem, 1 ano antes da famosa crise econômica de 2008 que muitos |
| 2:28 | diziam que poderia ser o fim do mundo, e você pode assistir em filmes recentes como o incrível |
| 2:33 | The Big Short. Mesmo em meio a essa crise, em 2009 a App Store vai ao ar inaugurando a era do desenvolvimento |
| 2:41 | mobile e todo mundo quer aprender Objective-C agora, validando o estilo de orientação |
| 2:46 | a objetos que já era mais familiar a quem usava Ruby do que quem usava Java. A Apple forçou a evolução da Web em direção à morte do Flash, e ao HTML 5 e CSS 3 que |
| 2:57 | rodavam melhor nos seus navegadores Safari. E com o nascimento do MobileMe que foi o serviço online de cloud da Apple; nasceu o framework |
| 3:05 | javascript SproutCore, que depois viria a se tornar Ember, inaugurando o estilo de produtos |
| 3:10 | Web que conhecemos hoje. Pós crise de 2008 e 2009, todo mundo queria desenvolver produtos mais sofisticados, com |
| 3:18 | linguagem visual limpa, com a usabilidade que a Apple era lendária por oferecer em seus produtos. |
| 3:24 | Mesmo antes disso, enquanto o mundo enterprise estava adotando soluções J2EE como o IBM |
| 3:30 | Websphere ou BEA Weblogic a própria Apple tinha uma arquitetura mais simples e mais sofisticada na forma do WebObjects que era o motor por trás do lendário e-commerce |
| 3:39 | da Apple na época. Uma pena que o WebObjects nunca teve real tração. Toda essa experiência trouxe a Apple como uma das maiores influenciadoras das tecnologias |
| 3:45 | da época. E isso coincidiu com o pior período da história da Microsoft pós-processo dos Estados Unidos contra suas práticas monopolistas depois da Guerra dos Navegadores, então a Apple praticamente não teve competição. Voltando ao nosso tema de programação e linguagens, entenda que 2006 e 2007 foram anos interessantes pro mundo dos compiladores por três motivos: a migração da plataforma |
| 3:54 | de Macs para Intel, o lançamento do iPhone e a migração no mundo de software livre |
| 3:59 | da famosa licença GPL v2 para o controverso GPL v3. Esses três acontecimentos, na minha opinião, influenciaram muito o landscape de desenvolvimento |
| 4:09 | de software entre os mundos comercial e de software livre, e eu acho que ainda não vimos |
| 4:14 | tudo que pode sair disso até hoje. No ano 2000 um novo projeto começou a aparecer como uma pesquisa, o Low Level Virtual Machine |
| 4:23 | de Chris Lattner e Vikram Adve. Em resumo essa tecnologia se tornou um compilador modular que chamamos de LLVM apesar de não |
| 4:31 | ser de fato uma máquina virtual como uma JVM. O monopólio dos compiladores, principalmente no mundo open source, era basicamente do GCC, |
| 4:41 | responsável por compilar os códigos em C, C++ e várias outras linguagens, incluindo |
| 4:46 | coisas como Fortran, e que gera o binário da kernel Linux e todas as ferramentas de licença aberta que rodam ao seu redor nas distribuições Linux. |
| 4:55 | Mas o GCC é um grande monolito, com mais de 25 anos de contribuições e evoluções, |
| 5:02 | complicado de evoluir, expandir e integrar. Porém com décadas de refinamento e ajustes, é definitivamente um dos melhores compiladores |
| 5:10 | do mercado. O LLVM foi criado pra ser diferente, ele separou o processo de compilação em 3 grandes estágios, |
| 5:19 | front-end, otimização e back-end. Não confundir com as carreiras de front-end e back-end. |
| 5:25 | Pense na entrada do compilador que é o front, o miolo, e a saída do compilador que é o |
| 5:30 | back, Vale a pena eu explicar o que isso significa. Em resumo, o front-end pega o seu código fonte, digamos em C, e faz a checagem e o |
| 5:38 | parsing. O resultado desse estágio é seu código limpo e traduzido em outra linguagem intermediária, |
| 5:44 | chamada literalmente de Intermediate Representation ou IR. Não seria muito diferente do Java gerando bytecodes ou do .NET que gera em IL pro CLR |
| 5:55 | que é literalmente Intermediate Language. Também meio parecido com o que um transpiler de Coffeescript ou Dart ou Typescript faz |
| 6:03 | transformando em Javascript por baixo. Na sequência esse código em IR passa pelo tal miolo, a fase de otimização, que vai |
| 6:12 | fazer todas aquelas otimizações que eu expliquei no episódio anterior pra deixar seu código o mais eficiente possível. |
| 6:18 | Inclusive como o GCC e outros compiladores, essa fase pode precisar "passar" pelo |
| 6:24 | código múltiplas vezes, você às vezes vai ver esse termo "passes" porque algumas |
| 6:29 | otimizações exigem conhecimento do código anterior. Finalmente o LLVM pega esse sub-produto otimizado e passa pro back-end, que vai finalmente traduzir |
| 6:38 | em binário de máquina, gerando o executável do seu programa. Mas o importante é entender que existem 3 grandes pedaços de software independentes |
| 6:47 | que, juntos, formam o compilador. Então, em vez de usar GCC pra compilar C, você pode substituir por Clang que é um |
| 6:55 | front-end de C feito pra LLVM. Teoricamente hoje você poderia tirar o GCC e recompilar uma distribuição Linux inteira |
| 7:03 | usando Clang, até existem projetos testando isso. Por muitos anos, fazer o LLVM cuspir um binário tão otimizado quanto o de GCC foi bem difícil. |
| 7:13 | E também havia a questão: pra que eu quero substituir o GCC se ele já funciona tão bem? |
| 7:18 | Em 2005 a Apple fez um de seus movimentos mais interessantes e pouco comentados e contratou |
| 7:23 | Chris Lattner, que na época estava em início de carreira na Microsoft Research. Em 2006 Steve Jobs sobe ao palco na conferência WWDC e anuncia a transição da plataforma |
| 7:35 | Mac dos processadores IBM PowerPC para Intel, mais especificamente a nova linha de processadores |
| 7:41 | Intel Core. O sistema operacional OS X 10.4 Tiger foi o primeiro compilado ainda com GCC pra rodar |
| 7:48 | tanto em PowerPC quanto Intel. Mas em 2007 teríamos a sequência com o OS X 10.5 Leopard e o XCode 3.1, a IDE de desenvolvimento |
| 7:57 | pra Mac e junto com ela viria o compilador GCC 4.2 e junto o LLVM integrado ao code generator |
| 8:05 | do GCC, que foi conhecido como LLVM-GCC. O XCode 4.1 da época do Mac OS X Lion de 2011 foi o último a vir com o GCC como compilador, |
| 8:15 | e de lá em diante o desenvolvimento em MacOS e iOS depende só do Clang. Ou seja, de 2006 até 2008 os produtos com processadores PowerPC foram todos migrados |
| 8:25 | para Intel. Mas mais importante que isso, o compilador GCC foi sendo gradativamente substituído |
| 8:31 | por Clang, a partir de 2007 até pelo menos 2011. Guarde essa informação. |
| 8:36 | No começo do século um novo tipo de produto começou a fazer um sucesso estrondoso. |
| 8:42 | Lembra quando eu contei qual era o objetivo original do Java quando ele foi criado no começo dos anos 90? |
| 8:48 | Ser um sistema pra um hardware de set-top-boxes. Ele estava quase uma década adiantado porque foi só nos anos 2000 que esse tipo de produto |
| 8:57 | realmente explodiu, em particular o Tivo. Aqui no Brasil não tivemos Tivo mas tivemos similares. |
| 9:03 | Era aquele produto que você podia gravar programas de TV a cabo pra assistir depois. |
| 9:09 | É o que se chamava de DVR ou Digital Video Recorder, basicamente um receptor de sinal |
| 9:14 | analógico, que digitalizava o vídeo e gravava organizado num HD. Acho que até hoje algumas empresas de TV a cabo ainda oferecem esse tipo de produto. |
| 9:24 | Mas nos Estados Unidos o Tivo teve um sucesso explosivo. Tecnicamente falando ele era um mini-pczinho com uma placa de captura de vídeo que rodava |
| 9:33 | uma versão de distribuição Linux. Não é hoje que vou entrar em detalhes sobre licenças de software livra, mas a kernel |
| 9:41 | Linux e a maioria das ferramentas que compõe uma distribuição que forma um sistema operacional |
| 9:46 | completo, as ferramentas GNU, o compilador GCC e tudo mais usavam a licença GPL v2. |
| 9:53 | GPL que significa General Protection License. Na prática, qualquer um, especialmente qualquer empresa que modifique código licenciado via |
| 10:02 | GPL é obrigado a republicar as modificações ao público. O GPL não é uma unaminidade, por isso existem outras licenças, mas a maioria das coisas |
| 10:11 | num Linux costumava ser GPL. E foi o que a Tivo fez: ela seguiu a licença e liberou as modificações que fez. |
| 10:19 | Isso inclusive permitia que hobistas pudessem baixar esse código, fazer suas próprias modificações e carregar no Tivo. |
| 10:26 | Então era como se fosse um PCzinho que dava pra brincar e instalar seus próprios programas. Pelo menos naquela época, a maioria das empresas não gostava que seus dispositivos fossem |
| 10:36 | modificados pra fazer coisas que não deveriam. Existem motivos pra isso, e nem vou entrar no mérito de certo ou errado, vamos só entender |
| 10:44 | que eles não gostavam. Então na série 2 eles adicionaram um hardware que validava a assinatura do binário. |
| 10:52 | Eu não sei como exatamente eles faziam isso, mas se você é iniciante vale entender pelo menos o conceito básico. |
| 10:58 | Existe uma coisa em computação que chamamos de hashing. Existem algoritmos como os antigos MD5 ou SHA-1 ou os atuais SHA-256 ou bcrypt. |
| 11:08 | Sem entender de criptografia entenda que eles são funções. O argumento de entrada pode ser qualquer bloco de dados, seja texto ou seja um binário. |
| 11:16 | E a saída é sempre um texto de tamanho fixo. Isso não é encriptação. |
| 11:21 | Quando se encripta alguma coisa, você consegue reverter o processo e desencriptar. Em hashing não existe forma de pegar o resultado e reverter o processo e conseguir o argumento |
| 11:32 | original. Dois blocos de dados diferentes podem dar o mesmo resultado, isso seria o que chamamos |
| 11:38 | de colisão, mas é raro que isso aconteça num cenário real. O importante é que esse resultado serve como uma impressão digital, um fingerprint, de |
| 11:48 | seja lá qual dado você tenha passado pra função. Ou seja, digamos que você passe o binário do kernel Linux. |
| 11:55 | E o Tivo tem um firmware separado que quando carrega a kernel passa o binário por essa |
| 12:00 | função e compara com a impressão digital que ele tem guardado num hardware que você não pode modificar. |
| 12:05 | Ou seja, se você modificou o kernel e instalou lá, a impressão digital vai ser diferente, |
| 12:12 | então o Tivo pode rejeitar esse novo binário e impedir o boot. Essa seria uma forma simplória de fazer isso. |
| 12:19 | Existem formas mais sofisticadas mas esse exemplo deve ajudar a entender parte do processo. |
| 12:24 | Isso seria um tipo de DRM ou Digital Rights Management que a indústria de música adorava. |
| 12:30 | Mas a Tivo achou um loophole no GPL v2, uma brecha na licença. A licença obrigava a liberar o código modificado, e isso eles fizeram, mas ela não fala nada |
| 12:41 | sobre impedir o hardware de rodar código modificado no seu hardware. Isso foi uma controvérsia gigante porque esse sistema de DRM, do ponto de vista dos |
| 12:49 | desenvolvedores, restringia a liberdade do que o consumidor poderia fazer com o hardware |
| 12:54 | que ele comprou. Isso gerou uma enorme polarização na opinião se uma empresa podia ou não fazer isso. |
| 13:01 | Richard Stallman e Eben Mogler, os criadores da licença GPL ficaram enfurecidos, porque |
| 13:08 | a GPL v2 não conseguia proibir essa atitude. Então eles iniciaram a modificação da GPL v2 para o novo GPL v3 que adicionava cláusulas |
| 13:18 | que impediria isso que eles chamaram de "Tivoização". E se você acha que o mundo open source apoiou essa medida, você está enganado. |
| 13:25 | Isso gerou uma nova controvérsia e uma nova polarização. Por exemplo, Linus Torvalds odiou a medida e a kernel do Linux permanece na GPL v2. |
| 13:35 | Como eu já havia explicado no episódio da Lerna vs a ICE, licenças de software livre |
| 13:41 | podem ser divididas em duas grandes categorias: as licenças restritivas e as licenças permissivas. |
| 13:47 | Ao contrário do que o senso comum pode imaginar, o GPL é uma licença restritiva. |
| 13:52 | Licenças como BSD, MIT, Apache e outras são mais permissivas. Em última instância a GPL impõe uma restrição importante: você é obrigado a liberar qualquer |
| 14:02 | modificação que fizer num código GPL e essa modificação também será GPL. |
| 14:08 | E sem cláusulas especiais e sub-licenças como LGPL você teria que se preocupar inclusive, |
| 14:14 | se o binário gerado por um compilador com licença GPL se ela herda o GPL e se pode ser usada livremente ou não. |
| 14:20 | É por isso que inclusive muitos chamam a GPL de uma licença viral. Já código licenciado via BSD por exemplo, não tem essa restrição. |
| 14:28 | Você pode modificar o código e não tem a obrigação de liberar a modificação. Você pode gerar um binário e comercializar o binário e não se preocupar em ter que |
| 14:37 | liberar o código. A discussão sobre licenças de software livre é em última instância uma discussão sobre |
| 14:43 | propriedade intelectual. A maioria das empresas prefere ficar bem longe de licenças restritivas pra não comprometer |
| 14:50 | suas propriedades intelectuais, que é o que garante o seu valor. Nos anos recentes no começo dos anos 2000 tivemos grandes casos controversos em torno |
| 15:00 | de propriedade intelectual no mundo open source como o famoso caso da SCO ou Santa Cruz Operation |
| 15:07 | que processou a IBM pedindo nada menos que 1 bilhão de dólares, alegando que eles infringiram |
| 15:13 | na sua propriedade do UNIX e usaram esse conhecimento nas contribuições ao Linux que a IBM fazia. |
| 15:19 | Se a SCO tivesse ganhado isso teria sido uma bomba nuclear tornando o Linux material radioativo |
| 15:26 | pra quem usasse. Mas numa virada de eventos um juiz determinou que quem possuía os direitos que a SCO clamava |
| 15:33 | na verdade era a Novell. E nessa mesma época por 2005 ou 2006 a Microsoft fechou um acordo de 400 milhões de dólares |
| 15:41 | com a Novell que era dona do Suse Linux, cujo combinado era que uma não iria processar |
| 15:47 | a outra em torno de propriedade intelectual, meio que sugerindo que haveria alguma coisa |
| 15:52 | no Linux que deixaria quem não usasse Suse Linux vulnerável a algum processo no futuro |
| 15:57 | de alguma forma. A comunidade open source odiou esse movimento, claro. |
| 16:03 | Certo ou errado, vocês podem entender pelo menos porque levar propriedade intelectual e licenças a sério é importante, principalmente nos Estados Unidos. |
| 16:12 | À medida que as empresas iam adotando tecnologias open source, essa dúvida sempre deixa todos |
| 16:18 | com os nervos à flor da pele. Se o Linux, que é a kernel por baixo de todas as distribuições e que estava sendo adotado |
| 16:25 | rápido por todos, fosse condenado num processo desses, ele se tornaria material radioativo |
| 16:31 | e toda empresa usando poderia descobrir uma bomba relógio explodindo. Isso é realmente sério. |
| 16:37 | Se nos anos 2000 alguém perguntasse porque a Apple preferiu usar a base do FreeBSD nos |
| 16:42 | OS X em vez do Linux, esse certamente poderia ser considerado um dos principais motivos: |
| 16:48 | o FreeBSD usa licença BSD que é bem permissivo, ao contrário da GPL que tinha todas essas |
| 16:55 | dúvidas pairando no ar. Agora, o GPL v3 é um problema sério. |
| 17:00 | Que outra empresa além da Tivo prefere manter certos códigos escondidos e dificultar você |
| 17:07 | de instalar o que quiser em seus hardwares? Eu sempre fui fã da Apple e certamente a integração de hardware e software que eles |
| 17:14 | fazem é excepcional, mas se você pensar puramente em questão de software livre, você |
| 17:19 | vai ficar no mínimo em cima do muro com as práticas da Apple. E não confunda, sim, a Apple tem o código da base do seu sistema operacional aberto |
| 17:28 | ao público na forma do Darwin, mas o MacOS é bem mais que só o Darwin, tem centenas |
| 17:34 | de componentes que eles não querem abrir, incluindo a forma como o sistema se integra perfeitamente nos Macs e Macbook e, claro, nos iPhones de hoje. |
| 17:43 | Se você notou que um iPhone faz a mesma coisa que um Tivo, impedindo você de instalar outro |
| 17:48 | sistema nele, você pensou certo. No outro lado do espectro, além de distribuições baseadas na kernel Linux, existem as distribuições |
| 17:56 | baseadas em BSD, como FreeBSD, OpenBSD, NetBSD. O Linux é como se fosse um clone de UNIX, mas os BSDs em princípio são herdeiros do |
| 18:06 | UNIX original. BSD seria o concorrente da outra linhagem de UNIX, o System V que deriva da época do |
| 18:13 | UNIX System III da AT&T. Como o próprio nome diz, a filosofia dessas distribuições é Software Livre no sentido |
| 18:20 | mais permissivo e liberal, com a licença BSD. Vamos dizer que eles "toleram" a GPL mas nunca gostaram dela e o GPL v3 foi uma afronta |
| 18:30 | direta e ofensiva pra eles, e podemos dizer que eles não gostaram nada das cláusulas restritivas anti-Tivoização. |
| 18:37 | Existe uma longa história de brigas políticas em torno do que é considerado Software Livre ou não e vou parar por aqui pra não me alongar demais por hoje. |
| 18:44 | O maior problema? Tudo no mundo open source era compilado com o GCC. Como eu já expliquei no episódio sobre a Lerna vs a ICE, licenças não podem ser mudadas |
| 18:54 | retroativamente, só em novas versões. Como quem controla o GCC é o Richard Stallman, ele migraria pra nova GPL v3. |
| 19:02 | Ou seja, quem não quisesse adotar a nova licença ficaria preso na versão 4 do GCC |
| 19:08 | que ainda seria GPL v2. Então começou uma corrida contra o relógio. Você pode ficar usando o GCC que ainda era GPL v2 mas quanto mais tempo passa, mais ele |
| 19:17 | fica defasado e até inseguro, já que correções e novas funcionalidade só iriam subir no |
| 19:23 | GCC com GPL v3. Resumo da história? Tanto FreeBSD quanto a Apple começaram um projeto que iria levar alguns anos pra sair |
| 19:32 | do GCC e migrar a compilação de tudo pra usar LLVM e Clang, que era o único concorrente |
| 19:38 | viável ao GCC. Se você alguma vez já se perguntou porque no MacOS vem um Bash tão antigo? |
| 19:44 | Porque além do GCC outras ferramentas GNU mudaram pro GPL v3, o Bash foi um deles. |
| 19:50 | Por isso hoje se instala o Bash mais novo e outras ferramentas com versões mais novas, como o próprio Git, você mesmo via Homebrew ou de outra forma manual como baixar os códigos |
| 20:00 | fonte e gerando binários você mesmo. E por isso às vezes você tem confusão de compilar usando GCC ou Clang. |
| 20:07 | Pra Apple, além da questão das licenças, a linguagem Objective-C que é o coração dos frameworks de aplicativos nativos de MacOS e iOS nunca teve prioridade no grupo de desenvolvimento |
| 20:19 | do GCC. Por causa disso o projeto Clang começou a avançar a passos mais largos e por isso eles |
| 20:24 | começaram a estratégia de primeiro começar a usar GCC como o front-end pra LLVM, já |
| 20:30 | que a primeira coisa mais difícil era parsear corretamente os códigos em C, C++ e Objective-C |
| 20:36 | e por isso você começa com LLVM-GCC como eu disse antes. À medida que a compatibilidade do front-end entre GCC e Clang ficou mais próxima, daí |
| 20:45 | eles começaram a colocar Clang como escolha padrão até finalmente remover completamente |
| 20:51 | o GCC antigo. Nesse período de 2006 então a Apple estava migrando seus sistemas operacionais de PowerPC |
| 20:57 | pra Intel e ao mesmo tempo já estava planejando outro dispositivo pra ser lançado em 2007: |
| 21:03 | o primeiro iPhone. E os iPhones não usam processador Intel e sim ARM. E os iPhones seriam sempre produzidos com o bloqueio de DRM pra impedir outro sistema |
| 21:13 | de rodar no hardware, ou seja, eles seriam Tivoizados. E com todos os aplicativos desenvolvidos usando Objective-C e com a necessidade de compilar |
| 21:22 | binários nativos pra Intel e para ARM. Agora vamos entender outra coisa do LLVM que eu não disse antes. |
| 21:29 | O LLVM é um conjunto modular de bibliotecas. O compilador Clang é um conjunto dessas bibliotecas. |
| 21:35 | Como ele foi desenhado pra ser modular, significa que você teria relativa facilidade de trocar |
| 21:41 | partes do front-end ou do back-end. Por exemplo, você pode fazer back-ends que cospem binários em Intel ou PowerPC ou ARM |
| 21:49 | ou qualquer outro tipo de hardware. E como o front-end também é modular e ele cospe em IR antes de passar pro módulo de |
| 21:57 | otimização, você também tem facilidade de integrar no XCode pra fazer análise estática |
| 22:03 | do código e debug. Com a integração de ferramentas sofisticadas como o famoso DTrace do antigo Solaris e a |
| 22:09 | substituição do debugger GDB que era usado com GCC pelo LLDB, a IDE do XCode foi ficando |
| 22:16 | mais e mais avançada para conseguir instrumentar o código e otimizar muito melhor do que antes. |
| 22:22 | Ao mesmo tempo que Chris Lattner e sua equipe iam evoluindo o LLVM dentro da Apple, muitas |
| 22:28 | das pesquisas geraram novas funcionalidades primeiro no próprio Objective-C como a introdução |
| 22:33 | de lambdas e o ARC que é o Automatic Reference Counting. Pra você que é iniciante, na maioria das linguagens mais modernas você não pensa |
| 22:42 | muito em gerenciar memória porque linguagens como Java tem garbage collectors, ou seja, |
| 22:48 | o runtime gerencia a memória por você. Mas se você começou a aprender com linguagens como C, sabe que precisa você mesmo codificar |
| 22:57 | o gerenciamento de memória manualmente. Ou seja, no seu código você chama funções como malloc e free e outros pra pedir memória |
| 23:06 | pro sistema operacional e depois devolver essa memória. Lembra que eu falei que além de multi-thread o outro aspecto em programação mais difícil |
| 23:15 | é gerenciamento de memória? Pois é, à medida que sua aplicação fica complexa, você vai errar isso. |
| 23:21 | Ao longo da sua carreira você vai ficar ouvindo falar de vazamento de memória por exemplo. |
| 23:27 | Gerenciar memória é complicado, porque memória se fragmenta, você precisa lidar com coisas |
| 23:32 | como regiões, arenas e muitos outros detalhes. Mas se você tem uma máquina potente, digamos, com 8GB de RAM ou mais, você fica preguiçoso |
| 23:42 | e não percebe vazamentos porque tem memória sobrando. Pra facilitar se falta memória RAM o sistema operacional ainda tem a opção de usar o |
| 23:49 | HD como memória. É isso que se chama de SWAP. Se você chega nesse ponto com uma aplicação mal feita que vaza memória, tudo bem, o sistema |
| 23:58 | vai passar a usar HD. Tudo vai ficar lento pra caramba, mas não vai crashear. |
| 24:03 | Mas pense em 2007 um iPhone com meros 128MB de RAM pra comportar o sistema operacional |
| 24:09 | e os aplicativos e sem a opção de um HD pra fazer swap. Ou seja, se faltar memória o sistema vai crashear o aplicativo. |
| 24:17 | Então gerenciar memória se torna especialmente importante em dispositivos com poucos recursos. |
| 24:23 | E como Objective-C é basicamente compatível com C e usa a mesma semântica de você manualmente |
| 24:30 | codificar onde quer alocar memória e onde quer devolver essa memória, os primeiros aplicativos pra iOS que eram feitos por amadores ou mesmo por descuido acabavam tendo muitos |
| 24:40 | vazamentos e crasheavam dando uma má experiência aos usuários. Por isso recursos como o ARC que foram introduzidos ao Objective-C eram importantes, pra evitar |
| 24:50 | que você precise manualmente escrever código pra gerenciar memória, além da introdução |
| 24:56 | de ferramentas como o DTrace e LLDB pra instrumentar seu código e conseguir analisar exatamente |
| 25:03 | onde estão ocorrendo vazamentos, pra que você consiga consertar antes de mandar o binário final pra App Store. |
| 25:10 | E como desenvolvedor você ainda tem outro problema grave. Se você já tentou desenvolver pra Android deve ter notado que se quiser testar seu código |
| 25:18 | antes de instalar no celular, a única forma de rodar no seu computador é usando uma máquina |
| 25:24 | virtual. Não estou falando da JVM mas de máquinas virtuais de verdade como QEMU, VirtualBox |
| 25:30 | ou VMWare. Primeiro porque o Android é um sistema operacional baseado em Linux e os binários estão pré-compilados |
| 25:37 | pra processadores ARM. E binários de ARM não são compatíveis com processadores Intel que roda na sua máquina |
| 25:45 | de desenvolvimento, seja PC ou Mac. A única forma então é usar um emulador, que é uma máquina virtual, que vai traduzir |
| 25:53 | as instruções de ARM em instruções de Intel. Quando você ouve que seu novo Samsung S10 ou mesmo Xiaomi Mi Mix rodam Qualcomm, você |
| 26:02 | sabe que é um processador ARM. Então você programa seu aplicativo pra Android e sobe um emulador de Android como o da Bluestacks |
| 26:10 | ou Nox ou qualquer outro no seu PC e ele vai emular o Android fazendo ele pensar que está |
| 26:16 | rodando numa máquina ARM. Por isso é tudo tão absurdamente lento pra testar seu código, porque emular exige essa |
| 26:23 | tradução de instruções e isso é lento. Não tem jeito. Mas se você já desenvolveu pra iOS em Macs sabe que a mesma coisa não acontece quando |
| 26:32 | você pede pra testar seu novo app de iPhone no seu Mac. Seu app roda com velocidade total, sem nenhuma lentidão. |
| 26:40 | E você vai notar no XCode que quando vai rodar seu app no seu Mac de desenvolvimento, não existe uma opção pra subir um Emulador, como no Android, e sim um Simulador. |
| 26:50 | A Apple fez uma coisa difícil mas que se pagou: eles compilam o sistema operacional |
| 26:55 | iOS que roda em iPhone e iPad pra binários de Intel de verdade. |
| 27:01 | Então quando você sobe o simulador, ele não precisa de uma máquina virtual pra traduzir as instruções, ele já é binário de Intel! |
| 27:08 | E quando você compila seu projeto pra rodar no simulador o XCode está usando o LLVM pra |
| 27:13 | cuspir binários de Intel também. Só quando você manda empacotar pra publicar na App Store que ele vai compilar em binário |
| 27:20 | de ARM. Parece uma coisa meio óbvia de fazer, mas fazer isso da forma quase transparente como |
| 27:26 | o XCode faz é impressionante até hoje dado que as ferramentas de desenvolvimento de Android |
| 27:31 | do Google até hoje não fazem isso. Por outro lado, alguns podem argumentar que apesar das funcionalidades impressionantes |
| 27:39 | que a Apple conseguiu colocar no Objective-C, ele ainda tem a sensação de ser uma linguagem |
| 27:44 | com sintaxe muito velha, especialmente se comparado ao Android onde o Google resolveu |
| 27:50 | copiar a linguagem Java, embora similar ao J++ da Microsoft nos anos 90, ele também |
| 27:56 | não é compatível com a JVM de verdade. O runtime do Android, o Dalvik é diferente. |
| 28:02 | De qualquer forma, já discutimos como a linguagem Java também tem sintaxe considerada meio |
| 28:07 | velha se comparada a coisas como Python ou Ruby ou mesmo Groovy. Mas se comparar com Objective-C - que eu pessoalmente gosto - a maioria vai dizer que prefere Java |
| 28:18 | por estar mais acostumado e ter visto na faculdade. Enquanto evoluía o LLVM, o Clang, os frameworks de iOS, as tecnologias do XCode, Chris Lattner |
| 28:28 | começou a pensar numa nova sintaxe de linguagem. Assim em 2010 surgia o Swift, uma linguagem que é extremamente agradável ordens de grandeza |
| 28:36 | se comparado ao Objective-C. E aqui surge outra enorme vantagem do LLVM. |
| 28:42 | Assim como você pode ter back-ends que cospem binários de Intel ou ARM, você também pode ter múltiplos front-end. |
| 28:48 | Você já tinha o front-end que entendia Objective-C, então eles fizeram um novo front-end pra essa nova linguagem Swift. |
| 28:55 | E qual a vantagem? Os binários de ambos Objective-C e Swift são compatíveis entre si. |
| 29:01 | Então seria super fácil você migrar pra Swift e continuar consumindo as mesmas bibliotecas |
| 29:07 | e frameworks que já existiam e eram feitos em Objective-C. Você não precisa reescrever tudo em Swift, pode migrar aos poucos. |
| 29:15 | Então no mundo de Mac e iOS você tem agora a escolha de usar Swift com sua sintaxe bem |
| 29:20 | mais moderna inspirada em Ruby, Python, Groovy e outras linguagens, com construções modernas, |
| 29:26 | com o ARC pra gerenciar memória e ter a facilidade de rodar sua aplicação iOS em velocidade |
| 29:32 | máxima no simulador de iOS com tudo compilado em binário de Intel e depois facilmente empacotar |
| 29:38 | em binário de ARM pra rodar no seu iPhone de verdade. Por isso muitos desenvolvedores preferem criar apps pra iOS antes de Android até hoje. |
| 29:47 | No mundo Android as coisas não eram muito agradáveis. O Google também teve sua parcela de dor de cabeça com processo por propriedade intelectual. |
| 29:56 | Lembram que eu já falei várias vezes que a Sun tinha sido adquirida pela Oracle? Então, eles foram processados por usar Java e a Oracle veio atrás com força. |
| 30:06 | Oito anos depois o processo ainda não acabou e em 2018 a Oracle estava ganhando a batalha. |
| 30:13 | Mas todo esse stress não faz o Google ter muito amor pelo Java. Ao mesmo tempo eles decidiram começar a mudar o foco do Java pra outra linguagem, no caso |
| 30:22 | o Kotlin. No Android o processo é o seguinte: você escreve seu código em Java e pode usar um |
| 30:27 | compilador normal pra gerar bytecodes Java. Por isso você pode também usar muitas bibliotecas Java que já existem. |
| 30:34 | Daí o bytecode Java é traduzido num segundo conjunto diferente de bytecodes chamado DEX |
| 30:41 | que é o que roda no Dalvik. Antes esse DEX era interpretado no Dalvik, e tinha mais ou menos as mesmas funcionalidades |
| 30:48 | que uma JVM como um Just-in-time compiler ou JIT pra gerar o binário nativo de ARM |
| 30:54 | à medida que era executado. Como eu também já disse, isso é bacana pra aplicativos que rodam num servidor que |
| 31:00 | fica de pé por dias e dias. Mas num dispositivo móvel que você abre um aplicativo e fecha a qualquer momento, |
| 31:06 | um JIT ajuda mas não tanto assim, porque ele não tem tempo pra otimizar como poderia. |
| 31:12 | Fora que rodar um compilador JIT também consome processamento, e isso consome bateria, que |
| 31:18 | é outra coisa que sempre falta em dispositivos móveis. Então nas versões mais recentes o bytecode DEX é pré-compilado em binário nativo antes |
| 31:27 | de rodar, esse é o processo que você vai ouvir falar como AOT ou Ahead-of-Time compiler. Que é o que um compilador normal como GCC ou Clang fazem: geram binários nativos. |
| 31:37 | O processo de desenvolvimento no Android tem mais passos pra poder ter essa opção de compatibilidade com o bytecode Java, que foi uma jogada importante pra conseguir trazer |
| 31:48 | programadores Java pro mundo Android sem precisar ensinar uma nova linguagem pra todo mundo. |
| 31:53 | Mas ao mesmo tempo temos a Oracle baforando no cangote do Google e a essa altura já disse |
| 31:59 | várias vezes que Java é uma linguagem que já não é mais considerada agradável de trabalhar e nem tão produtiva se comparado a outras linguagens como o novo Swift. |
| 32:09 | Então o Google foi bater na porta de outra empresa, a JetBrains, que a anos faz uma das |
| 32:14 | melhores IDEs comerciais pro mundo Java, e em 2011 havia começado a criar uma nova linguagem, |
| 32:20 | que assim como Groovy ou Scala ou Clojure também compilam em bytecode compatível com |
| 32:25 | Java. Pro Google foi uma escolha fácil porque eles negociaram pra liberar as ferramentas da JetBrains |
| 32:31 | de graça pra desenvolvedores Android e a evangelizar a nova linguagem deles, que é chamado de Kotlin. |
| 32:38 | Kotlin que é finalmente uma linguagem moderna mas familiar e ser ser exótica demais como |
| 32:44 | Clojure. Então no mundo mobile, em iOS você ainda pode usar Objective-C que é considerado uma |
| 32:49 | linguagem "velha" mas agora a maior parte do desenvolvimento é na linguagem Swift que |
| 32:55 | é bem mais moderna e produtiva. Mesma coisa no mundo Android onde você ainda pode usar a linguagem Java e as bibliotecas |
| 33:02 | Java que também já é considerado meio "velho" por muita gente mas também pode migrar pro |
| 33:07 | Kotlin que está ainda em adoção por toda a comunidade Android. Você pode até misturar código Kotlin e Java no mesmo projeto. |
| 33:16 | Na verdade, por coincidência, seja porque ambas se inspiraram em fontes parecidas na |
| 33:22 | linhagem de linguagens, Swift e Kotlin tem sintaxes até que similares. Dependendo do código que você ver, pode até quase confundir um pelo outro. |
| 33:31 | Claro, as bibliotecas de iOS e Android são bem diferentes, mas as duas linguagens são |
| 33:37 | igualmente modernas e eu pessoalmente diria que são as melhores até agora para o mundo |
| 33:43 | geral de programação de aplicativos, especialmente se comparar com Java ou C#. |
| 33:49 | Mas deixando o mundo mobile um pouco de lado, um dos resultados de tudo isso foi a evolução |
| 33:54 | rápida do LLVM enquanto uma solução robusta pra desenvolvimento de compiladores. |
| 34:00 | Em vez de ter que mexer no monolito complicado que é o GCC e ainda ter que lidar com a política |
| 34:06 | da licença GPL v3, você pode ir pro LLVM e foi isso que muita gente fez, menos o Google. |
| 34:12 | Pra ser justo, o Google contribui pro LLVM também mas não usa tão extensivamente quanto |
| 34:17 | a Apple. A linguagem Go eles preferiram criar o compilador do zero, primeiro em C e depois traduzindo |
| 34:24 | o código C no próprio Go. Lembra que eu falo que o Google tem a péssima mania de ficar reinventando a roda? A gente chama isso de NIH ou síndrome de Not-Invented Here, muitos programadores sofrem |
| 34:35 | dessa síndrome de prima-donna de achar que pode fazer melhor que os outros. |
| 34:40 | Mas já sabemos que C/C++, Objective-C e Swift tem front-ends pra LLVM e sabemos que ele |
| 34:46 | tem back-ends que geram binários pra Intel e ARM. E sabemos que ele tem um design mais moderno, mais modular e com ferramentas mais modernas |
| 34:53 | pra desenvolvedores como o LLDB que muitos consideram melhor do que o antigo GDB. E ele ficou muito bom em otimizar o IR pra gerar binários nativos quase tão performáticos |
| 35:04 | quanto o GCC. Isso abre uma oceano de possibilidades. E se decidíssemos criar mais front-ends pra outras linguagens? |
| 35:12 | E foi isso que a comunidade open source começou mesmo a fazer. Hoje temos front-ends de LLVM pra ActionScript, Ada, C#, Common Lisp, Crystal, CUDA, D, Delphi, |
| 35:23 | Fortran, Graphical G, Halide, Haskell, bytecode Java, Julia, Kotlin, Lua, Objective-C, a linguagem |
| 35:29 | de shading de OpenGL, Pony, Python, R, Ruby, Rust, Scala, Swift, e Xojo. |
| 35:35 | Mas claro, algumas estão mais avançadas do que outras, algumas são mais experimentais. |
| 35:40 | Algumas usam só algumas funcionalidades como o Just-in-Time compiler do LLVM que é o caso da linguagem Julia e inclusive em lugares inusitados como o banco de dados PostgreSQL que hoje também usa o JIT do LLVM pra otimizar queries complexas. |
| 35:49 | Uma das linguagens que você mais deve ter ouvido falar que depende de LLVM é o Rust |
| 35:54 | da Mozilla. Agora você sabe o que roda por baixo do Rust e quem gera os binários. |
| 35:59 | A linguagem Rust é uma das mais diferentes de todas que já mencionamos até agora. Sem entrar em muitos detalhes hoje, ela tem um foco maior no problema do gerenciamento |
| 36:09 | de memória combinado com preocupação de segurança. Mas seu maior problema é o que chamamos da ergonomia da linguagem. |
| 36:18 | Apesar de ser uma sintaxe moderna, ela realmente exige mais do desenvolvedor se comparado a |
| 36:24 | um Swift ou Kotlin. Partes do Firefox hoje são escritos com Rust e, adivinhem, alguns evangelistas da linguagem são ex-rubistas também. Outra linguagem que compila com LLVM que ainda não é muito conhecida mas que eu pessoalmente |
| 36:31 | gosto bastante é a Crystal. Ela se parece muito, mas muito mesmo com Ruby já que é inspirada diretamente nela, e em |
| 36:39 | alguns casos você pode quase copiar e colar trechos de código Ruby e compilar com Crystal |
| 36:44 | sem mexer em nada, então a curva de aprendizado pra quem vem de Ruby é muito mais simples. |
| 36:50 | Ao contrário de Rust a ergonomia da linguagem é muito melhor. Mas Rust tem características que a tornam mais adequadas como substituto de C pra desenvolver |
| 37:00 | código nativo rápido e leve. O Crystal se assemelha mais ao Go, ele tem um runtime maior e um garbage collector maior |
| 37:08 | também. Diferente do Go que tem o investimento infinito Google por trás, o Crystal é um esforço |
| 37:13 | quase voluntário da comunidade, por isso anda mais devagar. Mas graças ao LLVM os binários que o Crystal gera são competitivos com Go mesmo nesse |
| 37:23 | estágio. E mesmo sem ser programador você provavelmente usa tecnologias LLVM hoje e nem sabe disso. |
| 37:31 | Por exemplo tanto o SpiderMonkey que é a engine, ou motor, de Javascript do navegador Safari no MacOS e no iOS quanto o V8 que é a engine de Javascript do Chrome possuem a |
| 37:43 | funcionalidade de Just-in-Time Compiler ou JIT que eu mencionei já hoje e no episódio anterior. |
| 37:49 | Repetindo: Javascript é uma linguagem interpretada, como Python ou Ruby. O SpiderMonkey e o V8 recebem o arquivo de texto escrito em Javascript e fazem um parsing |
| 37:58 | e começam a interpretar o código. Porém como vocês já sabem e eu expliquei no episódio da História do Front-end nesta |
| 38:05 | série, começou a surgir o conceito de Single Page Application, que é basicamente um site |
| 38:11 | que se comporta mais como um aplicativo de desktop do que um site web normal de conteúdo. |
| 38:16 | Na prática são sites onde você não fica navegando entre diversas páginas, você carrega |
| 38:21 | uma página e fica nela e por sua vez ela carrega muito javascript pra controlar o comportamento. |
| 38:28 | Imagine Google Docs, ou Spotify. Nesses casos as engines de Javascript, quando percebem que estão rodando faz algum tempo |
| 38:35 | começam um processo que é mais devagar, que é o JIT, e começam a otimizar e compilar |
| 38:40 | as partes do código Javascript mais executadas em binário nativo, que ainda depende do runtime |
| 38:46 | das engines, mas é bem mais eficiente do que interpretação. No caso, o SpiderMonkey usa o JIT do LLVM. |
| 38:54 | SpiderMonkey e V8 passaram anos evoluindo e competindo pra ver quem era o melhor e acho que isso continua assim até hoje. |
| 39:01 | Por isso aplicativos como Spotify, Atom, Slack, Discord e outros conseguem rodar com performance |
| 39:07 | aceitável. Some a isso que os navegadores por baixo hoje suportam CSS acelerado pelo hardware gráfico, as GPUs como o que já vem integrado no seu processador Intel ou placas externas como |
| 39:14 | os GeForce da NVIDIA ou os Radeon e Vega da AMD. A evolução do que chamamos de GPU foi uma explosão neste século como o de CPUs foi |
| 39:23 | nos anos 70 a 2000. Num determinado momento as GPUs passaram a suportar shaders, que como o nome diz, serviam |
| 39:30 | pra controlar a sombra ou tonalidade das cores. Mas em breve elas passaram a ser programáveis numa linguagem similar a C. |
| 39:39 | E adivinhem, podemos acelerar esses shaders compilando em tempo real, via um JIT, usando |
| 39:45 | LLVM hoje em dia. Por isso se você executar um VirtualBox, a renderização gráfica via software, que |
| 39:51 | é lento, hoje é compilado via JIT por um driver chamado llvmpipe. Se você lida com desenvolvimento com placas NVIDIA tem o compilador pros CUDA cores da |
| 40:00 | GeForce, e a NVIDIA contribuiu os códigos de back-end pra permitir gerar shaders pras |
| 40:06 | suas placas diretamente no LLVM abrindo as portas pra qualquer linguagem poder se beneficiar |
| 40:12 | do processamento paralelo massivo em GPUs. Agora, o último assunto de hoje pra você entender como o LLVM pode ir mais longe. |
| 40:19 | O Front-end pode ser qualquer linguagem, ele cospe o IR, que é otimizado e depois passado |
| 40:25 | pra um Back-end, que também pode ser qualquer coisa, por exemplo, os back-ends que geram binários de Intel ou ARM como já repeti várias vezes. |
| 40:33 | Porém, vocês já viram que existem os transpilers, como o do Typescript que cospe Javascript. |
| 40:40 | E se pudéssemos usar um front-end de C como o Clang e usar um back-end que cospe Javascript? |
| 40:47 | Esse é o projeto Emscripten. A demonstração mais impressionante se não me engano em 2014 foi quando a Epic Games |
| 40:55 | pegou uma animação usando a engine de jogos Unreal e compilou com esse Emscripten, usando |
| 41:01 | LLVM, de C pra Javascript e somado às capacidades de aceleração via GPUs dos navegadores via |
| 41:08 | WebGL, conseguiu rodar o que antes era um programa nativo dentro de um navegador, com |
| 41:13 | excelente performance graças a tudo que eu expliquei que dá pra fazer com LLVM. Pra fazer isso, eles limitaram o Javascript num sub-conjunto que ficou conhecido como |
| 41:24 | ASM.js. O conceito é simples: CPUs tem instruções nativas, que podemos escrever em Assembly |
| 41:30 | e usar um Assembler pra cuspir o bytecode nativo da máquina. Máquinas virtuais como a JVM tem seus bytecodes. |
| 41:37 | E se considerarmos que o Javascript é um assembly da máquina virtual chamada navegador? |
| 41:43 | Isso abre todo um leque de possibilidades. E foi o que inspirou o projeto WebAssembly que surgiu pra formalizar esse sub-conjunto |
| 41:50 | de Javascript que poderia ser o back-end pra compiladores baseados em LLVM. |
| 41:56 | Hoje em dia ainda temos o Enscripten pra compilar em ASM.js e o novo projeto Brynaryen que nasceu |
| 42:02 | sendo uma extensão do Enscripten mas foi reescrito do zero em C++ pra gerar WebAssembly |
| 42:08 | - maldita síndrome de not-invented here, a Mozilla também sofre disso como o Google. |
| 42:13 | Ainda não tivemos nenhum resultado bombástico, mas diversos grupos estão fazendo experimentos |
| 42:19 | pra entender o que realmente podemos fazer. Se você procurar por emscripten vai ver demonstrações muito interessantes, inclusive uma pequena |
| 42:27 | distribuição de Linux compilado inteiro com Emscripten e rodando dentro do navegador, |
| 42:33 | sem emulação nem nada. Na prática, no futuro, poderíamos escrever aplicativos Web em qualquer linguagem e compilar |
| 42:40 | tanto pra WebAssembly quanto pra binário nativo se quiséssemos. Mas ainda estamos no começo dessa jornada. |
| 42:47 | E por hoje vamos ficar por aqui, pra variar virou um episódio grande, mas eu queria contar |
| 42:52 | essa história pra que você pudessem entender como política influencia a evolução das |
| 42:58 | linguagens, ferramentas e arquiteturas que nós usamos hoje. Não é só uma questão se determinada linguagem é mais rápida que outra ou não. |
| 43:06 | Como programador você precisa entender como diversos fatores externos e modelos de negócio |
| 43:12 | e interesses políticos influenciam tudo que você usa. Na semana que vem vou retornar ao tema de back-end falando sobre outro assunto que é |
| 43:20 | controverso e muitos se confundem até hoje: concorrência e paralelismo e como diferentes |
| 43:26 | linguagens lidam com isso de formas diferentes. Se ficou com dúvidas nesse episódio não deixe de mandar nos comentários abaixo, se |
| 43:35 | curtiram mandem um joinha, compartilhem com seus amigos, assinem o canal e não deixem de clicar no sininho pra não perder os próximos episódios. |
| 43:41 | A gente se vê semana que vem, até mais! |
