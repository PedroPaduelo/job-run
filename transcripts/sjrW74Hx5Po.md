# O Melhor Setup Dev com Arch e WSL2

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=sjrW74Hx5Po
- **Duração:** 1:13:44
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Um dos videos que vocês mais gostaram foi o meu Guia Definitivo de Ubuntu. A palavra "definitivo" nunca é definitivo de verdade, |
| 0:10 | especialmente no mundo Linux onde as coisas mudam rápido. Faz muito tempo que fiz aquele video então hoje vou dar uma atualizada. Se você é iniciante em Linux, assista o video de |
| 0:19 | Ubuntu porque tem coisas básicas que ensino lá que não vou repetir mais aqui. Quero aproveitar e falar rapidinho de WSL 2, o Windows Subsystem for Linux, que também já |
| 0:29 | fiz video algum tempo atrás. Então o de hoje vai ser configurar um bom ambiente de desenvolvimento |
| 0:34 | web de Linux, que independe se está no WSL ou num Linux nativo, mas vou focar um pouco mais em WSL. |
| 0:41 | Se quiser pular pra configuração específica de Linux, vá direto pra este tempo aqui embaixo e |
| 0:46 | se já usa WSL2 ainda assim eu ainda tenho uma dica avançada no final. Consulte os capítulos |
| 0:52 | do video e os links que complementam o conteúdo na descrição abaixo. (...) A motivação desse video é que |
| 1:06 | recentemente eu reinstalei meu notebook do zero. O que aconteceu foi o seguinte: antes do Windows |
| 1:11 | 11 ser lançado obviamente eu fiquei coçando pra experimentar. A Microsoft tem um programa chamado |
| 1:16 | Insider. Se você se registra nele, vai habilitar o Windows Update pra baixar versões não-oficiais |
| 1:21 | do Windows, versões beta ou mais instáveis ainda, em desenvolvimento. Eu fortemente recomendo contra |
| 1:28 | fazer isso numa máquina de trabalho porque a chance de dar ruim é muito alta. E justamente deu ruim comigo. As últimas versões |
| 1:38 | Insider Preview quebram alguma coisa no suporte |
| 1:43 | a Docker que ele sequer consegue inicializar o serviço. Dá um erro de timeout e crasheia. |
| 1:48 | E não tá errado porque o povo do Docker ainda não teve tempo de corrigir seja lá o que a Microsoft |
| 1:54 | mudou no Windows na versão em desenvolvimento. Não é culpa de ninguém. Esse é o propósito do |
| 2:04 | programa Insider. O desenvolvedor do Docker pode ver o que o povo dentro da Microsoft tá mexendo e ir atualizando o Docker antes da próxima atualização oficial do Windows ser lançado, |
| 2:14 | que pode ser daqui algumas semanas, pode ser daqui alguns meses. Eu que tava adiantado demais. É o mesmo motivo de porque em Linux recomenda-se sempre usar uma distribuição LTS, |
| 2:24 | que é Long Term Support. O problema é que a versão Insider Preview de desenvolvimento não tem como dar rollback pra versão estável anterior. Precisa fazer um clean |
| 2:33 | install, instalar tudo do zero. Como o Windows 11 já foi oficialmente lançado, não tem porque eu ficar tendo dor de cabeça na versão Insider mais, então fiz o de sempre. Baixei |
| 2:39 | o ISO da versão estável do Windows, queimei um pendrive, bootei e reinstalei tudo do zero. Agora |
| 2:44 | estou com um Windows 11 limpo. Já que ia ter que instalar o WSL tudo de novo, aproveitei pra |
| 2:49 | registrar tudo e mostrar pra vocês. Vamos recapitular esse tal de WSL2. É uma camada |
| 2:54 | de suporte pra facilitar e integrar uma máquina virtual Linux rodando sobre o |
| 3:00 | hypervisor da própria Microsoft chamado Hyper-V. Máquinas virtuais e containers como Docker são |
| 3:09 | coisas diferentes, por isso eu já tinha feito videos antes explicando a diferença entre os dois e recomendo que assista caso não saiba a diferença. Na prática é uma máquina virtual, |
| 3:19 | só mais conveniente do que rodar dentro de um Virtual Box ou Virt Manager. Por ser virtualização, significa que na mesma |
| 3:29 | máquina estamos bootando um Windows e em cima |
| 3:35 | dele bootando um Linux. Os recursos da sua máquina como disco, memória RAM, núcleos da CPU e GPU vão ser compartilhados entre |
| 3:45 | os dois sistemas operacionais e por isso é mais |
| 3:51 | pesado do que rodar só um dos dois sozinho. Não é recomendado rodar um WSL ou qualquer |
| 4:01 | máquina virtual se tiver menos que 4 núcleos de CPU e menos de 8Gb de RAM. Vai rodar se tiver menos? Vai, mas vai ser mais lento porque se faltar CPU vai ficar bem lento, |
| 4:15 | se faltar RAM vai fazer swap em disco e isso vai deixar bem lento. O ideal é pelo menos, |
| 4:25 | pelo menos, 8 núcleos de CPU e pelo menos 16Gb de RAM. Isso dito, não fiquem mandando nos comentários "ah, e minha máquina com 4Gb?", faça a conta, 4 é menos que 8 que eu acabei de falar, |
| 4:35 | vai ser lento. Se você não for fizer nada pesado, não tem problema, mas pra trabalhar vai ser super sofrido. Se tiver máquina mais fraca, recomendo |
| 4:45 | não usar WSL nem nenhum tipo de máquina virtual e sim instalar uma distribuição Linux mais leve |
| 4:57 | como Puppy Linux ou Lubuntu. Não vai ser uma experiência bonita porque a intenção dessas distros é ser leve. Mas mesmo com uma distro que faça boot usando poucos recursos, |
| 5:09 | se abrir um monte de abas no Chrome ou se começar a tentar subir muitos containers de Docker, |
| 5:20 | super rápido vai faltar RAM e CPU e, de novo, vai ser uma experiência bem lenta. Então pro resto do video vou assumir que você tem |
| 5:30 | uma máquina com pelo menos um Intel Core i5 de 9a geração pra cima ou um Ryzen 5 de 3a geração pra |
| 5:44 | cima e pelo menos 16 Gb de RAM com pelo menos SSD como armazenamento. Aliás, se tem uma máquina |
| 5:53 | fraca e não tem dinheiro pra atualizar tudo, no mínimo do mínimo tente trocar seu |
| 6:01 | HD mecânico por um SSD, é o que mais vai fazer diferença na performance geral. Em |
| 6:12 | segundo lugar é aumentar RAM. Meu notebook de trabalho que uso pra viajar é um |
| 6:18 | Asus ROG Zephyrus G14. Ele tem um Ryzen 9 5900 |
| 6:28 | HS com 8 núcleos e 16 threads, mais 40Gb de memória DDR4 e um NVME de 4 terabytes, |
| 6:37 | portanto tem recursos mais que sobrando pra rodar um WSL2. Como falei antes, tá com Windows 11 |
| 6:47 | recém instalado. E a primeira coisa que recomendo toda vez que se acaba de instalar Windows é rodar |
| 6:57 | algum script de debloating, ou seja, um script que desabilita inutilidades como a telemetria |
| 7:02 | que fica mandando dados pros servidores da Microsoft sem você saber. Também desabilita Cortana que ninguém usa e coisas assim que ficam |
| 7:12 | roubando recursos da sua máquina. Um dos scripts mais conhecidos é do LeDragoX. Não vou mostrar como rodar aqui porque tá |
| 7:20 | explicado na página do projeto no GitHub. Se não conseguir seguir essas instruções, também não vai conseguir entender quase nada do |
| 7:25 | video então sugiro que gaste 1 minuto pra tentar abrir a interface gráfica da ferramenta dele. Precisa saber o que é PowerShell, |
| 7:35 | coisa que explico no meu video original sobre WSL2. Assiste lá depois. |
| 7:41 | Uma vez que desabilitamos o grosso de coisas que um Windows sobe automaticamente, mesmo assim ainda vai consumir quase 5Gb logo depois |
| 7:51 | do boot. Por isso falei que com menos de 8Gb, no Windows, as coisas vão ficar lentas. Vamos |
| 7:58 | começar instalando o tal WSL e se estiver nas versões mais recentes de Windows pode só abrir |
| 8:06 | uma janela de PowerShell com permissões de administrador e digitar `wsl --install`. Agora vai tomar um café até baixar tudo |
| 8:12 | e instalar os pacotes que precisa. Não esqueça de instalar o Windows Terminal da loja da Microsoft ou usando algum instalador como |
| 8:21 | o Chocolatey. Se você não é de Linux talvez não entenda ainda a importância de um bom emulador de terminal. No Mac temos o iTerm2, |
| 8:26 | em distros Linux temos o Alacritty que é o melhor ultimamente, mas o Windows Terminal devo dizer que tá muito bem feito e na mesma |
| 8:33 | categoria dos que acabei de falar. Obviamente use o WSL nesse terminal. Depois disso precisamos |
| 8:39 | reiniciar o Windows, como sempre. A instalação padrão de WSL já vai instalar |
| 8:47 | o Ubuntu mais novo automaticamente e quando reiniciar vai pedir pra criar um usuário Linux. |
| 8:52 | Esse passo é opcional, mas como não custa nada, vamos criar. Colocamos uma senha forte e pronto, |
| 8:57 | estamos dentro de um Ubuntu, dentro do Windows. Se é sua primeira vez instalando WSL, essa |
| 9:08 | visão deve ser bizarra. Qualquer outro tutorial ia continuar configurando o Ubuntu, mas como sou eu, |
| 9:18 | vou ignorar totalmente porque pessoalmente prefiro distros baseadas em ArchLinux. Sem |
| 9:24 | me alongar demais, hoje em dia você tem 3 grandes famílias de distribuições Linux. Primeiro as baseadas em Debian, com pacotes |
| 9:35 | formato DEB e o gerenciador APT como o Ubuntu, Elementary, Mint, Deepin, Pop OS. |
| 9:46 | Em segundo tem as baseadas no antigo RedHat, como o Fedora, CentOS, SuSe, com pacotes formato |
| 9:51 | RPM e o gerenciador DNF. O mundo mais enterprise comercial tende a suportar o ecossistema |
| 9:59 | RedHat, então a gente vê marcas como Oracle rodando seus sistemas num CentOS. O Ubuntu meio que dominou os derivados de Debian. |
| 10:09 | Debian era considerado uma das distribuições mais estáveis, mas pra isso ela sempre vinha com programas em versões um pouco mais defasadas. Lembra o que eu falei sobre |
| 10:20 | o programa Insider do Windows? O Debian é como se fosse o Windows 10 quando já temos o Windows |
| 10:29 | 11. Ele prefere estar mais atrasado pra não comprometer estabilidade. Pra gerenciar isso o mundo Ubuntu tem o conceito de LTS. Por exemplo, no momento que estou gravando |
| 10:39 | este episódio a versão mais nova do Ubuntu é a 21.10, mas a versão que eles recomendam como |
| 10:46 | mais estável, e que vão dar suporte por alguns anos é a 20.04 que foi lançada 1 ano atrás. A |
| 10:54 | esta altura a maioria dos principais software de Linux tem suporte ao Ubuntu 20.04 mas nem todos suportam a 21.10 ainda. |
| 11:04 | Ainda existem diversas outras famílias de distribuições que não são nem baseadas em Debian e nem em RedHat, como Slackware ou Gentoo. Mas essas são pra usuários mais avançados. Não recomendo pra iniciantes que |
| 11:11 | ainda não tem costume de fuçar muito documentação e fóruns. Pra mim o melhor meio do caminho entre |
| 11:20 | facilidade e coisas novas é a família Arch Linux que incluem distribuições como Manjaro, Endeavor, Garuda e outras. |
| 11:26 | Na dúvida eu sempre falo: escolha o Manjaro e seja feliz. O padrão no Manjaro é instalar com GNOME que é meio pesado, mas tem versão |
| 11:32 | com KDE ou XFCE que são gerenciadores de janela mais leves e customizáveis. E você |
| 11:38 | sempre pode instalar outras interfaces gráficas como o Cinnamon ou LXQT. Enfim, tem bastante coisa pra se divertir. Uma das |
| 11:44 | grandes vantagens do Arch é o gerenciador de pacotes Pacman e o AUR que é o Arch User |
| 11:50 | Repository. Aqui vale uma explicação. Todo tutorial de Ubuntu por aí vai fazer você digitar um comando como `apt install` pra instalar algum pacote. Esse comando mantém um banco de dados |
| 11:59 | com nomes e versões de pacotes que é atualizado sempre que se faz `apt update`. Ele faz isso se conectando nos diversos servidores oficiais da |
| 12:13 | Canonical, que faz o Ubuntu, e atualiza os bancos de dados. Daí quando fazemos `apt install` vai em algum servidor e baixa o pacote do programa que quer instalar. Tudo costuma ser muito simples. Mas isso implica que todo software do mundo |
| 12:20 | precisaria estar registrado nesses servidores da Canonical, incluindo a versão mais nova e todas as antigas. É muita coisa pra uma empresa só |
| 12:28 | conseguir catalogar e manter atualizado. Por isso é possível outras empresas terem repositórios próprios só com o arquivo de pacotes dos seus |
| 12:35 | software em particular. Por exemplo, se quiser instalar o Docker, os pacotes não estão nos servidores da Canonical. Vamos abrir o tutorial |
| 12:40 | de instalação oficial do Docker. Tá vendo? Não é só um simples `apt install docker`, tem vários passos. Em resumo, |
| 12:45 | primeiro precisa instalar alguns pacotes de infraestrutura do Ubuntu no passo 1. No passo |
| 12:54 | 2 precisamos baixar a chave pública em formato GPG do Docker. Se não sabe o que é assinatura e chaves |
| 13:02 | assimétricas, assista meus videos explicando o básico sobre criptografia. Mas em resumo, todo gerenciador de pacotes que se preza vai tentar garantir que você não instale malware de |
| 13:11 | servidores falsos de hackers tentando se passar pelo Docker ou outra empresa. Pra fazer isso eles assinam os pacotes e os dados transmitidos dos seus servidores usando |
| 13:19 | chaves assimétricas. Eles assinam os pacotes com uma chave privada que ninguém nunca vai ter acesso. Daí instalamos essa chave GPG que é a chave pública. Tudo que a chave privada assina, |
| 13:29 | só a chave pública consegue acessar e vice-versa. Um hacker não tem acesso à chave privada, então não vai conseguir assinar malwares. No passo 3 precisamos |
| 13:38 | indicar pra ferramenta APT onde está a listagem de pacotes nas mais diversas versões. Nessa lista tem coisas como versão mas |
| 13:44 | também quais pacotes tem pra quais arquiteturas como x64 da Intel, ARM de Mac e assim por diante. |
| 13:54 | Essa linha estranha é um comando pra adicionar um arquivo no diretório de sources do apt, que lista de onde que é pra baixar. Finalmente no passo 4 fazemos primeiro um `apt update` pra baixar a listagem desse novo source e atualizar o banco de dados local e só agora |
| 14:06 | podemos fazer o `apt install`. Quando fizer isso várias vezes, vai ficar meio automático, mas viu quantos passos precisamos fazer pra instalar um pacote que a Canonical não controla? |
| 14:13 | Como é instalar o mesmo Docker num Arch? Pra começar, a documentação existe no próprio wiki do Arch. E temos dois pacotes, ou o `docker` ou o `docker-git` que provavelmente é uma versão |
| 14:22 | mais nova e potencialmente mais instável. Mas por padrão podemos fazer só `pacman install docker`. Pronto, só isso. |
| 14:27 | Pacman, assim como Apt ou DNF é um gerenciador e instalador de pacotes. E os repositórios do Arch costumam ter mais pacotes do que os equivalente de |
| 14:36 | Ubuntu ou Fedora. E o que não tem, não precisamos fazer toda a burocracia de procurar um repositório de terceiros, instalar chaves e bla bla como |
| 14:51 | fizemos no caso do Docker. A comunidade mantém um repositório de usuários que é o Arch User Repository ou AUR. A gente pode baixar um script de lá, que serve pra construir um pacote do zero e |
| 15:03 | usamos pacman pra instalar. Mas tem um jeito ainda mais fácil que já vou mostrar. Isso tudo dito, a Microsoft ainda não tem suporte |
| 15:13 | oficial pra distros Arch no WSL, mas existe um projeto no GitHub chamado ArchWSL. Eu uso acho que desde 2018 e nunca tive problemas. É um Arch mínimo, mais leve que um Manjaro, |
| 15:22 | mais leve que um Ubuntu. E a instalação é bem trivial. Pra isso vamos na página de |
| 15:28 | GitHub do projeto baixar um zip que tem tudo que precisamos. Descompacte onde quiser mas eu costumo |
| 15:32 | deixar na raíz do C: mesmo. Agora abra um command prompt ou powershell no Windows Terminal, dê `cd` pro diretório |
| 15:43 | onde descompactou o Arch e execute. Em dois segundos ele vai se registrar no WSL. Como o |
| 15:59 | Windows Terminal já tava aberto ele ainda não detecta o novo Arch, mas basta reiniciar e voilá, já apareceu. O que eu gosto de |
| 16:04 | fazer primeiro é configurar o Terminal pra sempre abrir o Arch primeiro. Da primeira vez que entramos nele, |
| 16:13 | estamos logados como usuário `root` que, como já expliquei no guia de Ubuntu, não se deve fazer. Lembra quando o Ubuntu oficial que o WSL |
| 16:19 | instalou nos forçou a criar um usuário não-root? No caso do Arch vamos fazer isso manualmente. Uma |
| 16:19 | das coisas que afasta muitos iniciantes do Arch é que ele nos obriga um pouco a saber o que estamos fazendo e não faz tanta coisa automaticamente. |
| 16:26 | Por isso que é bom pra aprender. No próprio GitHub do ArchWSL tem um link pra documentação. Vamos seguir e olha só. Daqui você |
| 16:35 | não precisa de talento tampouco habilidade. Basta saber fazer copy e paste e saber ler. Vamos copiar esta primeira linha e colar |
| 16:44 | no terminal com o Arch aberto. Isso vai configurar o arquivo sudoers pra permitir que comandos com `sudo` possam ser executados pra |
| 16:50 | elevar privilégio a partir de qualquer usuário. O ideal não é abrir tudo pra `ALL` como fala aqui, mas como é máquina de desenvolvedor, |
| 16:55 | não tem tanto problema. Depois estude sobre sudoers se não conhecia. Em seguida são comandos básicos de `useradd` pra |
| 17:02 | criar um novo usuário. Faça copy e paste mas obviamente digite um usuário com seu nome, né. Daí usamos o comando `passwd` passando o |
| 17:11 | usuário que acabamos de criar pra configurar uma senha segura. Abrimos outra aba com um command prompt, e podemos fechar a que estava com o Arch |
| 17:16 | aberto, porque precisamos configurar o WSL pra quando abrir o Arch de novo use o usuário que |
| 17:25 | acabamos de criar em vez de `root. Então mais um copy e paste. Pronto, se abrir o Arch no terminal de novo e dermos o comando `whoami` diz que é o novo |
| 17:32 | usuário. A partir daqui, se precisarmos fazer alguma coisa que exija permissão de root é só começar o comando com `sudo`. E a primeira coisa que se deve fazer logo que se instala uma distro |
| 17:37 | linux é atualizar todos os pacotes. No caso deste Arch, precisa fazer algumas coisas antes. De novo, a documentação já diz tudo. Só copiar e colar esses comandos de `pacman` que vai |
| 17:43 | inicializar e popular as chaves que o Arch usa pra checar os pacotes. O pacman é um pouco chatinho pra quem nunca viu porque não tem comandos fáceis como `install`, |
| 17:52 | em vez disso o equivalente é `-S` maiúsculo que significa "sync". Daí adicionamos a opção `y` que se não me engano é pra atualizar o banco de dados com as listagens do servidor oficial do arch. E a opção `u` é pra atualizar os pacotes. E eu faço `yyuu` duplicado pra |
| 17:59 | forçar mesmo se já estiver tudo atualizado. O normal é fazer só `-Syu` sem duplicar, mas quando alguma coisa dá problema ou agora, que é |
| 18:02 | primeira vez, acabo fazendo assim. E esqueci de fazer uma coisa, então vamos dar `control-C` pra cancelar e abrir o |
| 18:11 | arquivo `/etc/pacman.conf` com o editor `nano`. Procurar a palavra `Verbose` e adicionar uma nova linha embaixo dizendo `ParallelDownloads = 5`. Por padrão o pacman baixa um arquivo de cada vez e isso é bem demorado. Se você tem uma boa internet banda larga, pode testar, mas por volta de 5 downloads simultâneos ou até mais, aguenta. Agora sim, vamos repetir |
| 18:19 | o comando do pacman pra atualizar tudo, e agora vai ser mais rápido. Ele vai checar tudo que precisa ser atualizado, |
| 18:26 | mostrar a lista de pacotes que vai baixar e pedir pra ir confirmando. Olha só como mostra 5 pacotes sendo baixados simultaneamente. Bem mais rápido, mas aí temos esse problema aqui. Um erro de chaves |
| 18:33 | que ele não reconheceu. E isso porque eu fui burro e a documentação do ArchWSL tá incompleta. Faltou fazer `pacman -S archlinux-keyring` que instala |
| 18:39 | as chaves mais novas que precisa pra instalar os pacotes. Então vamos instalar e repetir o comando de atualizar tudo. Agora sim, foi até o fim. E é isso. Temos |
| 18:44 | um Arch Linux rodando no WSL 2. Fim do video! Brincadeira. Antes de continuar, vamos deixar nosso terminal um pouco menos feio. Tá tudo com fundo preto. Pra mudar isso podemos ir no site windows terminal themes .dev. Dêem uma fuçada. Eu pessoalmente gosto do "Moonlight II" ou variações de "Monokai". Clique em "Get Theme" e ele vai copiar pro clipboard. |
| 18:55 | No Windows Terminal faça "ctrl-virgula" ou na setinha na barra de título escolha "Settings". Lá embaixo tem a opção de abrir o arquivo de configurações que é em formato JSON. Abre no |
| 19:04 | Notepad mesmo por enquanto e vai lá pro fim. Logo embaixo do último tema, garante que tem uma vírgula e cole o novo tema. Cuidado pra |
| 19:10 | não quebrar o JSON. Não precisa reiniciar, só salvar o arquivo. Agora seleciono o "Arch" no menu e vamos pra "Appearance". Pronto, posso selecionar o "Moonlight II" e embaixo |
| 19:18 | posso aumentar a fonte pra 16 só pra ficar mais fácil de ver aqui no video. Falando em editor, o próximo passo é instalar um bom editor de textos. Na prática, basta instalar |
| 19:25 | o Visual Studio Code que ele se integra plug and play com o WSL. Vamos ver? Vai na loja do Windows mesmo, procura por Visual Studio, seleciona e instala. Pra ter a integração com o terminal precisa fechar e abrir de novo. Pronto, |
| 19:35 | basta ir pra algum diretório e digitar `code .` e olha só como abre o Visual Studio listando os arquivos de Linux. |
| 19:44 | O VSCode funciona super bem e se você prefere uma versão mais light e com mais privacidade, procure pela alternativa chamada VSCodium, que é a mesma proposta do Chromium em relação |
| 19:50 | ao Chrome. VSCode e Chrome tem a péssima mania de se comunicar com servidores da Microsoft ou do Google, respectivamente, e ficar comunicando |
| 19:55 | coisas que não sabemos. O VSCodium e Chromium desligam essas comunicações desnecessárias. Se você é do tipo mais paranóico com privacidade, instale essas alternativas. |
| 20:00 | Mas de vez em quando ainda prefiro ficar só no terminal mesmo. E hoje em dia ainda não tem nada melhor do que Vim na minha humilde opinião. Esse nosso ArchWSL já vem com vim pré-instalado. |
| 20:06 | O básico que você tem que saber é que ele tem um modo de edição e um modo de navegação. Dá pra ficar horas falando de vim e no video de Ubuntu já mostrei o básico. Se nunca tentou, |
| 20:12 | recomendo que dê uma chance de verdade. Acho importante conhecer o básico de Vim pra mudar a perspectiva do que um editor de textos realmente deveria fazer. |
| 20:22 | O Vim foi criado numa época onde se usava terminais remotos em redes super lentas. Por isso não existia o conceito de IDEs como um Visual Studio. Seria pesado demais. Quando conversei com |
| 20:28 | o Uncle Bob a gente falou disso, recomendo que assistam nossa live que está gravada no canal. Mas por isso o Vim padrão parece tão espartano, com comandos super curtos, pra minimizar ao |
| 20:37 | máximo os comandos enviados ao servidor a partir do terminal remoto. Aliás, é por isso que este programa que estamos usando, esta janela do Windows Terminal se chama |
| 20:44 | terminal ou, mais corretamente, emulador de terminal. É um terminal remoto que se conecta com o servidor de terminal rodando por baixo dos panos, localmente. O "Linux" em si não roda |
| 20:49 | "dentro" desse programa, por isso podemos fechar o Terminal mas o Linux em si continua rodando por baixo. E quando abrimos um novo Windows |
| 20:54 | Terminal, ele conecta de novo no servidor por baixo. Pense no Linux como se fosse um servidor web e o terminal como se fosse um navegador web, é o mesmo conceito. Enfim, o Vim na verdade |
| 21:05 | é a evolução do editor original que se chamava só "Vi", do Bill Joy, que era da Sun Microsystems. Já o Vim é um fork do Brian Moolenar. Depois do Vim versão 8 surgiu um fork dele chamado |
| 21:11 | de NeoVim que tem a proposta de modernizar o Vim, em particular modernizar o código-fonte, que tem coisa de décadas atrás que nem precisamos mais e funcionalidades que hoje são possíveis. |
| 21:17 | Uma das coisas que adicionaram faz poucos meses foi suporte à linguagem Lua. O Vim sempre teve plugins escritos numa linguagem própria chamada VimScript, que é uma linguagem bem |
| 21:22 | feia e chata de trabalhar, meio como scripts em Bash. É super antiquado, super fácil de criar bugs acidentais. Por isso pouca gente tem paciência pra escrever plugins nessa linguagem. Já Lua é |
| 21:32 | uma linguagem mais moderna e madura, muito mais difundida, especialmente pra quem programa games. Além de ser uma linguagem super leve e fácil de embutir em qualquer programa. |
| 21:38 | Tem um canal no YouTube que recomendo que assinem, do Chris at Machine. Ele veio acompanhando essa nova integração e criou um projeto no GitHub |
| 21:44 | chamado LunarVim, que é uma coleção de plugins escritos em Vim e uma configuração super completa que transforma o NeoVim praticamente |
| 21:49 | num Visual Studio Code, só que mais leve e mais produtivo. E "praticamente" porque uma das características mais importantes do VSCode são |
| 22:00 | seus servidores de linguagens. Explicando bem curto e porcamente, o VSCode foi inteligente em fazer um editor que por si só é |
| 22:11 | leve e não tem suporte a nenhuma linguagem. É um editor neutro se não configurar nada. Mas quando instala um plugin pra linguagem Ruby, por baixo ele instala um SolarGraph como servidor. Daí o |
| 22:17 | VSCode passa a ser um cliente desse servidor que vai analizar o código Ruby que estamos digitando e dar suporte a coisas como autocomplete, debug, e mais. E cada servidor de linguagens diferentes vai implementar o Language Server Protocol ou LSP |
| 22:23 | que é a API que o VSCode entende. Agora, se eu pegar outro editor e fazer ele entender o protocolo LSP, dá pra usar os mesmos servidores. Por isso consigo trocar o cliente VSCode e substituir |
| 22:30 | por NeoVim. LSP é como se fosse HTML, o VSCode é como se fosse o navegador Chrome ou Edge e o NeoVim poderia ser como o Firefox, sacaram? E o |
| 22:40 | tal LunarVim que o Chris fez já pré-instala todos os plugins necessários pra integrar com LSP. Então vamos instalar pra ver. Primeiro, precisamos do NeoVim. E hoje a versão que tem no repositório oficial já serve. Meses |
| 22:46 | atrás precisava compilar o NeoVim manualmente porque não estava disponível esse suporte na versão oficial, só na beta. Pra instalar no Arch é fácil, só fazer `sudo pacman -S neovim` e veja como lista pacotes de Lua. Sabemos que é a versão que precisamos. |
| 22:52 | Quando terminar de instalar, vamos pra página no GitHub do LunarVim e tem um script instalador pra facilitar nossa vida. Só copiar essa linha e colar no terminal. E de cara já começa reclamando que não temos Git instalado. Bora instalar `pacman -S git` como ele manda. |
| 23:00 | Esse script vai ajudar a instalar as dependências que precisamos. A primeira coisa são pacotes de javascript, daí reclama que |
| 23:05 | não tem nodejs instalado então vamos fazer `sudo pacman -S yarn npm` pra instalar... Agora com a seta pra cima repetimos o instalador do LunarVim |
| 23:10 | e damos yes e pronto, tá usando o `yarn` pra instalar o que precisa. No próximo passo pede pra instalar dependências de |
| 23:13 | Python e como já temos `pip` instalado, prossegue instalando o que precisa... Essa foi fácil, e no passo seguinte ele quer instalar dependências de Rust, mas não temos Rust então o instalador |
| 23:18 | pára de novo. Vamos fazer `sudo pacman -S rust` pra poder usar o `cargo` pra instalar as ferramentas de Rust. |
| 23:24 | Assim como `yarn` é instalador de dependências de Javascript, `pip` é instalador de dependências de Python, o `cargo` é instalador de dependências de Rust. O Rust é uma linguagem compilada que gera binários nativos super otimizados e com segurança superior à de C puro. E no meio da instalação ele deu um erro. Parece que não conseguiu compilar o jemalloc-sys ou pam. |
| 23:29 | Eu já tinha ido no Google antes e o que aconteceu é que o Rust se integra com binários compilados em C também e nesse ponto ele precisou compilar alguma coisa de C só que não instalamos o ferramental pra isso ainda. Num Ubuntu isso seria o pacote `build-essential`, mas não existe no Arch. O equivalente é `sudo pacman -S base-devel`. Só ir dando `yes` no que tá perguntando, |
| 23:34 | mas sempre leia antes, lógico. Pronto. Seta pra cima, vamos repetir os mesmos passos tudo de novo. Ele sempre passa pelos passos de javascript e python mas agora é mais rápido porque já instalou esses passos. O Rust |
| 23:39 | volta a compilar o que falta e agora .... vai até o fim. Mas atenção que fala que precisa colocar o diretório `$HOME/.cargo/bin` no PATH senão não vai achar as ferramentas que acabou de compilar. E no final o instalador também avisa que não vamos usar o comando `nvim` que inicia o NeoVim normalmente mas sim o `lvim` e pra isso precisamos adicionar o `$HOME/.local/bin` no PATH. Eu explico o que é PATH no episódio do guia de Ubuntu. |
| 23:43 | Só pra agora podermos ver o LunarVim, vamos exportar o PATH manualmente adicionando esses dois diretórios... Pronto. Agora podemos abrir `lvim` e olha só que diferença. No LunarVim apertamos "espaço" pra abrir esse menu e com a opção "e" de "explorer" temos um painel com o projeto organizado como árvore, todo configurado com ícones e bem bonito. Podemos navegar pra cima e pra baixo com as teclas "j" e "k" e com a tecla "o" podemos abrir o arquivo embaixo do cursor. |
| 23:48 | Vamos abrir o arquivo "config.lua" pra adicionar uma configuração pra corrigir um pequeno bugzinho que essa versão ainda tem com esse negócio de abrir menu com "espaço". Ele é rápido demais e pode dar conflito com outras combinações de teclas então colocamos `vim.opt.timeoutlen = 500` milissegundos como gambiarra pra contornar e pronto. |
| 23:53 | O video de hoje não é sobre Vim então não quero me alongar demais nele, mas acho que vale a pena fazer uma pequena tangente pra mostrar um pouquinho de porque instalei o LunarVim. Então vou me adiantar um pouco e abrir um projetinho besta em Rails antigo meu só pra dar exemplo. Primeira coisa é que posso fazer ele ficar parecido com uma IDE apertando espaço, que abre esse menu principal, e com "e" eu abro o explorer do lado, que é o plugin NvimTree. A partir dele posso usar o mouse normalmente pra abrir arquivos. |
| 23:59 | Por acaso abri um arquivo de Ruby. Lá embaixo dá pra ver a mensagem de "LSP inactive", ou seja, não tem nenhum servidor de linguagem analisando este arquivo. Mas se esperar alguns segundos, olha só, assim como o VSCode, o LunarVim achou um LSP de Ruby, no caso o Solargraph, e instalou sozinho e a partir daqui todo arquivo de Ruby que eu abrir ele vai analizar. |
| 24:05 | Pra abrir mais arquivos, posso voltar pro painel do explorer com o mouse, ou como eu prefiro, com o teclado fazendo ctrl+h pra ir pro painel da esquerda ou ctrl+l pro painel da direita, e os mesmos comandos de navegação como "j" pra ir uma linha pra baixo ou "k" pra uma linha pra cima funcionam igual. E com "o" posso abrir o arquivo embaixo do cursor. |
| 24:10 | Mas esse explorer usa muito espaço, então posso fechar ele. Em vez de usar o explorer posso abrir o menu principal com "espaço" e apertar "f", que vai abrir o plugin Telescope que usa a ferramenta "fd" que é uma das que ele instalou de Rust no começo, lembram? E posso fazer um fuzzy find direto do nome de algum arquivo, como "archives" e abro o controller. |
| 24:15 | Notem que o editor parece meio poluído à primeira vista, mas isso é o solargraph que analizou o código e fica dando dicas e avisos de coisas que podem melhorar ou bugs óbvios que precisam ser corrigidos. Toda linguagem moderna hoje tem um LSP que faz essas coisas. Por exemplo, nesse trecho ele fala pra evitar usar chaves num bloco de múltiplas linhas, |
| 24:18 | em Ruby é mais bonito usar "do-end" em vez disso, e pronto, o aviso sumiu. |
| 24:24 | Outro exemplo é a sintaxe de atoms em hash que mudou desde a versão 1.9 do Ruby, antes era usando um fat arrow, hoje é usando dois pontos que nem um JSON. E mesma coisa, substituir chaves por "do-end". E aqui embaixo ele fala pra não fazer comparação com zero e sim usar o método "empty?" pra checar se a variável está vazia ou é zero. |
| 24:29 | Além disso, ele nos ajuda quando temos dúvida numa função. Aqui eu digito ponto e ele já me dá uma lista de métodos que a String aceita. E se eu sair navegando, ele até me dá a documentação da função caso eu não me lembre ou tenha dúvidas. E se for digitando, ele vai filtrando na lista até eu achar o método que eu estava precisando. Tudo coisa básica que se |
| 24:32 | você já usou uma IDE moderna já tinha, mas agora disponível dentro do terminal no vim. E só como último exemplo de coisas avançadas, alguns LSPs tem recursos de refactoring. Vamos procurar o arquivo do model chamado Post. E se eu quisesse renomear essa classe de Post pra Article e não ter que ir abrindo arquivo |
| 24:35 | a arquivo de todo lugar que a classe Post é usado? Posso abrir o menu principal com espaço, apertar "l" pra abrir o sub-menu do LSP e olha que ele tem "rename". Lá embaixo eu mudo de Post pra Article e deixo o LSP trabalhar. |
| 24:38 | Notem que lá em cima apareceu um monte de aba de arquivos que ele abriu. Ele ainda não salvou nada. Só abriu todo arquivo onde aparece a classe Post e substituiu por Article. Abrindo aquele mesmo |
| 24:41 | arquivo do ArchivesController, olha como onde tava Post agora tem Article no lugar direitinho. Mesma coisa no PostsController e assim por diante. Eu devo ir checando e salvando um a um pra garantir que fez tudo certo e, lógico, no final eu teria testes automatizados pra garantir que nada quebrou. Mas é uma das coisas que uma IDE como o |
| 24:44 | LunarVim consegue fazer. E isso foram só 2 minutos de demonstração, tem bem mais coisas por baixo pra facilitar nossa vida. Se você se animar a dar uma chance pro jeito Vim |
| 24:47 | de navegar, em breve vai conseguir programar sem precisar ficar tirando a mão pro mouse toda hora. É muito mais confortável e até mais ergonômico |
| 24:50 | de trabalhar. Além disso ele renderiza tudo em modo texto dentro do Terminal, o que usa muito menos recursos do seu sistema do que o VSCode que, por baixo, é tão pesado quanto um navegador web, |
| 24:53 | como programas feitos em Electron. O VSCode, recém instalado, logo que abre já consome de 250 a 300 mega de RAM. O LunarVim fica na faixa de menos de 150 mega. É quase metade de recursos. Mas claro, |
| 24:59 | hoje em dia depende mais dos LSP que rodam por trás analisando seu código. Voltando pra nossa instalação, precisamos |
| 25:03 | configurar o PATH de forma permanente e pra isso é só adicionar o mesmo comando de export que fizemos no arquivo `.bashrc`. Mas |
| 25:08 | eu pessoalmente prefiro o shell ZSH. Eu sei, tem alguns que vão comentar sobre o Fish, mas eu ainda gosto do ZSH mesmo. Pra quem não sabe, |
| 25:14 | além de Bash existem outras linhas de comando ou shells e suporte a scripts diferentes. O |
| 25:17 | Bash é meio antiquado pra hoje, mas não tem nenhum problema de ficar nele. No video do guia de Ubuntu eu baixei um conjunto |
| 25:23 | de dotfiles de um usuário chamado skwp pra customizar meu prompt, vim e tudo mais, mas ele é muito pouco suportado e hoje em dia existem opções muito melhores. Essa é a parte do video antigo que ficou desfasado. Mesmo na época já existia o Oh-my-zsh que eu testei por um tempo, |
| 25:29 | mas nenhum dos plugins foi muito importante pra mim e acho um pouco pesado. Muita gente gosta de usar só o starship, que faz um prompt até que minimalista e bonitinho de ver. |
| 25:35 | Meu preferido e o que achei mais fácil de instalar e configurar é o Powerlevel10k. Antes precisamos instalar uma outra ferramenta de Arch Linux pra facilitar nossa vida. Lembra |
| 25:41 | dos pacotes que a comunidade mantém no AUR que mencionei? Pra instalar direto de lá não dá pra usar Pacman. Tem vários gerenciadores de AUR mas o que mais gosto é o Yay. E muitos tutoriais mais novos já assumem que você tem yay. Dá pra saber que um artigo aleatório é mais antigo se em vez de yay ele manda usar yaourt, que é desafado. Então vamos lá. |
| 25:44 | Na página de GitHub do Yay vamos descer pras instruções. A primeira coisa é instalar os pacotes de git e base-devel, mas acabamos de instalar então pula. Próxima linha é fazer `git clone` do projeto. Eu prefiro dar `cd` pro diretório temporário do sistema porque não vamos usar esse clone pra mais nada depois de instalar. Feito o clone damos `cd` pra ele e "make package" com opção pra instalar logo depois de construir o pacote. Lembram o que eu expliquei? O AUR não tem os binários nos servidores, só a receita de como montar o pacote de determinado programa. Uma ferramenta com o Yay vai automatizar o que acabamos de fazer manualmente, que é dar clone do projeto, montar o pacote e instalar com pacman localmente. |
| 25:50 | Pronto, com o Yay instalado praticamente não precisamos usar mais o pacman porque ele serve pra instalar tanto pacotes oficiais dos repositórios do Arch quanto do AUR, usando a mesma sintaxe do pacman. De exemplo, vamos instalar o shell ZSH, que vamos usar no lugar no Bash. Basta fazer `yay -S zsh`, nem |
| 25:55 | precisa de `sudo`, ele se vira. Agora vamos pra página de GitHub do PowerLevel10K. Mesma coisa, pulamos pra seção de Instalação e |
| 26:00 | veja como tem instruções pra várias distros. Queremos do Arch. Simples, duas linhas e ele já assume que temos o `yay` instalado, então copiamos a primeira linha e colamos no terminal... pronto. |
| 26:05 | No final ele recomenda instalar algumas fontes. Acho que não faz diferença dentro do terminal, mas pode instalar como fiz aqui. Vai fazer diferença se usar aplicativos gráficos de |
| 26:10 | Linux iniciados de dentro do WSL, como o VSCode de Linux. Mas falo disso depois. Seguindo as instruções é só executar essa linha de comando que vai inserir a inicialização do |
| 26:15 | powerlevel10k no script `.zshrc` que é o equivalente `.bashrc` só que pra zsh, obviamente. Podemos fechar essa aba, abrir outra e ... nada acontece. Isso porque por padrão sempre inicia o Bash, precisamos usar o |
| 26:18 | comando de Linux de "change shell" que é `chsh -s /usr/bin/zsh` pra da próxima vez executar direto o zsh em vez do bash... |
| 26:24 | Pronto, agora fechamos a aba, reabrimos e como é a primeira vez, o powerlevel10k abre esse wizard de configuração. E a primeira coisa que ele pede pra gente confirmar é se estamos vendo um ícone com formato de diamante. Mas em vez disso estamos vendo um quadradinho, que nem quando vemos fontes quebradas numa página. Isso porque ele espera encontrar uma família de fontes que tenham gráficos além de só letras. Chamamos essas famílias de Nerd Fonts. Se você |
| 26:30 | é web designer ou desenvolvedor front-end sabe disso. Acho que foi o GitHub que inventou isso de embutir gráficos como fonte. Isso porque sites como o próprio GitHub usam dezenas de |
| 26:35 | pequenos ícones em todo lugar. Em vez de fazer dúzias de PNGs que além de ser um saco de gerenciar também prejudica a performance do download de assets da página, eles tiveram a |
| 26:40 | idéia de embutir todos os ícones em uma família de fonte, que a gente baixa tudo de uma vez só, como a Font Awesome e fica muito mais fácil de usar em qualquer lugar, não só em sites, porque |
| 26:45 | os emuladores de terminais modernos são capazes de renderizar essas fontes também. Além disso foi a época que Emojis começaram a popularizar, que nada mais são que um |
| 26:48 | padrão onde imagens são associadas com códigos Unicode dentro da família de fontes. Então o mesmo código sempre vai devolver o mesmo emoji independente da família de fontes que estamos |
| 26:53 | usando. Mas a fonte que o Windows Terminal usa por padrão que é a Microsoft Consolas, não tem nenhum desses ícones, por isso devolve um quadradinho pra indicar que não encontrou. Existem várias fontes que você pode pesquisar depois que tem esses ícones com o Fira Code mas eu pessoalmente gosto do Meslo LGS. Na própria página de instruções do Powerlevel10k |
| 26:59 | tem links pra baixar os arquivos de fonte, então vamos lá baixar uma a uma... Pronto, agora vamos no explorer no diretório de downloads, selecionamos todos os arquivos que acabamos de baixar, e escolhemos pra instalar as fontes no sistema... E pronto, |
| 27:04 | agora podemos ir no Windows Terminal, abrir de novo a aba de configurações, escolhemos o Arch, escolhemos a aba de aparência e finalmente podemos trocar o Consolas pelo Meslo LGS. |
| 27:10 | Agora sim, abrimos uma nova aba. Vai carregar o ZSH que, por sua vez, vai carregar o Powerlevel10k. Como não prosseguimos a configuração da última vez, vai pedir pra começar de novo e desta vez veja como aparece o ícone de diamante. Nos próximos passos ele pede pra confirmar que estamos vendo os outros ícones e daí podemos continuar o passo a passo. E aqui vai do gosto de cada um. Vou passar rapidinho o que eu costumo escolher, mas recomendo que vocês experimentem opções diferentes. No |
| 27:16 | final vai gravar tudo que escolheu no arquivo de configuração `.p10k.zsh`. Se não gostou do que escolheu basta digitar `p10k configure` na linha de comando pra chamar esse passo a passo tudo de novo ou editar manualmente o arquivo `.p10k.zsh`. Mas no final, olha só como ficou o meu prompt. Com ícones aqui na esquerda, mostrando o diretório onde estou. Se eu estiver num projeto de Git vai mostrar a branch também. |
| 27:22 | Lá na direita mostrando a hora, mas quando entrar num projeto de código ele mostra outros ícones indicando a linguagem do projeto, a versão dessa linguagem e coisas assim. |
| 27:25 | Agora não podemos esquecer de configurar o PATH no arquivo `.zshrc`, assim podemos ter acesso ao LunarVim e qualquer nova ferramenta instalada pelo Cargo do Rust. Pode abrir com qualquer editor como o VSCode mas neste video sempre vou usar o NeoVim. Só adicionar o export no final do arquivo e não esquecer que a variável `$HOME` é um atalho pro diretório padrão do seu usuário e no final anexar o que já tinha no $PATH antes... Pronto, veja que neste instante se chamarmos `lvim` não vai achar. Mas agora abrimos outro terminal e boom, abriu o LunarVim como deveria. |
| 27:30 | O powerlevel10k é bem flexível pra customizar o visual como quiser, e eu gosto do passo a passo do que ter que ficar ajustando arquivo de configuração manualmente. Só tem que fazer isso uma vez e esquecer. Mas como eu disse dá pra customizar o zsh pra ficar bem mais complexo com um oh-my-zsh e colocar vários plugins. Depende de que tipo de trabalhos mais faz no terminal, então não deixe de fuçar que plugins existem. Mas tem um que eu acho útil e por isso vou instalar |
| 27:35 | manualmente agora. Quem usa a shell Fish já tem isso automaticamente. Vamos instalar que eu mostro pra que serve. No diretório do seu usuário, |
| 27:39 | que você sempre volta fazendo `cd` sozinho, vamos criar um diretório chamado `.zsh` pra instalar o plugin. Agora vamos na página de GitHub dele. Tem link pra outra página com instruções de instalação. Olha como tem instrução pro |
| 27:43 | Oh-my-zsh, mas queremos a forma manual. O primeiro passo é clonar o projeto pro diretório que criamos, então é só copiar essa linha de `git clone` e colar no terminal. Queremos que toda vez que o zsh carregue, também carregue o plugin então temos que |
| 27:46 | editar o arquivo `.zshrc` de novo. Copiamos a segunda linha das instruções e podemos colar no script. Salvamos e pronto. Mas pra carregar agora mesmo, é só executar a linha que copiamos que ele carrega o script do plugin. Pra que serve isso? Vamos fazer um comando idiota de `echo`. E se eu quiser repetir o mesmo comando? Posso copiar o que acabei de digitar e colar ou, começo a digitar `e` e ele consulta no histórico e vai tentando auto completar. Olha como já apareceu aqui. Agora é só dar `tab` ou seta pra |
| 27:49 | direita e vai completar tudo. Isso é super útil porque o tempo todo estamos repetindo os mesmos comandos e eles ficam no histórico da sessão. Isso é um bom exemplo de plugin útil. |
| 27:53 | Como o LunarVim já pediu pra instalar algumas ferramentas feitas em Rust e já colocamos no PATH onde o Cargo instala os binários, podemos aproveitar e instalar mais algumas ferramentas modernas. Se procurar no Google vai achar vários artigos a respeito mas vou usar este |
| 27:59 | entitulado Rewritten in Rust junto com os outros links na descrição do video. Depois leiam com calma, ele lista diversas novas ferramentas feitas em Rust. |
| 28:05 | Por exemplo, logo de cara tem os que eu mais gosto, por exemplo o `bat`, que é um substituto do `cat` que usamos pra listar o conteúdo de arquivos texto. |
| 28:12 | Ou o `exa` que é substituto pro `ls` que usamos toda hora pra listar arquivos de diretórios. Em seguida ele fala do `fd` que é uma alternativa mais performática pro `find` e que o LunarVim |
| 28:18 | já instalou porque o plugin Telescope usa. Além do `fd` o LunarVim também instalou o `rg` ou RipGrep que é um grep mais performático. |
| 28:25 | Podemos instalar usando o pacman ou o yay mas vamos instalar usando o Cargo mesmo. Basta fazer `cargo install` e passar todas as ferramentas que queremos. Olha só o cargo baixando, compilando e instalando... e no |
| 28:31 | final deu alguns problemas. Ele não conseguiu instalar o ytop, dust e delta. Pode ter algum bug nos repositórios mas não me incomodei pra procurar porque não são essenciais. Os principais que eu queria eram o bat e exa. Vamos testar. Primeiro, olha como é a saída do |
| 28:35 | `ls` normal de Linux. Uma listagem normal de arquivos e diretórios, nada demais. Agora vamos usar o `exa` com as mesmas opções de `-la`. Ele não aceita todas as opções iguais do `ls` só as mais comuns e veja só como ficou BEM mais bonito. E pra cereja no |
| 28:41 | bolo tem a opção `--icons`, e olha só como ficou ainda MAIS bonito. Depois que a gente vê assim, |
| 28:48 | não dá vontade de usar o `ls` padrão mais. Eu não testei, mas tudo tem trade-off, não sei se um diretório com milhares de arquivos vai ficar mais lento de listar. E também se quiser capturar a listagem num arquivo texto pra trabalhar depois, daí é melhor não usar o exa. |
| 28:55 | Mesma coisa com o cat. Vamos listar o conteúdo do script `.zshrc`. E como sempre, listado, nada demais. Mas e com o `bat`? Olha só como ficou BEM mais bonito. Mas mesma coisa: se precisar trabalhar com o conteúdo do arquivo num script é melhor usar o cat normal. O bat é só pra visualizar mais bonito. |
| 29:00 | Mas como eu uso `ls` e `cat` só pra visualizar no terminal mesmo, prefiro até substituir eles com aliases, e pra isso vamos abrir o `.zshrc`. Só quero adicionar `alias` pra dizer que quando eu digitar `ls` no terminal o zsh vai na verdade chamar o `exa` e mesma coisa pro `cat` sempre chamar o `bat`. Isso é opcional, mas só pra saber que dá pra fazer isso. |
| 29:05 | Agora que nosso terminal tá bonitão, hora de instalar o ASDF. Não vou me alongar nessa parte porque já expliquei em detalhes sobre isso no guia de ubuntu e vai ser exatamente a mesma coisa agora. Pra quem não lembra, no dia a dia de programador a gente nunca usa uma única versão de alguma linguagem ou framework em todos os projetos. Podemos estar programando um projeto em Node.js versão 16, mas aí alguém me reporta um bug num projeto mais antigo que tava no Node.js 14. Eu preciso ter os dois instalados na minha máquina. Pra isso existem ferramentas como o NVM pra poder ficar trocando de versão de Node. Mas e se eu precisar mexer também num projeto de Python? Daí vou precisar instalar e configurar o VirtualEnv. Mas amanhã talvez eu tenha que ajudar no front-end de um projetinho em Rails, aí preciso instalar também o RVM ou Rbenv. E assim vai. Cada linguagem tem um gerenciador de versões diferente. Em vez de ter que lidar com essa zona toda, posso instalar o asdf, que tem plugins pra dezenas de linguagens e nunca mais usar outro. |
| 29:10 | No Arch é fácil, basta fazer `yay -S asdf-vm`... Ele vai instalar no diretório `/opt/asdf-vm` e pra ativar precisamos fazer `source /opt/asdf-vm/asdf.sh`. Pronto, tá ativado e precisamos colocar essa linha no `.zshrc` pra toda ver que abrirmos o terminal ter o asdf carregado. A partir daqui é como já mostrei no video de ubuntu. Com `asdf list` podemos ver todas as linguagens e versões instaladas. Como ainda não instalamos nenhuma, tá vazio. Então vamos instalar o plugin de node com `asdf plugin add nodejs`. |
| 29:18 | Pronto, agora podemos fazer `asdf list-all nodejs` e ver que a versão mais recente hoje é a 17.4.0 então vamos fazer `asdf install nodejs 17.4.0` e boom, instalado. Só pra fazer graça, podemos instalar uma versão mais antiga também, por exemplo com `asdf install nodejs 16.13.2`. E depois que instalar rodamos `asdf list` e ele mostra que temos as duas instaladas direitinho. Pra escolher uma delas configuramos uma como versão global mas o certo é configurar por projeto. Pra dar exemplo, vamos pro diretório tmp criar um diretório falso de projeto chamado de `teste`. Dentro podemos fazer `asdf local nodejs 16.13.2`. Vamos listar o que tem no diretório e achamos o `.tool-versions` que acabou de ser criado. Dando um `cat` vemos que está declarada a versão que pedimos. Toda vez |
| 29:24 | que entrarmos nesse diretório o asdf vai usar essa versão específica de Node.js independente do que for a versão global. E fazendo isso em todos os projetos, sempre vai mudar pra correta que cada projeto precisa. |
