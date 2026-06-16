# Entendendo "Devops" para Iniciantes em Programação (Parte 2) | Série "Começando aos 40"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=mcwnQVAn0pw
- **Duração:** 41:28
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Este é o décimo terceiro episódio   da série Começando aos 40, e parte 2 do tema de devops. Recapitulando, semana passada eu expliquei |
| 0:12 | como saímos das hospedagens compartilhadas e colocations dos anos 90 para as VPSs e opções |
| 0:18 | baseadas em tecnologias de virtualização. Entendemos as diferenças de full virtualization, |
| 0:25 | paravirtualização e um pouco de containers e hoje vamos entrar na melhor década do |
| 0:31 | século XXI até agora pra gente. Pra muita gente a revolução na área veio com Docker e |
| 0:37 | pra outras pessoas esse período pode estar chegando ao seu fim. Vamos ver como! |
| 0:42 | (...) Como eu disse no |
| 0:51 | episódio anterior, o mundo de infraestrutura não estava preparado para o boom que começou |
| 0:56 | a acelerar principalmente a partir de 2005. Unicórnios estavam se proliferando, crescendo |
| 1:03 | em demanda muito rápido e nenhum data center estava preparado para eles. Aliás, no episódio |
| 1:09 | anterior eu mencionei VPS mas não expliquei direito o que são. Virtual Private Servers, |
| 1:15 | basicamente são serviços onde você escolhe um tipo de máquina virtual, quanto de CPU, quanto de |
| 1:22 | memória, de disco e que sistema operacional e paga uma mensalidade por máquina. Na época eu gostava |
| 1:28 | de usar os da Linode mas tinha vários outros. Era como alugar uma máquina num data center, só |
| 1:34 | que virtual, então mais barato e mais fácil. A própria Amazon, no começo dos anos 2000 estava |
| 1:40 | passando por problemas de escala. Cada novo projeto levava 3 meses só pra configurar a |
| 1:46 | infraestrutura, as máquinas, os bancos de dados, a rede. E fazendo tudo do zero toda vez. Sendo um |
| 1:53 | ecommerce estamos falando de um negócio de margem baixa, por isso cada centavo conta. E nesse caso |
| 2:00 | foi natural juntar anos de experiência criando essa infraestrutura do zero pra criar um serviço |
| 2:05 | pra automatizar e gerenciar todos esses recursos, mitigando essa necessidade de fazer tudo do zero |
| 2:12 | o tempo todo e foi assim que em 2006 a Amazon lança os produtos EC2 pra máquinas virtuais, |
| 2:18 | o S3 pra blob storage e o SQS que é o Simple Queue pra filas - um componente importante pra |
| 2:24 | escalabilidade como já expliquei nos episódios sobre concorrência. Logo depois a AWS lança o |
| 2:31 | EBS que é o Elastic Block Storage que são volumes montáveis nas máquinas EC2 |
| 2:36 | pra ser a segunda opção de armazenamento. A grande vantagem de máquinas EC2 é você poder |
| 2:41 | criar, ou provisionar uma máquina, criar um volume EBS, anexar esse volume à máquina EC2, e de dentro |
| 2:49 | dela montar o volume no sistema operacional, formatar e usar como se fosse um disco normal. |
| 2:54 | Dessa forma tudo que você instalar ou configurar ficaria persistido nesse volume. Se amanhã você |
| 3:00 | quisesse criar uma segunda máquina bastava criar um snapshot da máquina e carregar num segundo EC2 |
| 3:07 | ou se quisesse aumentar a capacidade computacional da máquina, podia literalmente apagar a máquina, |
| 3:13 | criar outra maior e anexar o mesmo volume e tudo funcionaria praticamente plug and play. |
| 3:19 | Descrevendo desse jeito se parece com qualquer VPS, então o que foi tão diferente assim? A AWS fez duas coisas muito diferentes dos VPS: cobrança e controle. Primeiro foi o modelo de |
| 3:33 | bilhetagem onde você pagaria por hora de uso dos recursos, ou por megabytes usados no caso do S3. |
| 3:39 | Em vez de pagar uma mensalidade pela máquina você pagaria pelo uso real. Esse tipo de granularidade, |
| 3:45 | mais próxima da minutagem de celulares nunca tinha sido tentada em hospedagens. Ou seja, |
| 3:51 | se você decidisse que só esta semana precisa de uma máquina maior, podia fazer a mudança,   depois voltar pro tipo de máquina menor, com facilidade e pagando só pelas horas usadas. |
| 4:02 | Mais importante: você podia controlar tudo via APIs, sem precisar entrar num dashboard. |
| 4:08 | De repente você queria criar e apagar máquinas com mais frequência, pra tirar vantagem desse modelo. |
| 4:14 | Uma vantagem de ser a Amazon é que eles começaram rapidamente a replicar o modelo em múltiplas |
| 4:20 | regiões geográficas diferentes, permitindo que grandes empresas pudessem escalar rapidamente e |
| 4:26 | com redundância entre diferentes data centers, com a facilidade de enviar um comando numa API. |
| 4:33 | Esse tipo de granularidade de cobrança e de controle simplesmente não existia. Acho que aqui podemos dividir a história da infra de web em 2. O antes e depois da AWS, |
| 4:44 | com o advento de lidar comercialmente com máquinas da mesma forma como lidamos com software. Deixa eu |
| 4:50 | explicar. Desde sempre na história da informática tínhamos uma polarização: desenvolvedores de |
| 4:56 | software gostam e precisam mexer no software o tempo todo, pra corrigir bugs, pra adicionar |
| 5:02 | novas funcionalidades que vão atrair mais pessoas. Já um sysadmin, ou dba ou administrador de redes, |
| 5:08 | depois que terminam de configurar tudo, eles querem mexer na infraestrutura o menos possível, |
| 5:14 | de preferência nunca mais. Software vs Hardware, soft vs hard. |
| 5:21 | Isso porque infraestrutura como vocês puderam ver até agora sempre foi um House of Cards … não, |
| 5:28 | não esse … esse outro, isso, literalmente. Racks, roteadores, cabeamento, HDs, metal e |
| 5:35 | parafusos. Um monte de peças de lego montados um em cima do outro. Assopre muito perto e a casa |
| 5:42 | despenca. Basta uma linha de configuração errada e você comprometeu a segurança e integridade de |
| 5:47 | tudo. Basta um comando de formatar o drive errado e você perdeu todos os dados. |
| 5:53 | Isso me lembrou de um caso que eu vi acontecer anos atrás. Um operador de data center fez um |
| 5:59 | script às pressas pra resolver um problema. No Bash você tem várias variáveis globais que |
| 6:04 | começa com cifrão, não lembro o que ele queria fazer mas no final ele digitou uma letra errado. |
| 6:09 | Esse script foi enviado via SSH pra dezenas de servidores reais. Talvez tenha sido o $0 que |
| 6:16 | pega o último comando rodado. De repente dezenas de máquinas ficaram sem o Bash! Logar remoto via |
| 6:23 | SSH não funcionava porque não tinha mais o Bash pra abrir um novo terminal. A única forma de |
| 6:28 | voltar a ter acesso nas máquinas foi ir até o data center e várias pessoas com pen drives conectarem |
| 6:34 | fisicamente, espetar os pen drives, e copiar o binário do bash de volta. Foi meio tenso. |
| 6:39 | Por isso um bom sysadmin precisa ser uma pessoa paranóica, que checa e recheca o que está fazendo, |
| 6:45 | que vai fazer o possível pra ter redundância de tudo, que vai fazer backup do backup, |
| 6:51 | que vai checar que o backup de fato funciona pra restaurar, que vai monitorar cada minuto de cada |
| 6:56 | servidor pra ver se alguma coisa está acontecendo. E mesmo assim, num momento de emergência, |
| 7:02 | depois de varar 2 noites, uma letra errada num script pode gerar uma catástrofe. |
| 7:08 | Enfim, dependendo do seu projeto, podia levar dias ou até meses pra coordenar a configuração |
| 7:14 | de uma nova infraestrutura pra um projeto. Mexer nesse house of cards … depois de tudo pronto era |
| 7:20 | proibido, você tinha que tratar essas coisas como se fosse material nuclear: só pessoal autorizado |
| 7:26 | podia criar um novo índice numa tabela num banco de dados ou instalar qualquer pacote novo. Rodar |
| 7:33 | scripts direto no servidor, nem pensar. No fim dos anos 90 era caos, mas à medida que |
| 7:39 | entramos nos anos 2000 e o mundo enterprise começou a adotar tecnologias de web, a cultura |
| 7:44 | corporativa foi sendo adotada primeiro. Foi só depois da recuperação da crise da internet |
| 7:50 | de 2001, depois que os unicórnios que falei antes começaram a aparecer, que essa cultura entrou |
| 7:56 | em conflito com as necessidades de escalar mais rápido. A cultura de infraestrutura dessa época, |
| 8:02 | regada a coisas como ITIL era insuficiente. Não é a mesma coisa mas ITIL era como se |
| 8:08 | fosse o Waterfall no mundo de software ou os atuais Pseudo Agile pra gestão de projetos, |
| 8:14 | um conjunto de processos e rituais burocráticos e corporativistas. Dentro de um lugar como Twitter ou Amazon você teria guerra civil entre desenvolvedores |
| 8:25 | e sysadmins se as coisas continuassem do mesmo jeito. Em projetos pequenos,   os VPS ajudaram porque era fácil dar máquinas virtuais pra desenvolvedores, |
| 8:35 | mas eles ainda não tinham tudo que se precisava pra escalar. As ferramentas de gestão de |
| 8:40 | configuração como Chef ou Puppet também ajudaram os sysadmins porque agora o que levava dias |
| 8:46 | pra configurar levaria horas ou minutos. Mas a divisão entre os dois lados continuaria, |
| 8:52 | um desenvolvedor de software simplesmente não tem conhecimento ou experiência suficiente pra ganhar |
| 8:59 | acesso de entrar numa máquina de produção. Ninguém quer correr o risco de alguém não autorizado   entrar e deixar uma brecha de segurança pra trás. E da forma como se fazia software até esse ponto, |
| 9:10 | você fazia deployment da aplicação no servidor e alguém precisava entrar na   máquina via um terminal pra acertar arquivos de configuração, acertar tabelas e índices no banco, |
| 9:21 | rodar alguma rotina extra pra instalar dependências que faltaram e coisas assim. Mas quando a AWS liberou máquinas virtuais como um serviço tivemos uma quebra de paradigma. A |
| 9:32 | somatória das tecnologias que falei até agora facilitaram uma coisa que antes era muito difícil: |
| 9:38 | destruir e recriar máquinas em poucos segundos. Pra começar, a AWS era muito maior que qualquer |
| 9:45 | VPS. Só isso já eliminou a necessidade de precisar ter máquinas físicas pra maioria das médias e até |
| 9:51 | grandes empresas que não tinham políticas antiquadas e aceitavam mais riscos. |
| 9:57 | Agora os sysadmins ganharam a capacidade de criar imagens e oferecer essas imagens |
| 10:02 | aos desenvolvedores rapidamente. Era muito fácil criar ambientes de teste separados do ambiente de |
| 10:09 | produção mas ambos configurados exatamente iguais, de forma que o que funcionava em |
| 10:15 | ambiente de teste garantidamente funcionaria nas máquinas de produção. E o melhor, a custos muito |
| 10:20 | menores e com menos necessidade de planejar com tanta antecedência porque não havia coisas como |
| 10:26 | mensalidades que são compromissos longos. Entenda uma mudança de papéis: antes os sysdadmins |
| 10:33 | lidavam diretamente com bare metal. Instalavam os servidores reais em racks físicos e ligavam |
| 10:40 | cabos de redes e configuravam direto na máquina com teclado e monitor conectado no hardware. |
| 10:45 | Com as VPS e depois a AWS, nasceu uma segunda categoria de sysadmins que não precisavam mais |
| 10:51 | ter contato com equipamento físico, a menos que trabalhassem em data centers. As empresas |
| 10:57 | não precisavam mais se preocupar em comprar hardware e sim em contratar serviços. |
| 11:02 | Com as tecnologias de virtualização e containerização que falei no episódio anterior,   nós essencialmente empacotamos uma máquina virtual como um software. E foi criado um novo modelo de |
| 11:15 | negócios em cima dessa nova categoria de software. Por agora vamos só entender que no momento em |
| 11:21 | que o provisionamento de máquinas virtuais se tornou programático, via APIs, passamos a tratar |
| 11:27 | a infraestrutura como software. Assim nasce a Infraestrutura como Serviço ou IaaS. |
| 11:34 | Surgiram esforços open source pra clonar os conceitos proprietários da AWS como o Eucalyptos |
| 11:41 | que a Canonical adotou mas hoje já meio que morreu, e o OpenStack que foi adotado por |
| 11:46 | centenas de empresas e veio evoluindo bastante nos últimos anos e é composto por dezenas de |
| 11:52 | componentes como o Nova que orquestra hypervisors como o Hyper-V ou vSphere, o Neutron que cuida de |
| 11:59 | tudo relacionado com rede incluindo detecção de invasão, enfim, dezenas de componentes. E o OpenStack só iniciou mesmo a partir de 2010, ou seja 4 anos depois da AWS, só pra |
| 12:11 | vocês entenderem que o que a AWS inventou em 2006 era difícil de replicar. Levou anos pra aparecer |
| 12:17 | concorrentes de verdade. Foi só depois de 2010 que ganhamos boas opções comerciais como Microsoft |
| 12:23 | Azure e Google Cloud. Eles estão competindo bem e as opções são equiparáveis na maioria |
| 12:29 | dos produtos. Como a gama de opções de cada uma é muito grande então diferentes pessoas vão ter |
| 12:34 | críticas de coisas diferentes em diferentes cenários. Não tem um vencedor hegemônico. |
| 12:40 | Até aqui eu dei uma rápida passada pelos conceitos de paravirtualização e virtualização acelerada |
| 12:46 | por hardware como as instruções VT-X além das ferramentas de gestão de configuração como Chef |
| 12:52 | e finalmente a primeira geração de orquestração de infraestrutura como OpenStack que ajuda a levar um |
| 12:58 | ambiente como a AWS pra dentro de grandes empresas que precisem de garantias totais de segurança como |
| 13:05 | agências governamentais ou empresas que lidam com dados de alta periculosidade ou privacidade como |
| 13:11 | dados médicos ou financeiros sensíveis. Ou sei lá, os projetos de uma bomba nuclear. Você certamente |
| 13:18 | não deveria colocar essas coisas no Dropbox. Essa vertente de IaaS privado é mais conhecido |
| 13:24 | como Cloud Privado e existem várias empresas que oferecem soluções como o OpenShift da RedHat, |
| 13:30 | o CloudFoundry da Pivotal. Assim você consegue ter a flexibilidade de infraestrutura virtualizada que |
| 13:37 | pode ser rapidamente utilizada pelos projetos internos sem precisar da antiga burocracia de |
| 13:43 | infraestrutura e se mantendo num perímetro controlado fora da internet pública. |
| 13:48 | Até aqui vimos até onde as tecnologias de virtualização chegaram no mundo comercial. Mas |
| 13:55 | containers ainda não entraram na história. Vamos voltar um pouco pra 2006, que foi quando o Google |
| 14:01 | desenvolveu outro projeto, o Process Container que foi uma evolução em cima dos Jails de BSD ou Zonas |
| 14:09 | de Solaris ou mesmo os OpenVZ e Vserver de Linux. Repetindo: a ideia não é virtualização como Vmware |
| 14:15 | ou Parallels ou Virtualbox, e sim isolamento dos processos e dos recursos da máquina. |
| 14:21 | Esse projeto foi renomeado depois pra Control groups ou cgroups. A ideia ainda é fazer a kernel |
| 14:28 | mentir pros processos. Desse jeito você pode ter dois processos rodando na mesma máquina, |
| 14:34 | no mesmo sistema operacional, mas um sem saber da existência do outro, quase como se estivessem em |
| 14:41 | máquinas completamente diferentes. Se o objetivo é só isolar um processo, todas as opções de jail |
| 14:47 | que culminaram no cgroups são ordens de grandeza mais leves do que virtualização, |
| 14:53 | porque você ainda está rodando somente uma kernel em vez de múltiplas kernels virtualizadas. |
| 14:58 | Vamos rever conceitos: um sistema operacional é um conjunto de binários. A primeira coisa depois |
| 15:05 | do boot loader é a kernel, é o primeiro grande binário que carrega com os privilégios máximos |
| 15:11 | do Ring-0 e é responsável por carregar todo o resto do sistema, que por sua vez são conjuntos |
| 15:17 | de programas como os drivers, supervisores como systemd, daemons e assim por diante. Em |
| 15:23 | distribuições Linux, mesmo rodando praticamente o mesmo binário de kernel, o que diferencia um |
| 15:29 | RedHat de um Ubuntu ou Arch é esse conjunto de binários que vai empacotado na distribuição e como |
| 15:36 | eles são configurados, incluindo preferências em estrutura de diretórios ligeiramente diferentes, |
| 15:41 | sistema de pacotes como yum ou apt ou pacman. Mas tudo começa com o kernel e os drivers, |
| 15:48 | daí ele monta o volume de disco como o “barra” que é o root e de lá vai carregando |
| 15:53 | todo o resto no userland ou Ring-3. O tal cgroups consegue isolar os recursos da |
| 16:00 | máquina e fazer os processos em userland enxergar só o que ele mandar enxergar. Ele vai dizer quanto |
| 16:06 | de CPU, de memória o processo vai enxergar mas em particular, assim como o conceito do chroot |
| 16:12 | que falei antes, ele pode mascarar o volume de disco e carregar um root diferente do sistema |
| 16:17 | hospedeiro. Se você carregar um outro root com outro conjunto de programas userland, na prática |
| 16:23 | você pode ter um hospedeiro que é um RedHat e dentro do jail do cgroups carregar os binários que |
| 16:30 | formam um Ubuntu ou qualquer outra distro. Voltando ao cgroups do Google, em 2008 tivemos |
| 16:36 | o lançamento do LXC ou Linux Containers, que é um conjunto que inclui coisas como daemons |
| 16:42 | e ferramentas de linha de comando que engloba não só o cgroups que passou a vir no kernel do Linux |
| 16:48 | como namespaces que permite etiquetar processos. O cgroups consegue criar os limites pra grupos |
| 16:55 | inteiros de processos. Quando você cria um namespace de processos, seu processo vira o PID, |
| 17:01 | ou process ID, número 1 e os filhos desse processo vão seguindo nessa sequência. Diferentes |
| 17:06 | namespaces vão ter diferentes processos PID 1. Você tem namespaces de rede, daí seu processo |
| 17:13 | pode se ligar a uma porta virtual, assim vários processos podem responder numa porta 80 virtual, |
| 17:19 | na mesma máquina, e uma bridge ou ponte virtual de rede vai cuidar pra que isso seja possível,   fazendo tipo um NAT entre os containers e a rede externa. E tem namespaces de mounts, |
| 17:30 | onde você pode montar e desmontar volumes dentro do container, sem afetar   os mounts do sistema hospedeiro. Lembram como eu expliquei que o sistema |
| 17:38 | operacional mascara os endereços reais de memória pra uma memória virtual e o endereço virtual 0 de |
| 17:44 | memória que um processo vê não é o endereço 0 real da memória? Ou como um chroot mascara o |
| 17:51 | filesystem e cada processo enxerga roots no disco em lugares diferentes? Assim dois processos nunca |
| 17:58 | vão pisar um em cima do outro? Pense em cgroups e namespaces como o equivalente pra todos os |
| 18:04 | outros recursos da máquina, incluindo recursos de rede e I/O. Eu sei que estou sendo repetitivo |
| 18:10 | mas é importante deixar claro: os containers de LXC parecem muito com um sistema operacional, |
| 18:16 | mas eles compartilham a kernel do mesmo sistema, muito diferente de hypervisors |
| 18:22 | que gerenciam máquinas virtuais inteiras, cada um com seu kernel. Um jail que restringe processos e |
| 18:29 | compartilha o mesmo kernel entre vários jails é o que chamamos hoje de um container. |
| 18:34 | Esses anos entre 2006 e 2008 pra mim foram muito interessantes. Não quero entrar em muitos detalhes |
| 18:40 | aqui mas eu acho que hoje em dia não preciso mais explicar o que é o GitHub ou GitLab, |
| 18:46 | porque qualquer desenvolvedor que se preza já sabe usar Git. Se você ainda tinha alguma dúvida, |
| 18:54 | Git é obrigatório, tem que saber! Mas antes de 2006 isso não era verdade, muitos usavam |
| 18:59 | Subversion ou outras alternativas como BitKeeper, as porcarias de SourceSafe ou Clearcase, ou |
| 19:06 | mesmo CVS. Mas a partir de 2007 o Git, que é uma ferramenta para gerenciar repositórios de código |
| 19:11 | fonte versionados e distribuídos começou a ganhar terreno rápido, e com o início da popularização do |
| 19:18 | Github em 2008 na comunidade Ruby on Rails, ela criou as sementes não só pra versionar |
| 19:24 | código de aplicações mas também pra servir como mecanismo para automatizar muita coisa. |
| 19:30 | Também em 2008 outra empresa surgiu na comunidade Ruby on Rails pra resolver o problema que eu vim |
| 19:36 | discutindo até agora de instalar, configurar e manter infraestruturas em máquinas virtuais. Pense |
| 19:42 | somar um provedor de VPS com as capacidades de Linux containers via os cgroups e integrando com |
| 19:49 | um processo de deployment usando repositórios Git. Esse é o Heroku. Se você nunca usou, |
| 19:55 | deveria. É a recomendação pra todo mundo que não tem um sysadmin trabalhando tempo |
| 20:01 | integral ou pra desenvolvedores que não tem experiência com infraestrutura. Como já disse antes, o AWS EC2, principalmente em 2008, ainda não é muito diferente de um VPS do |
| 20:12 | ponto de vista de um desenvolvedor. São máquinas virtuais. Você programa em PHP, ou Python ou Ruby. |
| 20:18 | Mas pra subir sua aplicação precisa saber instalar e configurar banco de dados, servidor web, |
| 20:25 | rede e tudo mais. Ou seja, ou vai entrar manualmente via SSH e configurar tudo na mão, ou |
| 20:31 | vai usar um Capistrano ou Puppet pra fazer isso. E se você é iniciante isso não é trivial. Mas e se existisse um serviço por cima desse AWS onde você pudesse simplesmente criar uma conta, |
| 20:43 | cadastrar uma nova aplicação, daí rodar um “git push heroku” que é o comando de |
| 20:48 | git pra subir seu código num repositório Git, e de repente toda sua aplicação é instalada, |
| 20:53 | configurada e está pronta pra rodar, inclusive com banco de dados e outros serviços? Isso é o |
| 20:59 | Heroku. Eles conseguiram tirar vantagem de cgroups e criar seu próprio padrão de containers e montar |
| 21:06 | um modelo de negócios, 5 anos antes de um Docker aparecer. O que você chama de Dockerfile hoje, |
| 21:13 | mais ou menos é o que o Heroku chamou de buildpacks. Todo mundo tentou fazer algo   parecido mas levou anos pra chegar perto. Como o Heroku nunca abriu seu padrão de containers pro |
| 21:23 | mundo open source, precisou o Docker aparecer anos depois pra finalmente termos um concorrente. |
| 21:28 | O que o Heroku conseguiu fazer foi tornar a infraestrutura trivial pra desenvolvedores. |
| 21:34 | Lembram como eu passei o episódio inteiro da semana passada falando como era complicado montar |
| 21:40 | uma infra com confiabilidade e segurança? É o melhor meio do caminho entre uma VPS ou AWS puro e |
| 21:47 | um Kubernetes porque eles acertaram a usabilidade e foram inteligentes no modelo de negócios. |
| 21:53 | A partir de 2006 o mundo de tech startups explodiu, inspirada por todos os novos |
| 21:58 | unicórnios crescendo como se não houvesse amanhã. Todo mundo queria conseguir subir suas |
| 22:04 | coisas nas novidades da AWS mas ninguém tinha conhecimento suficiente de infraestrutura pra |
| 22:09 | ficar lidando com CF Engine ou Puppet. Pior ainda, um desenvolvedor não sabe como de fato configurar |
| 22:16 | um banco de dados. Não basta só instalar porque a configuração padrão costuma ser ruim, então você |
| 22:22 | precisa saber tunar esse banco pra caber no seu servidor corretamente. Ninguém sabe configurar |
| 22:28 | replicação master slave. E por aí vai. Por causa disso se abriu um nicho pra tech |
| 22:34 | startups que não existia até então. Se você quer enviar e-mails, jamais tente montar seu próprio |
| 22:40 | servidor de e-mail como a gente fazia no começo dos anos 2000. Em vez disso contrate um serviço |
| 22:45 | como Sendgrid ou Mailgun. Em vez de montar seu próprio servidor de Redis, com redundância,   backup e tudo, contrate uma RedisLabs. Em vez de montar seu próprio servidor de   cache com Memcached, contrate a Memcachier. Em vez de ter que lidar com repositório pra |
| 23:02 | upload de imagens ou outros arquivos e ter que programar coisas como processamento de imagens,   contrate a Cloudinary. E por aí vai. Se a AWS inaugurou a categoria de IaaS ou |
| 23:13 | infraestrutura como serviço, o Heroku inaugurou a categoria de PaaS ou plataforma como serviço e |
| 23:20 | finalmente, empresas como New Relic, Papertrail, CloudAMQP, Sendgrid, Cloudinary, e centenas de |
| 23:27 | outros inauguraram a terceira categoria: o famoso SaaS ou Software as a Service. |
| 23:33 | E o que o Heroku fez de inteligente foi desde o começo integrar esses diversos SaaS em sua |
| 23:39 | plataforma de tal forma que fosse simples tanto via o dashboard web quanto via linha de comando |
| 23:45 | adicionar esses serviços aos nossos projetos, além de integrar a cobrança de tudo numa fatura |
| 23:51 | só. Mas eles mantiveram pra eles alguns dos serviços mais críticos como o banco de dados |
| 23:56 | Postgresql e depois o Redis. E por isso era tão difícil tentar implementar um clone de Heroku |
| 24:02 | você mesmo. A parte de containers, buildpacks e deployment usando um comando como git push não era |
| 24:09 | tão difícil subir algo parecido num VPS como Linode ou DigitalOcean. Mas não adiantava nada |
| 24:14 | fazer deployment da sua aplicação e não ter um banco de dados confiável. Daí você caiu no mesmo |
| 24:20 | problema de antes de ter que configurar o banco de dados e, principalmente, manter ele rodando. |
| 24:25 | Eu diria o seguinte, se você é desenvolvedor de software, não tem experiência real como sysadmin, |
| 24:31 | e precisa subir sua aplicação web mas não sabe nem como começar a configurar um Kubernetes, |
| 24:37 | vá pro Heroku. É muito menos dor de cabeça. E não faça a conta de centavos por hora vezes |
| 24:44 | horas por mês e comparar com o preço do Heroku e dos outros SaaS. Considere quanto custa um |
| 24:49 | sysadmin pra configurar e dar manutenção na infra toda por toda a vida da sua aplicação. Não tente |
| 24:56 | fazer infra sozinho se nunca fez isso antes, é sempre um desastre. E se sua aplicação web não |
| 25:01 | monetiza o suficiente pra pagar a conta, você está fazendo alguma coisa muito errada. Mas, além de ficar aqui fazendo propaganda de graça pro Heroku eu queria falar de outra |
| 25:11 | coisa importante. O Heroku foi inteligente também educando os desenvolvedores. Nós desenvolvedores |
| 25:18 | que crescemos no fim dos anos 90, com coisas como Java ou mesmo PHP, em ambiente corporativo, |
| 25:24 | estávamos mais preocupados em codar de qualquer jeito dentro do prazo e não se preocupar tanto |
| 25:30 | com a qualidade ou peso da aplicação. A métrica era praticamente linhas de código por hora. Se |
| 25:37 | a aplicação ficasse pesada era só culpar a infra e mandar instalar numa máquina maior e foda-se. |
| 25:43 | Em 2008, no Heroku os containers ou dynos como eles chamavam vinham em vários tamanhos, |
| 25:50 | contanto que esse tamanho fosse 512Mb de RAM e acho que só depois colocaram 1GB de RAM e anos |
| 25:57 | depois opções maiores. Nós rapidamente começamos a fazer aplicações web mais e mais complexas e de |
| 26:03 | repente não cabia em 512Mb!! Código mal feito roda na máquina do desenvolvedor, |
| 26:09 | mas quebra em produção, em particular em recursos mais restritos como nos dynos do Heroku. Aliás, |
| 26:15 | dynos é como o Heroku chama seus containers. Eu sempre achei isso sensacional, porque é muito   fácil fazer um código porco. E é sempre bom não contar com a muleta de só aumentar a máquina e |
| 26:26 | mostrar imediatamente que a aplicação que tá mal feita mesmo. Quando você não tem outra opção, vai |
| 26:31 | precisar programar direito. Então o Heroku ajudava a separar programador bom de programador ruim. |
| 26:37 | Inclusive o co-fundador do Heroku, Adam Wiggins publicou um guia chamado the twelve factors |
| 26:44 | ou os 12 fatores, que vou deixar nos links na descrição abaixo, que descreve como uma aplicação |
| 26:50 | web deveria ser programada e organizada pra ser escalável. O framework Ruby on Rails desde sempre |
| 26:57 | seguia esses 12 fatores e com a popularização do Heroku todo framework web que se preza passou a |
| 27:03 | seguir, independente de rodar no Heroku ou não porque esses 12 fatores são universais |
| 27:08 | pra apps minimamente bem feitas. E não era tão simples, um Wordpress da vida dava trabalho pra |
| 27:15 | se adequar em todos os fatores na época. Graças a isso uma nova geração de técnicas, |
| 27:20 | otimizações, procedimento e convenções começaram a mudar a forma como a gente programava. Em vez de |
| 27:27 | pensar em rodar numa única máquina grande, tínhamos que parar pra pensar em rodar em |
| 27:33 | múltiplos containers menores. Entendemos que a forma de escalar massivamente não é verticalmente |
| 27:39 | aumentando a máquina, mas sim horizontalmente com mais containers. E na intenção de quebrar |
| 27:45 | aplicações grandes pra escalar que nasceu também a idéia de micro-serviços. Eu sou contra quebrar |
| 27:52 | sua aplicação em dezenas de micro-serviços sem motivos. Mas um bom motivo é quando uma |
| 27:58 | aplicação grande não cabe num container, então fica óbvio que precisa ou cortar fora a gordura |
| 28:04 | que não precisa, ou particionar em mais de uma aplicação em containers diferentes. |
| 28:10 | Pulando a história pra 2013 finalmente surge o tal Docker que inicialmente usou |
| 28:16 | o Linux Containers ou LXC e adicionou novas ferramentas. Em particular, ele se aproveita |
| 28:22 | do fato de você poder montar um root separado do sistema hospedeiro no container e passou a |
| 28:27 | usar o Union File System. Pense um filesystem que consegue montar uma imagem que é somente |
| 28:33 | de leitura como o novo root desse container, e toda vez que você tenta escrever ele cria uma |
| 28:40 | segunda camada por “cima” vamos dizer assim. Lembram quando expliquei sobre o conceito de Copy |
| 28:46 | on Write pra memória no caso de processos que fazem fork no Linux? É a mesma coisa |
| 28:52 | só que pra disco. Por isso as imagens de Docker são incrementais. Se você usa Git, |
| 28:58 | pense se você pudesse montar um repositório de Git como o root do seu container e toda vez que |
| 29:04 | você modifica ou escreve alguma coisa é como se fizesse um novo commit. Assim você consegue |
| 29:09 | inclusive voltar um desses commits pra versão anterior. Mais importante: você consegue empacotar |
| 29:15 | esse filesystem inteiro num arquivo, que são as imagens que seu cliente de docker baixa. |
| 29:21 | O Docker depois trocou o LXC, que se usava via a biblioteca libvirt, por uma que eles |
| 29:27 | mesmos fizeram, a libcontainer. Mas acho que o mais importante do Docker foi padronizar |
| 29:33 | a receita pra descrever as imagens no que hoje conhecemos como Dockerfiles. Esses Dockerfiles |
| 29:39 | são parecidos com as promessas de um CF Engine ou as receitas de um cookbook de Chef. É um arquivo |
| 29:45 | onde você declara como essa máquina vai ser configurada, que pacotes vão ser instalados, |
| 29:50 | você pode inclusive declarar que comandos rodar da primeira vez que a imagem é criada   ou toda vez que ela é inicializada. E também padronizar a interface de uso de linha de comando |
| 30:00 | que hoje até o Kubernetes meio que copia. Tem gente que ainda confunde Docker com alguma |
| 30:07 | coisa parecida com um Virtualbox, mas espero que com o que expliquei até agora tenha ficado |
| 30:12 | mais claro. Docker não é full virtualization, não é paravirtualization e não é um hypervisor. |
| 30:19 | Virtualização é literalmente falsificar o hardware físico. Nesse hardware virtual |
| 30:25 | você pode rodar múltiplos sistemas operacionais diferentes, ou seja, múltiplas kernels diferentes, |
| 30:31 | incluindo kernels que não são do Linux como Windows ou BSD ou Mac e inclusive |
| 30:37 | de processadores diferentes de Intel ou AMD como os fazem os emuladores de videogame. |
| 30:42 | Docker é um conjunto de ferramentas pra organizar e facilitar o uso de de cgroups, |
| 30:47 | namespaces e union filesystem, tudo que você podia usar sozinho, mas a casca do Docker por |
| 30:54 | cima obviamente torna tudo ordens de grandeza mais simples. Portanto você deve ter entendido que a |
| 31:00 | idéia toda é rodar os programas de todo mundo no mesmo sistema operacional, na mesma máquina, |
| 31:06 | sem rodar outro sistema operacional por cima. Na prática é uma máquina só, um sistema só, |
| 31:13 | rodando os programas lado a lado mas com a kernel mentindo pra todos eles   acharem que não tem ninguém mais. Mas se você já usou Docker já deve ter |
| 31:22 | instalado em cima de um RedHat ou Ubuntu e dentro dos containers ter conseguido instalar e rodar |
| 31:28 | outra distro Linux, totalmente diferente, como Arch ou Alpine e inclusive rodar um pacman e |
| 31:35 | instalar pacotes, ou seja, fica parecendo que é um VMware ou outro hypervisor onde você instala outro |
| 31:41 | sistema operacional. Como isso é possível se eu acabei de dizer que não é virtualização e estamos |
| 31:47 | compartilhando o mesmo sistema operacional? Falando de forma bem simplificada, uma distro |
| 31:53 | Linux é o conjunto do binário da kernel do Linux e de programas como o gerenciador de pacotes, |
| 32:00 | o binário do Bash e outros utilitários e serviços. Tirando a kernel que roda no Ring-0, o tal kernel |
| 32:07 | space, todo o resto roda em userland. Agora pense uma distro que eu removo o kernel, só |
| 32:13 | sobra os programas em userland. E eu falei que num container nós compartilhamos a mesma kernel. |
| 32:18 | Ou seja, se o container montar um diretório pra onde estão os programas de userland que |
| 32:24 | definem um Ubuntu, então dentro desse container, pra todos os efeitos e propósitos, é um Ubuntu, |
| 32:30 | mesmo que do lado de fora estamos rodando o Docker num Fedora. O Ubuntu dentro do |
| 32:35 | container vai usar a kernel compartilhada do Fedora. Essa é a mágica dos containers. |
| 32:40 | Obviamente rodar todos os programas userland de um Ubuntu inteiro dentro de um container é pesado |
| 32:48 | e um desperdício de recursos, especialmente se eu for inventar de querer rodar 10 containers, |
| 32:54 | todos com os mesmos userland de Ubuntu repetidos. Por isso temos outras distros mais adequadas pra |
| 33:01 | rodar num container como o CoreOS ou Alpine, que são userlands ordens de grandeza menores e só com |
| 33:08 | os binários essenciais pra rodar a maioria dos programas que precisamos. A idéia do Docker é que |
| 33:14 | o seu programa dentro do container não dependa de nada do sistema operacional hospedeiro e rode suas |
| 33:20 | próprias dependências. A idéia de um container não é rodar dezenas de programas dentro dele, |
| 33:26 | mas sim somente em um. Um container só pro Postgres, outro container só pro Redis, outro   container só pro NGINX. Por isso mesmo que não existe Docker |
| 33:37 | de Windows ou de Mac. A kernel do Windows não tem cgroups e namespace nem union file system, nem o |
| 33:44 | Mac e acho que nenhum UNIX BSD também. Mas então como eu consigo rodar Docker no Windows ou no |
| 33:50 | Mac? Na realidade você primeiro tem que iniciar um hypervisor, seja tipo 1 como o Hyper-V ou o novo |
| 33:56 | Hypervisor Framework no MacOS a partir da versão 10.10 Yosemite, ou mesmo um hypervisor tipo 2 |
| 34:03 | como Virtualbox ou Vmware workstation. Daí você cria uma máquina virtual no hypervisor |
| 34:09 | e daí instala uma distro Linux com Docker. Agora, de dentro dessa máquina virtual você pode criar |
| 34:16 | containers e compartilhar a kernel desse Linux. Daí o cliente de Docker rodando no Windows se |
| 34:22 | comunica com o Docker rodando dentro da máquina virtual, por exemplo, via a rede interna TCP. |
| 34:28 | Esse é o truque todo! Por isso, em hardwares físicos equivalentes, o Docker vai ser mais |
| 34:34 | performático se o sistema operacional hospedeiro for também um Linux. Se for um Windows ou Mac |
| 34:41 | você vai perder performance porque vai precisar também rodar um Linux num hypervisor antes. |
| 34:46 | A idéia de um container não é ser um sistema operacional independente. Como já disse o |
| 34:52 | correto é rodar somente um único processo por container. Por isso você tem hoje soluções como |
| 34:58 | o Docker Compose que permite que você declare num arquivo texto pra subir vários containers, |
| 35:03 | cada qual com seu Dockerfile e dizer que volumes eles vão montar pra compartilhar arquivos, |
| 35:09 | ou que portas eles vão expor que o outro container vai conseguir enxergar. Em paralelo a isso, digamos que você montou seu Dockerfile e seu container funciona bonitinho na |
| 35:20 | sua máquina de desenvolvimento, mas agora eu quero subir essa mesma imagem na minha conta na AWS EC2 |
| 35:26 | ou DigitalOcean ou outro provedor de máquinas virtuais. Pra isso existe o Docker Machine, |
| 35:32 | que vai facilitar o processo de subir ou fazer deployment dos seus containers num servidor na |
| 35:38 | internet. Nesse caso o provedor precisa fornecer o suporte a Docker em suas máquinas virtuais ou |
| 35:45 | você mesmo instalar o serviço de Docker na máquina virtual que provisionar. Só fazer alguns containers não é suficiente. Você quer ter controle maior pra subir uma |
| 35:55 | infraestrutura inteira com dezenas de máquinas virtuais e containers, além de configuração de |
| 36:00 | rede, políticas de segurança e outras coisas. Organizar todos esses recursos virtuais e não |
| 36:06 | virtuais de uma forma coordenada requer mais que só um vmware ou docker, por isso existem |
| 36:12 | as soluções que chamamos de orquestradores, como o Docker Swarm, ou o Mesos, ou Marathon ou Nomad. |
| 36:19 | Mas em 2019 quem realmente se tornou o padrão de fato é o Kubernetes do Google, que está disponível |
| 36:26 | em todo provedor de infraestrutura como serviço, desde o Google Cloud, Microsoft Azure ou AWS. |
| 36:33 | Essas soluções se confundem com o próprio Docker já que num Kubernetes você instala |
| 36:38 | imagens compatíveis com as de Docker e o runtime de containers por um tempo foi o |
| 36:44 | próprio Docker. Na prática imagine que você está no Google Cloud, que é concorrente da   Amazon AWS. Você tem máquinas virtuais rodando em cima de alguma coisa como o Citrix XenServer, |
| 36:55 | que do ponto de vista de um servidor, é como se fosse seu Virtualbox ou Vmware que você roda no |
| 37:01 | seu desktop ou notebook. O Kubernetes enxerga isso como Nodes ou nós. E dentro desses nodes você pode |
| 37:08 | rodar múltiplos containers Docker que o Kubernetes enxerga como containers, agrupados dentro de Pods. |
| 37:15 | Mais do que isso você tem um registro central de toda a infraestrutura de tal forma que se um |
| 37:21 | container tiver problemas e cair ou node cair, o sistema central sabe como reconstruir. |
| 37:26 | Se você está iniciando, parece algo que um Docker compose e Docker machine resolveriam, |
| 37:32 | mas o Kubernetes, ou seus concorrentes como o Swarm ou Mesos, são mais complexos |
| 37:37 | que isso. Além de containers, temos que lidar com storage, com endereços de IP externos e internos, |
| 37:44 | regras de firewall, clusters. Ele está preparado pra cenários com múltiplas zonas; |
| 37:49 | por exemplo distribuir parte dos seus containers na zona Estados Unidos Central e outros containers |
| 37:56 | na zona Asia sul caso você tenha público tanto na América quanto na Ásia e quer oferecer a melhor |
| 38:02 | performance pros dois públicos. E existe o suporte a cluster de federações, dessa forma |
| 38:08 | você pode manter parte da sua infraestrutura no Kubernetes do Google Cloud que é GKE e |
| 38:14 | outra parte no Kubernetes da AWS que é o EKS. Ou seja, em provedores diferentes de cloud. |
| 38:20 | Em resumo o Docker se tornou uma organização, um ecossistema, e um conjunto de ferramentas, |
| 38:25 | mas por baixo dos panos os componentes que realmente importam e possibilitam isso vem na |
| 38:31 | kernel do Linux, que é o cgroups e o namespace. Todo o resto é só uma convenção de uso e um |
| 38:37 | padrão. Inclusive surgiu uma iniciativa do próprio Docker pra padronizar o runtime de containers |
| 38:43 | e o formato das imagens, que é o Open Container Initiative ou OCI. Diversos projetos concorrentes |
| 38:50 | ao Docker surgiram por conta do runtime-spec e image-spec como gvisor, clearcontainers ou |
| 38:56 | katacontainers. Eu mencionei que o Kubernetes usa o runtime de containers do próprio Docker |
| 39:02 | mas pouco a pouco já se vê instalações de Kubernetes que não usam mais o Docker. |
| 39:07 | O Heroku teve um papel importante em educar e demonstrar como montar uma plataforma como |
| 39:12 | serviços viável. E o Docker teve um papel importante em consolidar o uso de containers |
| 39:18 | Linux e padronizar seu manuseio. Mas com a abrupta popularização do Kubernetes, se não tomar cuidado, |
| 39:25 | o futuro do próprio Docker é incerto já que o Kubernetes está comendo a fatia de mercado |
| 39:30 | de orquestração. De qualquer maneira, se você quer ser um bom sysadmin nos tempos modernos, |
| 39:36 | no mínimo precisa saber como funciona Docker e seus outros produtos e Kubernetes. E não |
| 39:44 | basta treinar só na sua máquina com minikube, você precisa entrar num Google Cloud e usar o |
| 39:50 | kubernetes lá. Isso é o mínimo hoje, além do que eu já venho falando desde o começo desta série: |
| 39:56 | estude e aprenda Linux de verdade! E por hoje vamos parar por aqui, eu falei |
| 40:02 | rapidamente de como saltamos do mundo primitivo de hospedagens compartilhadas e deployment de |
| 40:08 | sites via FTP pras evolução das tecnologias de virtualização e containers, até chegar no |
| 40:15 | Docker e Kubernetes. Mas isso ainda é só o pico do iceberg. Eu acho que pra fechar o tema de devops, |
| 40:22 | semana que vem vou tentar falar especificamente sobre banco de dados e outro termos hipster, |
| 40:28 | os famigerados NoSQL e talvez uma pincelada na arquitetura moderna de   Web e o comportamento das diferentes linguagens de programação nessa arquitetura de cloud. |
| 40:39 | Mesmo estando num mundo de Kubernetes, as opções todas que eu falei desde o começo como |
| 40:44 | hospedagens compartilhadas, servidores físicos em colocation, VPS, todas ainda existem e muita |
| 40:51 | gente ainda programa do jeito antigo e tem muita dificuldade de entender porque as coisas são |
| 40:56 | diferentes hoje. Por isso eu precisava que vocês entendessem onde esse monte de nomes como cgroups, |
| 41:02 | hypervisors se encaixa no contexto geral. Se ficaram com dúvidas - e eu imagino que |
| 41:08 | ficaram - mandem nos comentários abaixo pra galera ajudar, se curtiram mandem um joinha, |
| 41:14 | continuem ajudando o canal compartilhando com seus amigos, não deixem de assinar o canal e clicar |
| 41:20 | no sininho pra não perder a continuação dessa história! A gente se vê semana que vem, até mais! |
