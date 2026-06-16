# Protegendo e Recuperando Dados Perdidos - Git, Backup, BTRFS

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=yfEhz9poqW8
- **Duração:** 1:10:53
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Estou bem atrasado com a segunda parte do video da Rinha, e vai demorar mais um pouco. |
| 0:07 | Honestamente, o tema me deu burn out, então resolvi fazer um video antes que não deixa de ser um pré-requisito porque até o final vou explicar um pouco mais sobre Docker e |
| 0:16 | Docker Compose. Mas antes, quero falar de um problema que vira e mexe vejo desenvolvedores tendo: perder |
| 0:22 | dados. Sim, acidentes acontecem, e tanto o hardware quanto sistemas operacionais de hoje em dia, |
| 0:28 | ajudam muito a não perder dados. Mas sério, a maioria de vocês não ia conseguir sobreviver com a tecnologia rudimentar que |
| 0:34 | a gente tinha nos anos 80 e 90. Eu mesmo não lembro mais a última vez que perdi dados. |
| 0:40 | Acho um absurdo que programadores ainda percam tempo com esse tipo de problema, então quero discutir diversas soluções pra isso. |
| 0:48 | Vamos lá. (...) Um bom programador é mestre da sua máquina, nunca o contrário. |
| 0:56 | Quando seu hardware perde seus dados e te força a passar perrengue, ele se tornou seu |
| 1:02 | mestre, e você não é mais que um mero peão de um objeto inanimado. Vocês tem que mostrar quem manda. |
| 1:07 | Vamos a alguns fatos. Em termos de sistema operacional, tanto faz se usa Mac, ou Windows ou Linux. |
| 1:13 | Nenhum deles é muito melhor que o outro em termos de garantia de dados. Não é porque escolheu usar Mac que está magicamente mais protegido do que Windows. |
| 1:22 | Isso não é verdade faz anos. Vejam minha série sobre armazenamento. O NTFS do Windows tá longe de ser perfeito, cheio de problemas ainda, mas pro dia a dia, |
| 1:33 | você não vai ter mais problemas do que teria com um ext4 no Linux ou APFS no Mac. |
| 1:38 | Todos tem journaling, por exemplo. Significa que, mesmo que acabe a luz no meio de uma operação de disco, seu sistema de |
| 1:44 | arquivos não vai ficar corrompido a toa. Vira e mexe alguns blocos podem se perder mesmo, mas as rotinas de manutenção padrão, |
| 1:52 | são suficientes pra resolver a maioria dos problemas. Quando alguém perde dados só existem duas razões: porque comprou um HD muito do porcaria |
| 2:00 | ou porque cometeu erro humano mesmo. Aliás, vira e mexe alguém faz aquele meme de digitar "rm -rf /" e diz que iniciante |
| 2:07 | não sabe o que isso faz. Mas parece que quem faz o meme também não sabe. Já faz algum tempo que o comando "rm" não apaga a raíz assim do nada. |
| 2:15 | Precisa ou digitar "/\*" com asterisco no final ou usar a opção "--no-preserve-root" |
| 2:21 | pra realmente apagar a raíz. The more you know. Enfim, nenhum sistema operacional vai resolver qualquer um desses problemas. |
| 2:28 | Hardware porcaria só tem uma solução: jogar fora e comprar um de verdade. |
| 2:33 | Toda vez que estiver tendo problemas frequentes, a probabilidade maior é hardware porcaria. Já a parte do erro humano, vamos tentar mitigar um pouco disso hoje. |
| 2:42 | Alguns meses atrás, um conhecido foi tentar instalar Linux como dual boot com Windows no notebook dele. |
| 2:47 | Não sei qual era a marca, nem nada. Mas ele se ferrou: a partição Linux não bootava mais. |
| 2:53 | Agora vem o problema: as últimas coisas que ele fez no projeto dele, não tinha dado push pro GitHub ainda. |
| 2:59 | E, como praticamente todo mundo aqui assistindo, não tinha backup. Tudo que vou narrar a partir daqui poderia ter sido evitado. |
| 3:06 | Hoje em dia, todo programador usa Git. Isso é obrigatório. Mesmo se trabalha numa empresa, o mais porcaria possível, que por alguma razão do além, |
| 3:15 | ainda não está usando Git, não existe desculpa: o projeto não precisa adotar Git pra você usar Git. |
| 3:21 | GitHub é opcional, Git não. Marrete esse conceito na sua cabeça. Não importa se é um projetinho pessoal só na sua máquina. |
| 3:29 | Faça "git init" e comece a fazer "git commit". Git não precisa de um servidor externo. |
| 3:35 | Digamos que essa empresa hipotética super tosca pra onde está trabalhando não queira usar Git pra não ter que pagar GitHub ou alguma bobagem desse tipo. |
| 3:43 | Ou usa alguma alternativa obsoleta de 20 anos atrás como a enorme porcaria de um SourceSafe |
| 3:49 | da vida. Aí são dois grandes erros imperdoáveis. E digamos que você também não queira investir numa conta paga de GitHub, portanto não tem |
| 3:56 | como fazer repositórios privados. E agora? Como faz? Vou repetir: não precisa existir projeto no GitHub pra usar Git. |
| 4:05 | Muitos iniciantes confundem isso. Git é uma ferramenta, GitHub é um serviço. |
| 4:11 | GitHub precisa de Git, mas Git não precisa de GitHub. Qualquer diretório do seu computador pode virar um repositório Git, basta digitar "git |
| 4:19 | init" dentro e pronto, ele cria o subdiretório ".git" que é o repositório propriamente dito. |
| 4:24 | Agora basta fazer "git add ." pra adicionar tudo nesse diretório e "git commit -m" com uma mensagem pra criar um commit e já era. |
| 4:33 | Só isso. Eu fiz dois videos onde conto tudo que você deveria saber sobre Git e recomendo que assistam. |
| 4:40 | Inclusive eu conto como lá nos primórdios de Git, quando realmente ninguém nem sabia que existia, eu trabalhei em projetos de clientes que usavam coisas como Subversion, mas só |
| 4:50 | eu trabalhava com Git e usava um plugin chamado git-svn pra integrar os dois. Se lá em 2007 eu conseguia usar, sem nenhum suporte, em 2023, não existe desculpa aceitável |
| 5:00 | pra não usar. Isso resolve o problema de acidentalmente apagar um arquivo que não deveria, ou mudar |
| 5:06 | de ideia num código que acabou de fazer, e conseguir voltar pra como estava no último commit. |
| 5:12 | Digamos que você apagou um arquivo. Puts, apagou o arquivo errado? E agora? Se você fez a coisa certa, que é ficar fazendo pequenos commits, o tempo todo, ainda deve |
| 5:20 | ter a versão anterior no último commit. Faça "git status", olha ele marcado pra deleção. Basta fazer "git checkout" e o nome do arquivo, e pronto, listamos e olha só o arquivo de |
| 5:30 | volta aqui. Qualquer programador que use de desculpa "puts, apaguei o arquivo sem querer e perdi tudo", |
| 5:37 | ainda é um iniciante que precisa aprender a usar git. Ah, mas eu gosto de primeiro terminar tudo, tudo e depois fazer commit. |
| 5:44 | E eu digo que você é um idiota. Vou dar um exemplo. Digamos que fiz um código aqui num arquivo, mas não terminei. |
| 5:50 | E acabou o dia. Como sou disciplinado, já vou fazer um "git commit -m 'codigo no meio'". |
| 5:55 | Puts, mas que commit feio. Melhor um commit feio agora do que ter um acidente e perder o arquivo. |
| 6:02 | Agora posso desligar o computador e ir dormir. Acordo no dia seguinte, vou continuar editando esse arquivo e aí sim, finalmente termino. |
| 6:10 | Agora posso fazer um "git commit -m 'codigo final' --amend". |
| 6:15 | Essa opção amend, vai desfazer o commit anterior e trocar por esse novo commit, com a nova mensagem mais bonita e descritiva. |
| 6:22 | Rode "git log" olha só, aquela mensagem feia com código parcial sumiu e estou com o commit |
| 6:28 | bonito. Agora posso fazer push pro servidor se quiser. Dentro de um branch, faça quanto commits quiser, dê push de commits feios, e no final, |
| 6:37 | faça um squash do branch antes de criar um pull request, se fizer muita questão. É uma das formas de lidar com isso. |
| 6:44 | O histórico de commits nunca deve ser reescrito no branch master ou main, mas no seu branch, |
| 6:49 | onde só você está trabalhando, foda-se, faça cinquenta commits. Daqui uma semana quando terminar, faça squash, se a quantidade de commits incomodar. |
| 6:58 | Daí manda merge pra master. Existem várias nuances no que falei, não é uma regra escrita em pedra, essas convenções |
| 7:05 | vão variar de equipe pra equipe. Mas voltando ao meu ponto inicial: digamos que você não tenha um repositório remoto |
| 7:11 | no GitHub. Estou trabalhando sozinho na minha máquina local. E não tenho pra onde dar push. |
| 7:16 | Se der alguma pane catastrófica na minha máquina, eu perco tudo. Como evitar isso? Se o projeto que estiver trabalhando for de cliente, e você for freelancer, por favor, |
| 7:26 | pague uma conta no GitHub ou GitLab e faça push pra lá. Não desperdice o tempo de todo mundo. |
| 7:32 | Isso tem nome: se chama economia porca. Porque na hora que alguma coisa der pane, não tem mais como recuperar. |
| 7:39 | Isso dito, você é mão de vaca bagarai. Ok. Vou te dar a solução mais barata de todos os tempos. |
| 7:45 | Espete um pendrive ou HD externo no seu PC. Do diretório do seu projetinho faça "git clone --bare . /media/pendrive/projeto.git". |
| 7:55 | Isso vai criar um clone do seu projeto nesse pendrive. Lógico o caminho de onde o pendrive montou vai variar de distro pra distro. |
| 8:02 | Adicione o pendrive como origin com "git remote add origin /media/pendrive/projeto.git". |
| 8:09 | Pronto. Vamos continuar trabalhando, criando um novo arquivo, adicionando, fazendo commit. Mas agora posso fazer o bom e velho "git push origin master" e ele vai mandar praquele clone |
| 8:19 | no pendrive. O pendrive está fazendo o papel de GitHub pra você, sacou? E podemos ir mais longe. |
| 8:26 | Digamos que é aquela sexta feira no escritório, você está finalizando uma nova funcionalidade que precisa entregar hoje. |
| 8:31 | O Tech lead tá lá esperando pra finalizar a parte dele. Mas aí dá uma daquelas panes no GitHub e ele fica fora do ar algumas horas. |
| 8:39 | Bem no fim da sexta feira. Fodeu né? Fica pra segunda então? Não. Faça git push no pendrive, passa o pendrive pro tech lead, ele consegue adicionar como |
| 8:49 | remote e dar pull no repo dele. E vai conseguir continuar o trabalho na máquina dele, mesmo sem ter GitHub. |
| 8:56 | GitHub é uma conveniência, mas não é mandatório. Qualquer coisa pode substituir. |
| 9:01 | O que você perde enquanto ele tá fora do ar são as conveniências, a integração com o continuous integration, os pull requests que tavam em aberto e você não puxou, lista |
| 9:10 | de issues e coisas assim, mas o código em si, dá pra manipular de vários jeitos diferentes. |
| 9:16 | Só pra concluir essa parte de Git, vou mais longe no exemplo do GitHub saindo fora do ar. |
| 9:22 | Meu exemplo com pendrive assume todo mundo trabalhando presencialmente no mesmo escritório. |
| 9:27 | Mas que cabeça a minha, todo mundo tá home office hoje né? Então fodeu mesmo, sem GitHub pra centralizar, se cair, todo mundo fica sem conseguir colaborar |
| 9:36 | né? Só que não. Eu terminei a minha parte na minha máquina, o tech lead tá lá na casa dele, precisando |
| 9:42 | puxar o que acabei de fazer pra continuar. Não temos GitHub. Como faz? Simples. |
| 9:47 | Sabe o clone "bare" que eu fiz no tal pendrive? Vamos modificar ele. Basta entrar no diretório ".git" e começar fazendo "git --bare update-server-info" e |
| 9:55 | depois "mv hooks/post-update.sample hooks/post-update" e pronto, nosso repositório está pronto |
| 10:02 | pra ser integrado a um servidor web qualquer. O mais simples que consigo imaginar é o http server que vem no Python. |
| 10:09 | Com uma única linha de comando "python -m http.server 8000" e já era, temos um servidor |
| 10:14 | web git. Pra testar, basta ir no "/tmp" ou qualquer lugar e fazer "git clone http://localhost:8000 |
| 10:21 | teste" e voilá, consigo fazer clone do meu repositório local. Quem trabalha com VPNs como TailScale ou ZeroTier já sabe o que fazer: só trocar localhost |
| 10:32 | pelo IP da VPN que todo mundo da equipe enxerga e fazer o mesmo que descrevi antes: o tech lead adiciona um remote apontando pra esse servidor, consegue dar "git fetch" do seu |
| 10:42 | branch e pode continuar a trabalhar tranquilamente enquanto povo do GitHub fica lá brincando de restartar servidor até voltar. |
| 10:50 | Outra solução rápida é instalar ngrok na sua máquina. Ngrok é o jeito mais simples de criar um túnel de fora pra dentro da sua máquina. |
| 10:59 | Muita gente usa pra mostrar uma aplicação web rodando na sua máquina local que ainda não tem servidor de testes ou staging. |
| 11:06 | Assim um cliente que não está presente consegue visualizar o andamento do trabalho olhando o que tá rodando no localhost da sua máquina. |
| 11:13 | Entenderam? Olha só, posso rodar "ngrok http 8000". Isso vai abrir um tunel no serviço ngrok apontando pro nosso servidorzinho python local. |
| 11:22 | Ele nos dá essa URL gigante de "Forwarding". Podemos passar ela pro nosso querido tech lead. |
| 11:28 | Na máquina dele, ele pode fazer "git clone " e essa URL-zona e ... voilá, olha só. |
| 11:33 | Da casa dele, tá conseguindo puxar os commits da minha máquina. Entenderam o que aconteceu aqui? Num dia normal, o trabalho iria parar por horas até o GitHub voltar. |
| 11:42 | Mas sabendo dessas coisas simples e triviais, conseguimos continuar trabalhando como se nada tivesse acontecido. |
| 11:48 | Esse é o poder do Git e de saber como juntar componentes simples. Criar um clone "bare", habilitar pra ser servido via http, subir um servidor http simples com |
| 11:58 | python e abrir um túnel seguro usando ngrok. Mas claro, tudo isso assume que você, no mínimo, usa Git minimamente direito. |
| 12:07 | Fazendo commits frequentes. Fazendo backups frequentes. Só quem já perdeu dados sabe da importância disso. |
| 12:13 | Todos que dizem que é desnecessário só provam que são virgens e ainda precisam perder alguma coisa importante pra aprender. |
| 12:20 | Vocês assistindo podem aproveitar o que falei e evitar ter que passar por esse estresse. |
| 12:26 | Digamos que não fez nada disso. Deu na telha que quer experimentar montar um dual boot na sua máquina pela primeira |
| 12:32 | vez, e gosta de viver perigosamente, nem deu push dos projetos pro GitHub, nem copiou num |
| 12:39 | pendrive, nem sequer fez commits, tá tudo parcial na sua máquina. Mas tá seguro, você assistiu um tutorial no YouTube, seus parças tão te chamando |
| 12:47 | pra jogar Genshin a noite. Não tem tempo a perder, bora redimensionar o disco, criar uma segunda partição de Windows |
| 12:53 | e passar a noite jogando. Só que aí dá tudo errado. Tudo na primeira vez, sempre vai dar errado. |
| 13:00 | Aceitem essa máxima. Se for a primeira vez de qualquer coisa, já comecem sabendo que não vai funcionar de |
| 13:06 | primeira. Não custa nada espetar um HD externo e copiar as coisas mais importantes lá. |
| 13:11 | Mas alas, a pressa é inimiga da perfeição mesmo. Não lembro onde guardei o HD externo, não quero perder tempo procurando. |
| 13:20 | Foda-se, vai dar certo, confia, cola no pai. É muito difícil saber exatamente o que acontece em panes. |
| 13:27 | Se foi algum procedimento errado ou se foi mesmo algum defeito de hardware. Pra tentar demonstrar algo parecido, fiz uma máquina virtual com um Ubuntu e um disco |
| 13:35 | virtual. Esse disco aparece como dispositivo "/dev/vdb" de virtual device B, já que o virtual device |
| 13:41 | A é disco primário. Está formatado como ext4, dentro coloquei meu projeto da rinha em rails, um ISO de Ubuntu. |
| 13:49 | Faça de conta que é um HD normal do seu notebook. Agora vou desmontar com "umount". |
| 13:54 | Um dos jeito de simular um erro de hardware é escrever por cima dos primeiros bytes no começo do dispositivo. |
| 14:00 | Lembram dos meus videos sobre sistemas de arquivo? O que é uma partição? É uma estrutura de dados que guarda coisas como em qual endereço começa e onde termina |
| 14:09 | uma partição, o tipo de sistema de arquivo, localização dos blocos. Esses primeiros bytes formam o que chamamos de Super Bloco. |
| 14:17 | Olha só, se eu tentar montar esse dispositivo de novo, vai dar erro. O Linux não sabe o que fazer, porque não tem mais o superbloco. |
| 14:25 | Os dados em si ainda estão na partição, no linguição de bytes, mas sem o superbloco |
| 14:30 | não dá pra saber onde começa e onde termina o que. Pense assim, seus arquivos são como casas montados com lego. |
| 14:37 | Cada lego está enterrado num campo de futebol, o seu HD. Mas o superbloco tem a localização de cada bloco, e as instruções de como remontar |
| 14:46 | sua casa de lego. Sem esse superbloco, mesmo achando as peças, não sabemos se ainda falta mais blocos ou |
| 14:52 | como encaixar esses blocos. Se acontecer um erro como esse, onde a partição se recusa a bootar ou montar e aparecem erros |
| 15:00 | como esse, filesystem errado, ou opção errada, ou superbloco errado, é um péssimo sinal. |
| 15:06 | A primeira coisa que recomendo fazer é evitar insistir. Se usar comandos errados que sobrescrevem em cima do disco, se fodeu, vai perder dados. |
| 15:15 | Muito cuidado com comandos como fdisk ou mkfs, que é o equivalente de format de Linux. |
| 15:21 | A forma de diagnosticar algo assim é achar outro computador, outro notebook, baixar a |
| 15:27 | ISO de algum Linux como o próprio Ubuntu, gravar num pendrive, daí passar a fazer boot |
| 15:32 | pelo pendrive. A maioria das distros Linux tem um ambiente de Live CD que boota um ambiente operacional |
| 15:38 | inteiro, que inclusive se conecta no seu Wifi e permite instalar qualquer pacote. Isso permite baixar quaisquer ferramentas de diagnóstico e recuperação. |
| 15:47 | A partir desse ambiente, ele vai achar seu dispositivo como um "/dev/sdb" ou "/dev/nvme2" |
| 15:54 | ou qualquer coisa assim. Assistam meus videos sobre Linux, o de Gentoo principalmente, porque a instalação dele |
| 16:00 | exige manualmente fazer exatamente esse tipo de operação. Por isso fiz aquele video: qualquer um que já instalou um Gentoo ou Arch do zero, já |
| 16:08 | sabe como fazer isso. Antes de continuar deixa eu comentar uma coisa: porque esse tipo de problema acontece? |
| 16:13 | Digamos que não foi erro humano. SSDs quebram assim do nada mesmo? E sim, quebram. |
| 16:20 | Se for no Aliexpress e pesquisar por SSDs e ordenar a partir do menor preço, sim, as |
| 16:25 | primeiras dez páginas, no mínimo, é quase 100% de chance de vir um tijolo. Aliás, se vier um tijolo pelo menos vai ser mais seguro. |
| 16:32 | Problema é quando vem um drive mesmo e você confia com seus dados. Primeiro, tem os golpes mais óbvios. |
| 16:39 | Quando desparafusa e abre, dentro não tem uma placa controladora e chips de memória |
| 16:44 | Flash. Não, tem um adaptador USB barato pra micro SD Card. Chips de SD Card sempre usam componentes mais baratos que SSD. |
| 16:53 | Eles foram feitos pra serem quase descartáveis, justamente pra uso em câmeras fotográficas |
| 16:58 | ou celulares. Não foram pensados pra uso como um HD de notebook. Não tem banda pra isso, não tem controlador pra isso, não tem memória RAM de cache, |
| 17:06 | a qualidade da memória NAND flash é muito inferior. Por isso são muito mais baratos. |
| 17:12 | Já disse isso antes e vou repetir: nunca deixe nada importante num SD Card. É comum eles corromperem. |
| 17:18 | SD Card deve ser usado única e exclusivamente como armazenamento temporário, tempo suficiente |
| 17:25 | pra chegar em casa da sua viagem, e descarregar os cartões no seu notebook. Mas os tais SSDs baratos de marcas chinesas genéricas contam com sua burrice. |
| 17:34 | Ninguém nunca abre a carcaça de um SSD pra ver o que tem dentro, e eles contam com isso. |
| 17:40 | Mesmo quando vem com componentes de SSD de verdade, eles vendem chips de 500MB como se |
| 17:45 | fosse 1TB. Por isso sai pela metade do preço, mas o controlador tá gambiarrado e mente pro seu |
| 17:52 | computador dizendo que tem 1TB. Se você tentar mesmo gravar mais que 500MB, ele vai começar a sobrescrever os dados do |
| 17:59 | começo. Como a maioria das pessoas vai só gravando mas não checa na hora se tudo gravou mesmo, |
| 18:04 | só vai descobrir da pior maneira: quando precisar do arquivo, tentar acessar, e descobrir que os arquivos não estão mais lá ou estão incompletos e corrompidos. |
| 18:12 | Como evitar isso? Nunca, jamais compre marcas chinesas genéricas desconhecidas. |
| 18:18 | Compre Samsung, Crucial, Sandisk, Western Digital, só marcas reconhecidas de longa |
| 18:24 | data. E de lojas com alguma reputação e não um revendedor aleatório desconhecido. |
| 18:30 | Muitos vão pegar a carcaça de um Samsung quebrado, colocar o tal adaptador USB com |
| 18:36 | SD card e te revender como se fosse original Samsung. Só compre em loja de verdade e só compre item novo e lacrado. |
| 18:43 | Pense em SSD como escova de dente: você não quer um usado. Em quais situações você pode arriscar um SSD mais barato genérico? |
| 18:51 | Se for pra ser sua biblioteca de Steam, por exemplo. HD pra games. Aí foda-se se perder dados. |
| 18:57 | Se o HD for mesmo um golpe, pega outro HD barato, e baixa tudo da Steam de novo. |
| 19:03 | Mas nunca, jamais, sob nenhuma circunstância use um HD desses pra trabalho, ou mesmo pra |
| 19:08 | guardar coisas importantes pra você, como as fotos da sua família, dos seus filhos, das suas viagens. |
| 19:14 | Você vai perder esses dados pra sempre. Obviamente, todo mundo concordou com o que falei, mas tá fazendo exatamente o que eu |
| 19:21 | disse pra não fazer. Não usou Git. Não fez uma cópia dos seus projetos num pendrive ou hd externo. |
| 19:26 | Foi querer usar o mesmo HD de trabalho pra games com dual boot. E chegamos na situação que ele não boota mais e nem conseguimos mais montar a partição. |
| 19:35 | O próximo passo é arranjar um outro HD, seja interno, seja externo, que tenha mais |
| 19:40 | espaço livre do que o total do HD quebrado. Vamos fazer uma cópia bit a bit, pra garantir que não vamos perder mais nada. |
| 19:47 | Usando o comando "lsblk" podemos ver os dispositivos de armazenamento conectados. Aqui neste exemplo, tenho o "/dev/vba" que é a partição funcionando do meu Ubuntu, |
| 19:57 | e o "/dev/vdb" que é a partição corrompida. Antes de tentar fazer qualquer coisa, o certo é usar o comando "dd" e fazer uma cópia, |
| 20:04 | assim "sudo dd if=/dev/vdb of=~/Downloads/backup.hd bs=4M". |
| 20:12 | O nome de arquivo e extensão não importam, qualquer coisa serve. Dependendo do tamanho do seu HD quebrado e velocidade do seu PC, isso pode levar horas. |
| 20:20 | Vai parecer que está travado. Deixa quieto lá, vai jantar e volta amanhã. O LOLzinho com os parça essa noite já miou, nem insiste. |
| 20:29 | Pronto, agora temos uma cópia bit a bit do HD nesse arquivo. Garanta que não vai perder ele, porque se fizer mais alguma coisa errada na tentativa |
| 20:37 | de consertar, temos uma segunda chance com esse backup. Coloque num outro HD externo se quiser garantir. |
| 20:43 | Mantenha longe de você por enquanto, você já causou problemas demais. Um profissional de recuperação de dados tem muito mais opções do que vou mostrar |
| 20:51 | agora. Só vou falar o mais óbvio, porque eu também não sei tudo. Felizmente muita gente já passou por situação similar, e a partição costuma ter backups |
| 20:59 | desse superbloco. Mais de um na real. Faça o teste no seu próprio sistema. Num Arch linux, primeiro precisamos instalar o pacote "e2fsprogs", que contém programas |
| 21:08 | pra lidar com sistema de arquivos como ext2 ou ext4. Usando o comando "lsblk" podemos listar os dispositivos e com o comando "dumpe2fs /dev/vdb |
| 21:20 | \| grep -i superblock" podemos listar os tais superblocos e backups. |
| 21:25 | Como esperado, o superbloco primário está no endereço zero, mas veja quantos backups temos. |
| 21:31 | Um no endereço 32 mil e tantos, outro no endereço 98 mil e tantos, oito backups. Um erro catastrófico é quando alguma coisa acontece que corrompe não só os primeiros |
| 21:40 | bytes, mas todos os bytes até o último backup. É raro, mas pode acontecer, especialmente se você usar errado uma ferramenta como fdisk |
| 21:49 | e sobrescrever uma nova partição em cima da antiga. O comando "dumpe2fs" talvez não consiga listar esses superblocos caso a partição esteja |
| 21:58 | corrompida. Tentando no dispositivo "/dev/vdb" olha só, ele dá erro e não lista nada. |
| 22:04 | Podemos usar o comando "mke2fs" que normalmente serve pra formatar uma partição, mas passando |
| 22:11 | a opção "-n" de "dry-run" vai só simular a execução do comando sem de fato executar |
| 22:16 | nada. Lembra o que falei antes: não queremos que nada escreva nesse disco quebrado. O programa não está consultando a partição com problema, só dizendo que, se não fosse |
| 22:25 | um dry-run, escreveria os superblocos nesses endereços que listou. |
| 22:30 | Pra facilitar recuperação é importante saber qual é o tipo de sistema de arquivos que escolhemos na instalação. |
| 22:37 | No caso de Windows é fácil, acho que ninguém escolhe nada diferente de NTFS. Mac já complica porque antigamente tinha o HPFS+ que mudou pra APFS a partir do final |
| 22:47 | de 2017 com o macOS 10.13, mas muita gente continuou usando o antigo até depois de 2018. |
| 22:55 | Já Linux, maioria costuma escolher ext4. Tem gente que escolhe ReiserFS ou os novos ZFS ou BTRFS. |
| 23:02 | Cada um deles tem ferramental diferente. O que estou mostrando até agora é assumindo que é ext4. |
| 23:08 | Agora podemos tentar recuperar o superbloco a partir dos backups. Temos que tentar um a um até conseguir. |
| 23:13 | Talvez nenhum dos backups estejam bons, talvez já no primeiro resolva. Pra fazer essa recuperação usamos o comando "fsck" com opção "-b" e o número do backup. |
| 23:25 | Agora é ir confirmando "yes" até o fim. E se continuar assim, yes, yes, olha só, terminou. |
| 23:30 | Será que funcionou? Pra saber, podemos tentar montar de novo. E sucesso, montou de primeira, sem nenhum erro. |
| 23:37 | Se listarmos dentro, sim, aqui estão nossos arquivos. À primeira vista tudo intacto. Nem sempre as coisas acontecem assim bonitinho, lembrem-se que eu só simulei um problema |
| 23:46 | num ambiente controlado. Sob condições ideais de temperatura e pressão, é assim que conseguimos recuperar. |
| 23:52 | O certo agora é não confiar que só porque parece tudo ok, parar aqui. O certo é plugar outro HD externo, e usar um programa como rsync pra fazer uma cópia |
| 24:03 | dos arquivos pra outro lugar. Você quis economizar com HD barato, mas tá percebendo que pra recuperar agora vai precisar |
| 24:09 | de vários outros HDs pra fazer o backup que não quis fazer antes? Depois de tudo copiado, o certo é formatar essa partição do zero e copiar os arquivos |
| 24:18 | de volta. Mas o mais certo mesmo é, depois de copiar os arquivos pra um lugar seguro, se livrar |
| 24:23 | desse HD. Se foi problema de hardware e não erro humano, é provável que vai voltar a dar pau de novo. |
| 24:30 | Nunca confie num hardware que já te deixou na mão uma vez. É lixo, joga fora. Se o cavalo te derruba, você sacrifica, é o que eu sempre digo. |
| 24:38 | No mínimo troca por um SSD novo, de verdade, de uma Crucial ou Samsung da vida, e usa esse |
| 24:44 | HD que deu pau num estojo externo pra ser HD USB só pra coisas não importantes como |
| 24:50 | games da Steam. Mas, digamos que o comando "fsck" não funcionou, nenhum dos backups estava bom e não deu pra |
| 24:57 | recuperar o superbloco. A partir daqui depende da importância dos dados no seu HD. |
| 25:02 | Faz de conta que é daqueles casos excepcionais onde sua carteira de Bitcoin com milhões de dólares está só nesse HD. |
| 25:09 | Um puta erro de amador, mas já vimos isso acontecer antes. Nesse caso o melhor é procurar um profissional de recuperação de dados. |
| 25:16 | Pra recuperações mais hardcore, ele vai desmontar o SSD, colocar num hardware especializado |
| 25:22 | pra esse tipo de coisa e vai fazer magia negra. Dependendo da pane, talvez consiga recuperar. |
| 25:27 | Se não for esse caso, aí recomendo que instale a ferramenta TestDisk. Eu não tenho tanta experiência nisso, então recomendo que procure outros videos como este |
| 25:36 | daqui. Vou deixar o link abaixo. O TestDisk propriamente dito tem algumas ferramentas de análise pra tentar recuperar as informações |
| 25:43 | da partição, reconstruir o que conseguir, mas não tem nenhuma garantia que vai funcionar. Ele não é muito intuitivo de usar, por isso recomendo ler bem a documentação e assistir |
| 25:52 | alguns videos de exemplo. Seja por ter corrompido a partição ou seja porque você deletou arquivos acidentalmente, |
| 25:59 | o caso é o mesmo: os bytes que compõe seu arquivo nunca são deletados de verdade. |
| 26:05 | Eles ainda estão fisicamente no HD. Acontece o seguinte: o tal sistema de arquivos, como ext4, mantém um índice dizendo: arquivo |
| 26:13 | chamado "hello.txt" tem 20 blocos, e os endereços desses blocos são X e Y. |
| 26:18 | Quando pedimos esse arquivo, ele vai buscar esses blocos e nos devolve na ordem certa. Blocos são conjuntos de bytes, depende do sistema de arquivos dizer quantos bytes tem |
| 26:27 | num bloco. Por isso falo que é tudo um linguição de bytes. Quando mandamos apagar um arquivo, não vai bloco a bloco e escreve zeros em cima. |
| 26:36 | Isso até existe, alguns sistemas chamam de "Deleção segura". Só apaga o registro do arquivo "hello.txt" desse índice, daí perdemos a localização |
| 26:45 | dos blocos. Mas os blocos em si continuam no HD. Lembram a metáfora dos legos enterrados no campo de futebol. |
| 26:51 | Eles continuam lá enterrados, só jogamos fora o mapa da localização de cada peça. Os blocos só vão se perder se algum novo arquivo escrever por cima deles. |
| 27:01 | Por isso falamos que, se apagou algo por engano, a primeiríssima coisa a se fazer é desmontar |
| 27:06 | esse HD e tirar da máquina, pra nenhum processo acabar gravando nada em cima por acidente. E por isso a segunda coisa é fazer um backup bit a bit com a ferramenta DD, porque isso |
| 27:16 | vai preservar todos os blocos, exatamente como eles estavam até aquele momento. Daí podemos fuçar sem perigo de perder alguma coisa, porque tem o backup, a imagem exata. |
| 27:27 | No pacote do TestDisk existe a ferramenta Photorec. Também já expliquei em outro video a diferença de arquivos texto e arquivos binários, e |
| 27:35 | expliquei como o sistema operacional sabe que um determinado binário é um executável. Todo arquivo binário, tem nos primeiros bytes, um cabeçalho que indica que tipo de arquivo |
| 27:45 | é. Um JPEG, um PNG, um video MP4, um executável ELF de Linux, um documento de Word, todos |
| 27:51 | tem cabeçalhos padrão. Na metáfora dos Legos, é como ir desenterrando peça a peça, sabendo que um JPEG começa |
| 27:58 | com um bloco vermelho, um Word começa com bloco azul, e aí tentar montar na tentativa e erro. |
| 28:03 | Uma ferramenta como Photorec vai tentar, por tentativa e erro, localizar o começo dos arquivos e os blocos que fazem sentido vir depois. |
| 28:11 | Eu simulei isso nesse dispositivo "/dev/vdb", fazendo de conta que o fsck não conseguiu |
| 28:17 | recuperar. Rodando o photorec, ele vai pedir pra apontar um diretório em outra partição boa, pra onde queremos que vá gravando os arquivos que conseguir encontrar. |
| 28:25 | Dependendo da quantidade de arquivos que tinha, vai demorar um bocado. No final vai surgir um diretório com um monte de arquivos com nomes esquisitos. |
| 28:33 | É o máximo que podemos fazer se não tiver como recuperar o superbloco. Olha só, tentando abrir alguns desses arquivos, de fato o conteúdo faz algum sentido. |
| 28:41 | Mas claramente alguns estão incompletos. E vai vir muito lixo junto. Nesse ponto assuma que você se fodeu, perdeu a maior parte, e qualquer resquício que conseguir |
| 28:51 | recuperar já é lucro. Entendeu? Se você perder o superbloco, perdeu os metadados, diretórios, nomes de arquivos, tudo. |
| 28:59 | Nesse estágio estamos escovando bit mesmo. Como não chegar nesse ponto? Só existe uma maneira: faça backup. |
| 29:06 | É a recomendação mais velha da computação que ninguém segue, e eu nem tenho esperanças |
| 29:12 | que vocês assistindo vão seguir, mas a gente tenta. E é a economia mais porca de todas não fazer backup. |
| 29:18 | Um SSD Sandisk de 1TB, no MercadoLivre, custa uns 300 reais. |
| 29:24 | Sandisk não é e melhor marca, mas é mil vezes melhor que um chinês genérico no fim do Aliexpress. Um case USB que transforma esse SSD num drive externo, não custa 30 reais. |
| 29:35 | Uma balada paga isso. Todo sistema operacional já vem com software de backup. Nem precisa instalar nada. |
| 29:41 | Use o Time Machine do MacOS, use o app de Backup que já vem no Windows, use um app |
| 29:46 | como Deja Vu que já vem nos Ubuntu. Não seja preguiçoso. E backup não é só pro caso de dar pane de hardware no seu SSD barato, tem caso pior. |
| 29:55 | Já ouviu falar de ransomware? Vou contar como eu sou imune a isso. Se num extremo está a pessoa que confia todos os seus dados importantes num SSD genérico |
| 30:05 | chinês do fundo do Aliexpress, sem nenhum backup, do outro lado estou eu. Já mostrei minha solução em outros videos e no Insta, mas eu tenho um NAS de 60 terabytes. |
| 30:14 | São 6 HDs IronWolf de nível industrial de 12 terabytes cada, em sistema de redundância, |
| 30:21 | onde não perco nada mesmo se um HD morrer agora. Eu uso não só pra backup, mas faço coisas como edição dos meus videos direto dele. |
| 30:29 | Claro que não dá pra recomendar isso, é uma solução de mais de 30 mil reais de investimento, na época. |
| 30:34 | Como preços pioraram, agora, é inviável. Minha recomendação é um HD externo USB, coisa de menos de 400 reais, e que vai evitar |
| 30:43 | muita dor de cabeça. Qualquer coisa acima é luxo. O mínimo é suficiente, faça o que puder, só não faça nada. |
| 30:50 | Quero aproveitar pra falar de outra coisa que não falei na série de armazenamento: sistemas de arquivos modernos. |
| 30:56 | Lembrando, sistemas de arquivos como os antigos FAT16 e seus derivados como FAT32, ou mesmo |
| 31:02 | ext2 nos primeiros Linux, foram pensados numa época onde espaço em disco era caro. |
| 31:07 | RAM era caro. CPU era caro. Não havia recursos pra desperdiçar. |
| 31:13 | Era a época onde falo que a gente escovava bit, no sentido que cada bit extra fazia diferença. |
| 31:20 | Segurança e performance são trade offs. Quanto mais segurança quiser, menos conveniente as coisas vão ser e mais recursos vamos precisar. |
| 31:28 | Quando gravamos um arquivo num HD, o sistema de arquivos divide os bytes em blocos e grava nos setores do disco. |
| 31:34 | Esse arquivo fica lá, semanas, meses, às vezes anos, sem ser acessado. Um belo dia você resolve abrir esse arquivo. |
| 31:40 | Digamos que é uma planilha. Como eu sei que um dos setores físicos do disco magnético não falhou, flipou um bit, |
| 31:47 | e algum dos valores na planilha não estão errados? Num sistema antigo como FAT16, não tem como saber. |
| 31:54 | Se corromper, corrompeu e não vamos saber. Num sistema moderno existe checksums. Num APFS de Mac ou NTFS de Windows, existe checksum no nível do arquivo. |
| 32:03 | Quando o arquivo é gravado, o sistema gera um checksum e grava junto. Quando pedimos pra ler, ele pega os blocos e recalcula o checksum pra comparar com o |
| 32:12 | que estava guardado. Se os checksums forem diferentes, significa que o arquivo está corrompido. Não é isso, mas se não sabe o que é um checksum, pense num dígito verificador. |
| 32:22 | Essa informação é super importante, porque numa planilha com milhares de valores, podemos estar tomando decisões importantes de forma errada por causa de um único bit errado. |
| 32:31 | Um único bit pode mudar um valor de 100 reais pra milhões, por exemplo. Mas se o sistema avisar que o checksum está errado, sabemos que não podemos confiar nesse |
| 32:40 | arquivo. O que fazer? Se você seguiu a recomendação e fez a porcaria de um backup, podemos ir nesse backup recuperar |
| 32:47 | esse arquivo. Em sistemas de arquivos mais modernos, pensados pra situações mais parrudas como servidores |
| 32:53 | de arquivos, pense um Dropbox ou Google Drive da vida, com dados de milhões de pessoas, |
| 32:58 | existem opções como o lendário ZFS da antiga Sun e o novo BTRFS do Linux. |
| 33:04 | Eles tem checksum por blocos. Então conseguimos saber qual bloco dentro do arquivo está corrompido. |
| 33:09 | Mas eles vão mais longe. Meu NAS Synology está em configuração de RAID, com múltiplos HDs. |
| 33:15 | Significa que o mesmo bloco tem cópias redundantes em mais de um HD. E BTRFS tem uma rotina que recomenda rodar periodicamente, digamos de 3 em 3 meses ou |
| 33:24 | de 6 em 6 meses, chamado "scrubbing". É um processo pesado que vai rodar em background, sem interromper seu dia a dia, e rechecar |
| 33:32 | checksum a checksum de todos os blocos. Se notar que uma falhou, e estivermos em RAID, ele vai procurar uma cópia redundante desse |
| 33:41 | bloco. A chance dos dois estarem corrompidos ao mesmo tempo é baixa, então podemos usar o bloco |
| 33:46 | intacto pra consertar o que corrompeu. Todo HD falha. Não importa se é HD mecânico com discos ou chips de Flash NAND de SSDs ou NVMEs. |
| 33:57 | Todo chip Flash tem uma vida útil de quantidade de operações de escrita. Depois que passar desse limite, estraga e é isso. |
| 34:04 | As checagens que falei, em muitos casos, só vão indicar mais cedo que algo falhou, mas |
| 34:09 | sem redundância, sem uma segunda cópia intacta, não tem como adivinhar o que era o dado original |
| 34:15 | que corrompeu, só dá pra saber que corrompeu. Checagens de checksum, recuperação de blocos corrompidos, gastam RAM, gastam CPU. |
| 34:24 | Não sai de graça. Servidores de arquivo parrudos como ZFS precisam de gigabytes de RAM pra serem eficientes, |
| 34:31 | e vão usar toda RAM possível. Claro que tem mais vantagens que só isso. NTFS acho que não tem, mas APFS de Mac, assim como ZFS e BTRFS de Linux tem deduplication. |
| 34:42 | Faz de conta que você é desenvolvedor web e tem diversos projetos de Node.js na sua máquina. |
| 34:48 | Sabe o maldito "npm install" que gera aqueles diretórios node_modules em todo projeto? |
| 34:54 | Concorda que na maioria dos projetos vai ter as mesmas bibliotecas e os mesmos arquivos? Então estamos desperdiçando espaço com tanta duplicata? |
| 35:01 | A resposta é sim, está desperdiçando. Pra combater isso existem processos de deduplicação. |
| 35:07 | Num NTFS de Windows, se estiver em Windows Server, ele oferece ferramenta pra que, caso |
| 35:12 | dois arquivos tenham exatamente o mesmo conteúdo binário, ele consiga fazer o metadado dos |
| 35:18 | dois apontarem pros mesmos conjuntos de blocos. Se forem dois arquivos de 200MB, originalmente iriam ocupar 400MB, mas com deduplicação, |
| 35:27 | vai ocupar só 200MB. Só volta a ocupar mais espaço se decidirmos modificar o segundo arquivo, por exemplo. |
| 35:33 | Isso é muito útil no cenário de servidor de arquivos da empresa. O chefe manda um email com um PDF de 100MB pra 10 pessoas. |
| 35:41 | Cada uma grava no seu diretório pessoal no servidor. Iria ocupar 1 giga. Mas se rodar a ferramenta de deduplicação, ele faz as 10 cópias apontarem pros mesmos |
| 35:50 | blocos de um arquivo só, economizando 10 vezes o espaço. É o mesmo caso de termos 10 projetos de Node, cada um com node_modules repetidos. |
| 35:59 | Rodando algum processo de deduplicação, no caso uma ferramenta como Opendedup no Linux, dá pra fazer algo semelhante no ext4. |
| 36:07 | Mas nenhuma dessas soluções é ideal. Os sistemas de arquivos NTFS e ext4 não foram feitos pra suportar esse tipo de coisa. |
| 36:15 | O sistema de arquivos em si não suporta nada disso, daí dependemos de uma ferramenta externa |
| 36:20 | pra tentar adicionar essas funcionalidades. O ideal é que o próprio sistema de arquivos implemente Copy on Write, independente de |
| 36:27 | uma ferramenta externa. Copy on Write ou CoW é super importante. |
| 36:32 | É literalmente os conceitos de um Git só que em nível do sistema de arquivos inteiro, |
| 36:38 | funcionando de forma transparente pro usuário. Num sistema copy on write, quando editamos um arquivo que já existe, os novos blocos |
| 36:44 | não são gravados por cima dos antigos, ele faz o equivalente a um branch de Git e os |
| 36:50 | novos blocos são gravados nesse branch, parecido com commits. Isso mantém o arquivo original intacto. |
| 36:56 | De cara, isso também evita mais corrupção de dados. Antigamente, num FAT16 da vida, onde estávamos na situação onde não tínhamos espaço |
| 37:05 | sobrando, não tinha outra opção: toda modificação de arquivos precisava gravar os blocos novos |
| 37:10 | em cima dos velhos. Mas e se acabasse a luz no meio? Ia ficar um arquivo corrompido. E isso era comum. |
| 37:16 | Pra mitigar esse problema criou-se o conceito de journaling, que NTFS no WIndows, ext4 no |
| 37:22 | Linux. HPFS+ no Mac passaram a suportar no fim dos anos 90. Super resumido é assim. |
| 37:29 | Digamos que eu tenha um arquivo, aquele Powerpoint, e ele ocupa 10 blocos no disco. No sistema de arquivos temos o nome do arquivo e um mapa apontando pra esses 10 blocos. |
| 37:39 | Isso faz parte dos tais metadados de um arquivo. Agora editamos por cima e essa mudança afetaria os dois últimos blocos. |
| 37:47 | Esses dois blocos serão gravados no disco e a localização será gravada no journal. O arquivo original ainda tem os 10 blocos originais até este ponto. |
| 37:57 | Ao terminar de gravar os dois novos blocos, só aí o NTFS vai atualizar o mapa do arquivo |
| 38:03 | e mudar a referência dos dois últimos blocos pra apontar pra localização dos dois novos. |
| 38:08 | Mas digamos que ele começou a mudar a referência do penúltimo bloco e antes de mudar a referência |
| 38:14 | do último, acaba a luz e o sistema reboota. Quando reiniciar, o NTFS checa o journal e vê que faltou mudar a localização do último |
| 38:23 | bloco. Como ele tem essa informação no journal, vai conseguir terminar a operação e o Powerpoint |
| 38:29 | não fica corrompido, como ficaria antes. Se ele ficasse em dúvida, faria rollback, e manteria o arquivo intacto. |
| 38:36 | Os novos blocos não sobrescreveram os antigos ainda. Esse processo gasta um pouco mais de espaço, mas evita que arquivos fiquem corrompidos. |
| 38:44 | Espaço hoje é mais barato, então podemos fazer isso. Copy on Write vai um passo além. |
| 38:50 | Depois que os novos blocos são gravados e registrados no journal, é feito tipo um fork |
| 38:55 | no nível dos metadados. Imagine o mundo antes de Git. Se você copiasse um arquivo em cima do outro, o que acontece com o original? |
| 39:02 | Ele se perderia pra sempre, certo? É assim que todo sistema de arquivos funciona. Mas o que acontece quando habilita Git num diretório e copia um arquivo em cima do outro? |
| 39:12 | Vamos testar. Aqui temos um diretório com Git habilitado e os arquivos já comitados. |
| 39:17 | Se listar o que tem neste hello.txt, veja, "hello world". Vou criar um novo arquivo fora, lá no /tmp com conteúdo de "bla bla bla". |
| 39:26 | Copio o arquivo por cima do meu original. Normal, meu arquivo original com "hello world" foi pro saco como podem ver. |
| 39:32 | E se eu mudar de idéia? Agora entra o Git pra te salvar. Fazendo "git status" podemos ver que ele sabe que esse arquivo foi modificado mas ainda |
| 39:41 | não comitamos, não nos comprometemos com ele. Então podemos fazer "git checkout" desse arquivo, olha o conteúdo, "hello world" de |
| 39:48 | volta. Git nos permite mudar de idéia e não perder dados ao custo de manter uma cópia do original |
| 39:55 | em algum lugar ocupando espaço extra. É por isso que todo projeto deve usar Git. |
| 40:01 | Podemos mudar de idéia sem preocupação. Quando estivermos satisfeitos fazemos commits, e mesmo assim podemos reverter e até recuperar |
| 40:09 | commits apagados. Copy on Write em sistema de arquivos é a mesma coisa. E em Linux, que eu saiba, só existem dois sistemas de arquivos modernos que suportam |
| 40:18 | isso: o ZFS e o BTRFS. Quem usa Ubuntu tem na instalação a opção de usar ZFS. |
| 40:25 | E aqui já aviso: evite. É muito fácil fazer besteira em ZFS e perder tudo sem querer. |
| 40:32 | ZFS é excelente pra quem está montando um servidor de arquivos, usando distros com o |
| 40:37 | TrueNAS, que é o melhor. Só quem estudou bastante a documentação de ZFS deve tentar usar. Não basta só instalar e acabou, precisa de constante manutenção e monitoramento |
| 40:46 | pra saber se está realmente tudo funcionando como deveria. Pra usar no dia a dia, no seu notebook, acho que vai mais atrapalhar do que ajudar. |
| 40:54 | Isso não quer dizer que ZFS é ruim, pelo contrário, é provavelmente o sistema de arquivos mais avançado que existe. |
| 41:00 | Porém, pros propósitos de máquina do dia a dia de programador é como matar uma mosca |
| 41:06 | com uma bazuca e arriscar atirar a bazuca no seu pé. Outra coisa: todo mundo me pergunta qual distro eu mais gosto. |
| 41:13 | Eu uso Manjaro GNOME no meu dia a dia. Primeiro porque é um Arch Linux mais estável. Ele segura um pouco os pacotes mais novos, pra testar e garantir que nada vai quebrar. |
| 41:22 | Mesmo assim alguns updates ainda quebram de vez em quando, mas é um bom compromisso entre ter coisas novas mais rápido e não ficar parado a cada novo update. |
| 41:32 | Mais importante: Manjaro já vem pré-configurado pra BTRFS logo na instalação. |
| 41:37 | É só instalar, escolher BTRFS e ele vai se virar e te dar um ambiente estável. Em vez de mostrar Manjaro, vou mostrar Ubuntu 23, que acabou de lançar. |
| 41:47 | Todo o trabalho de configuração que vou mostrar agora não precisa fazer fazer no Manjaro. |
| 41:52 | Começando na instalação, todo mundo escolhe aqui a primeira opção, que vai instalar EXT4 igual toda outra distro. |
| 41:58 | Mas agora ela tem essa segunda opção com ZFS, que é experimental ainda. De novo: não teste numa máquina de trabalho. |
| 42:05 | Teste numa máquina virtual pra aprender tudo primeiro caso queira mesmo adotar ZFS. |
| 42:10 | Em vez disso vamos nessa terceira opção e particionar o disco manualmente. Não vou explicar cada detalhe. |
| 42:17 | Vamos assumir que você está num PC moderno, dos últimos 10 anos. Provavelmente vem com modo legado na BIOS desligado, já suportando boot com EFI. |
| 42:24 | Falando nisso, não deixe de assistir meu video que explica como o Boot de Linux funciona. |
| 42:29 | Enfim, vamos primeiro criar uma partição EFI que a BIOS vai procurar primeiro. Uns 200 megabytes costuma ser suficiente, deixe 500 se quiser garantir. |
| 42:39 | Depois precisamos de uma segunda partição com um sistema de arquivos legado fácil da BIOS ler. |
| 42:44 | Em Windows costuma ser FAT32, mas aqui podemos escolher o antigo EXT2 mesmo. Eu deixo 500 mega, mas de novo, pra garantir pro futuro caso a kernel cresça de tamanho, |
| 42:54 | deixa 1 gigabyte. Espaço é barato. Agora usamos o resto do espaço pra partição primária com BTRFS e montando o root nela. |
| 43:03 | Se for um notebook, sempre recomendo criar uma partição encriptada com LUKS, ou no mínimo ter o subvolume de HOME encriptado com LUKS. |
| 43:11 | Não vou explicar nada disso aqui porque é um saco de configurar, então pesquisem no Wiki do Arch sobre isso. BTRFS funciona mais ou menos como um LVM, um gerenciador de volumes lógico. |
| 43:21 | Ele começa como um pool de subvolumes e por default vai criar um subvolume chamado "arroba" |
| 43:26 | onde vai montar o "/" root e outro "@home" onde vai montar o "/home". |
| 43:32 | Novamente, pesquise sobre LVM e volumes lógicos. Antigamente uma boa prática era separar duas partições: uma pra root onde fica o sistema |
| 43:42 | operacional e outra pra home, daí montamos essa partição como "/home". O problema de usar partições é que eles tem tamanho fixo. |
| 43:48 | Uma vez definido não tem como redimensionar fácil. É como no Windows quando você particiona C: e D:. |
| 43:54 | Mas com volumes lógicos, podemos redimensionar on the fly, sem qualquer problema. E BTRFS vai um passo além, subvolumes servem propósito parecido de volumes lógicos mas |
| 44:05 | nem precisamos nos preocupar em redimensionar, eles são dinâmicos. Enfim, quando terminar de instalar podemos bootar. Vamos acelerar aqui, três, dois, um e pronto. |
| 44:10 | Ubuntu instalado. É muito fácil instalar distros Linux hoje em dia. Só não instala quem tem muita preguiça ou tem um hardware muito, mas muito ruim. |
| 44:17 | Quando Linux não identifica hardware só tem duas opções: ou ele é muito ruim, ou é muito novo ou recém lançado. |
| 44:24 | Se você não comprou um note que saiu este ano, não tem desculpa, é o hardware que é ruim, porque drivers pra Linux são atualizados constantemente. |
| 44:32 | Se estiver em dúvida num notebook, e tiver a oportunidade de experimentar antes de comprar, |
| 44:38 | leve um pendrive com um Manjaro ou Ubuntu da vida e faça boot pelo pendrive. Veja se ele consegue identificar tudo: wifi, bluetooth, áudio, placa de video. |
| 44:47 | É o melhor teste que pode fazer. Se alguma coisa não for detectada, desista desse modelo. |
| 44:53 | Vai te dar mais trabalho do que compensa. Pronto, agora vamos listar o arquivo "/etc/fstab" que o Ubuntu criou. |
| 44:59 | Super simples. Dispositivos de armazenamento são identificados por um UUID. |
| 45:04 | Abrindo o terminal, basta digitar "lsblk -f" e vai ter uma coluna com UUID. |
| 45:10 | O arquivo "/etc/fstab" define quais dispositivos vão montar onde durante o boot. |
| 45:17 | Por exemplo, o dispositivo de UUID que começa com ed022 vai montar como root "/". Olhem |
| 45:22 | na listagem, é o dispositivo /dev/vda3. O /dev/vda2 de UUID que começa com 294c8 monta como /boot. |
| 45:33 | A graça começa quando vemos o ponto de montagem de "/home". O Ubuntu, pelo menos, separou corretamente um subvolume de BTRFS chamado "@home". |
| 45:42 | É uma boa prática. Mas temos alguns problemas. Do jeito que está aqui, não podemos ativar snapshots, porque seu espaço em disco vai |
| 45:49 | desaparecer rapidamente. Snapshots são possíveis por causa da funcionalidade de copy on write do BTRFS que expliquei antes. |
| 45:58 | Copy on write funciona mais ou menos como branches num Git. Lembra que mostrei que o Git consegue manter o arquivo original, sem perder o conteúdo, |
| 46:05 | mesmo eu gravando outro por cima? Pra fazer isso, obviamente, precisa manter o conteúdo original gravado em algum lugar, |
| 46:11 | certo? Está gastando espaço extra. Diretórios do Linux como /var/cache, /var/log, /var/tmp estão em operação o tempo todo. |
| 46:21 | Mesma coisa /tmp ou arquivo de swap. Se ficar mantendo versão velha deles em snapshots, o espaço livre do seu sistema vai acabar |
| 46:29 | muito rápido sem você entender porque. Pra resolver é assim: abre o terminal e faça "sudo chattr +C /var/log". |
| 46:37 | Isso é change attribute, estamos mudando o atributo do diretório pra dizer pro BTRFS |
| 46:43 | não considerar arquivos nesse diretório pra snapshot. Esse change attribute só vai afetar novos arquivos criados, não os antigos que já |
| 46:52 | existem, sempre se lembrem disso, mas como acabamos de instalar, acho que só isso deve ser suficiente. |
| 46:58 | Agora vamos instalar o Timeshift. É um programa gráfico pra fazer snapshots periódicos do sistema. |
| 47:03 | Pra iniciantes, vai ser mais fácil do que lembrar os comandos pro terminal. |
| 47:08 | Basta fazer "apt install timeshift" ou "yay -S timeshift" no Arch ou Manjaro. |
| 47:14 | Logo que abrir ele vai oferecer pra configurar pra você. Mesmo se não estiver usando BTRFS, a alternativa é usar Rsync, caso esteja usando ext4. |
| 47:23 | Rsync, é um programa pra sincronizar dois diretórios. Equivalente no Windows é o novo robocopy ou o antigo xcopy. |
| 47:32 | O jeito força bruta, sem a ajuda do sistema de arquivos, pra ter um backup local, é fazendo sincronização de diretórios. |
| 47:39 | O problema é óbvio: vai ocupar espaço pra cacete no seu sistema, porque periodicamente vai duplicar tudo. |
| 47:45 | Sim, se algo der errado e apagar algum arquivo que não devia, vai ter uma cópia. Com a funcionalidade de copy on write e snapshots do Btrfs temos a mesma coisa, mas sem duplicar |
| 47:55 | nenhum arquivo e sem gastar mais espaço do que realmente precisa no mesmo HD. |
| 48:00 | Tá complicado de entender? Olha só, vou baixar um arquivo qualquer aqui, escolhi a ISO do Ubuntu. |
| 48:06 | Acelerando e ... pronto, baixado. Agora vou no Timeshift e crio um snapshot manualmente. |
| 48:12 | Com o timeshift configurado posso escolher pra fazer snapshots de hora em hora, e guardar X snapshots por hora, Y snapshots por dia, Z por semana e assim por diante. |
| 48:22 | Depois dêem uma fuçada, mas criei um pra mostrar agora. Snapshots são baratos, pode fazer toda hora. |
| 48:28 | Não importa se você tem mil arquivos ou um milhão de arquivos, diferente de rsync, o tempo de criação de snapshots é quase instantâneo, porque ele não está duplicando |
| 48:36 | nenhum byte, só metadados. Simulando um acidente, oops, apaguei essa ISO que acabei de baixar. |
| 48:43 | Que droga, vou ter que esperar um tempão pra baixar de novo. Ou não. Vamos no Timeshift e posso navegar pelos arquivos do snapshot. |
| 48:52 | Olha só, se formos na pasta de downloads, a ISO está lá. Pronto, só copiar de volta pra pasta de downloads corrente e tá na mão: arquivo recuperado. |
| 49:01 | Não ficou claro? Vou dar outro exemplo. Mas pra isso precisamos terminar de configurar o Timeshift. De novo, siga o artigo que deixei linkado abaixo. |
| 49:10 | Diferente do Manjaro que já me dá isso automaticamente, no Ubuntu precisamos manualmente instalar o grub-btrfs a partir do código fonte. |
| 49:18 | Primeiro precisa instalar os pacotes build-essential pra termos compilador, e o git. Daí fazemos clone do repositório e "make install". |
| 49:27 | Também precisamos instalar o pacote inotify-tools e editar a configuração do grub-btrfs com |
| 49:32 | "systemctl edit --full grub-btrfsd" e trocar a opção "/.snapshots" por "--timeshift-auto". |
| 49:41 | Pronto, agora só iniciar o serviço e habilitar pra iniciar automaticamente depois do boot. |
| 49:47 | E finalmente, mais um programa que precisamos instalar a partir do código fonte, o timeshift |
| 49:52 | autosnap. Mesma coisa, só fazer clone do repositório e rodar "make install" dentro. O que tudo isso faz? |
| 49:58 | Se ainda não passou por isso, é só uma questão de tempo. Sabe quando estamos no meio do dia e pensamos, ah, vou fazer uma atualização no sistema. |
| 50:06 | "apt update" daí "apt upgrade", reboota o computador e pau, não boota mais. E vai ser justo naquele dia que você tá sem nenhum pendrive por perto, daí não consegue |
| 50:16 | bootar no LiveCD. Você tá de home office e decidiu ir trabalhar do Starbucks, não tem nenhum amigo com computador |
| 50:22 | por perto pra baixar a ISO pra você. Acabou sua tarde. Vai ter que voltar pra casa, achar um pendrive, baixar a ISO e gastar um tempo no stackoverflow |
| 50:31 | tentando voltar um kernel antigo pra bootar de volta na sua máquina. Quem nunca? E se eu disser que nunca mais vai precisar fazer isso? |
| 50:39 | Vamos simular de novo. O Timeshift já está configurado pra fazer snapshots periódicos. Com isso, caso um dia lembre, puts, eu queria aquele arquivo que apaguei mês passado e |
| 50:48 | achei que não fosse precisar. Meu HD de backup tá em casa, e agora? Sem problemas, só pegar o snapshot do mês passado, que está local na sua máquina. |
| 50:58 | Mas, e na situação quando fizer um "apt upgrade" e isso quebrar seu sistema? |
| 51:03 | Sem problemas também, aquele pacote timeshift autosnap vai criar um snapshot automático antes de todo "apt upgrade". |
| 51:11 | Daí aquele pacote grub-btrfs vai listar esses snapshots no menu de boot do grub. |
| 51:17 | Oops, Ubuntu por padrão não mostra o menu do Grub. Mas isso é fácil, só editar o arquivo "/etc/default/grub" e mudar a opção GRUB_TIMEOUT_STYLE de "hidden" |
| 51:27 | pra "menu" e a opção GRUB_TIMEOUT de zero pra uns cinco ou dez segundos. Pra atualizar, só rodar "update-grub". |
| 51:34 | Vamos ver como funciona. Pra simular, vamos criar mais um snapshot temporário chamado "teste" no Timeshift. |
| 51:40 | Como é um snapshot manual, vou rodar "update-grub" manualmente, mas num "apt upgrade" não precisaria. |
| 51:47 | Agora vou abrir a loja do Ubuntu e instalar alguns programas. Vamos instalar aqui o Gimp, vai demorar um bocado. |
| 51:53 | Acelerando ... Agora instalamos o Discord, de novo, vamos acelerar. |
| 51:59 | Pronto. Podemos checar no menu, e estão aqui, Gimp, e Discord. Faz de conta que instalei um monte de coisas mas no final mudei de idéia, queria desinstalar |
| 52:08 | tudo e voltar como estava antes. Como faz? Fácil, só rebootar. Agora aparece o menu do Grub aqui no boot e tem esta nova opção e olha só os snapshots |
| 52:17 | que estávamos vendo no timeshift. Estão vendo a descrição "teste"? Basta escolher esse ou um snapshot anterior. |
| 52:24 | Entenderam? Posso bootar direto em um snapshot. Esperamos iniciar, e olha só. |
| 52:29 | Cadê o Gimp? Cadê o Discord? Como o nome diz, timeshift, ele fez um shift no tempo, voltamos ao passado, exatamente |
| 52:37 | como estava antes de instalar aqueles aplicativos. Imagine que em vez de Gimp ou Discord fosse um "apt upgrade" e veio uma kernel quebrada |
| 52:46 | que fode o boot? Basta rebootar, escolher o snapshot anterior e pronto, vai ser como se nada tivesse acontecido. |
| 52:53 | Abrindo o Timeshift, pra tornar isso permanente, posso fazer um Restore do snapshot antigo |
| 52:59 | pra passar a ser meu sistema corrente. Só isso. Entenderam? Com o Timeshift temos um backup local que ocupa muito pouco espaço e com isso qualquer |
| 53:07 | acidente pode ser facilmente recuperado sem precisar de HD externo, sem precisar esperar |
| 53:12 | copiar tudo de backup nem nada, muito menos reinstalar tudo do zero. É instantâneo. Claro, isso é uma conveniência, pense como sendo sua última barreira de defesa. |
| 53:21 | Isso não substitui um backup externo. O Timeshift e BTRFS, pra funcionar, depende que seu SSD esteja funcionando perfeitamente. |
| 53:30 | Se o SSD em si der pau, como mostrei no começo do video, isso não vai te salvar. Aí só um backup externo. |
| 53:36 | O que estou recomendando é ter as três coisas que mostrei até agora: se disciplinar a usar |
| 53:42 | Git em todo projeto, pessoal ou de trabalho. Daí ter BTRFS e Timeshift pra consertar acidentes rápidos. |
| 53:48 | E um backup externo pra evitar catástrofes mais sérias. São três níveis de segurança de dados pra ter dar paz de espírito. |
| 53:56 | E pra finalizar, tem um detalhe importante no caso de BTRFS. Aqui tem a ver um pouco com a Rinha de Backend de novo. |
| 54:03 | Durante toda minha exploração dos projetos dos participantes, fiquei rodando Docker Compose de cada projeto. |
| 54:09 | Eu já fiz um video explicando containers e Docker em particular, não deixem de assistir. Mas vamos entender o problema. |
| 54:15 | De dentro do projeto de qualquer um dos participantes, vamos rodar "docker compose up". |
| 54:20 | Lendo o arquivo docker-compose.yml, vai estar configurado várias aplicações, por exemplo, |
| 54:26 | nginx, postgres. De onde vem esses aplicativos? O Docker vai baixar a imagem do docker.io. |
| 54:32 | É isso que significa esses "pulls". Uma imagem não é um único arquivo, é um conjunto de arquivos binários, que chamamos |
| 54:38 | de overlays. Pense como se fossem commits de Git, mas commits binários. Esses overlays são unificados num único sistema de arquivos usando o Union File System |
| 54:49 | ou UFS. Se rodar o comando "mount" olha só aqui no fim, vários pontos de montagem usando overlays. |
| 54:56 | Rode o comando "docker image ls" e temos a listagem das imagens baixadas e geradas localmente. |
| 55:02 | A imagem do projeto em Node.js tá custando 220MB, o nginx tá ocupando quase 200MB, o |
| 55:09 | postgres mais de 400MB. Só esse projeto, pra rodar, precisou gastar quase 1 Giga aqui no meu HD. |
| 55:16 | Onde ficam esses arquivos de overlays? Dentro do diretório "/var/lib/docker/overlay2". |
| 55:21 | Podemos listar como sudo e temos vários diretórios com o SHA256 de cada camada da imagem. |
| 55:28 | Agora experimente testar docker compose de uns 50 projetos. Coisas como postgres e nginx, se forem da mesma versão, vão ser reusados, mas cada |
| 55:37 | imagem de aplicação custa na faixa de 200 MB pra cima. Então 50 vezes 200 vai dar quase 10 Giga. |
| 55:45 | De tempos em tempos é recomendado rodar um "docker system prune" pra apagar imagens que |
| 55:50 | não estão sendo usadas. Mas cuidado, se tiver containers, mesmo desligados, associados a uma imagem, ela não vai ser |
| 55:56 | apagada e vai ficar sobrando ocupando espaço a toa. Use o comando "docker container ls -a" pra listar e apague os que não precisa. |
| 56:05 | No caso de docker compose, quando acabar de testar o projeto, faça "docker compose down |
| 56:11 | rmi --all" pra limpar containers, imagens, volumes e network que não for usar mais. |
| 56:18 | Mas beleza, 10Gb pra 50 projetos parece pouca coisa. O problema é que eu não excluí o diretório do docker da solução de snapshot. |
| 56:27 | E o timeshift vai ficar criando snapshots periodicamente. Pense assim, eu fui baixando docker compose up, um monte de imagens, ao longo de mais |
| 56:36 | de uma semana. Todo dia o timeshift foi fazendo snapshots. Num dia eu fazia docker compose up. |
| 56:41 | No dia seguinte fazia docker compose down, achando que tava apagando tudo, mas na verdade |
| 56:47 | eles estavam sendo guardados nos snapshots. Depois eu resolvo testar o projeto de novo, faço um novo docker compose up. |
| 56:55 | Vai baixar 1 giga de imagens outra vez. Só que agora tem 1 giga das imagens antigas no snapshot de ontem, e mais 1 giga duplicado |
| 57:03 | no snapshot de hoje. BTRFS tem opção de deduplicação, mas ele não roda automaticamente, por padrão vai |
| 57:09 | duplicar tudo. Repita isso em diversos projetos ao longo de duas semanas. Quando terminei de testar tudo, escrevi o script do último video, gravei, editei, e |
| 57:19 | meu sistema começou a ficar estranho. Tudo foi ficando mais lento. No começo achei que era pau do Microsoft Edge, porque ele começou a crashear do nada. |
| 57:27 | Tentei reinstalar e nada. Ué, que diabos tá acontecendo com meu sistema. Eis que comandos de instalar pacotes como yay começaram a dar problema e aí caiu a |
| 57:36 | ficha. Fui checar quanto de espaço eu tinha com "df -h" e tava dizendo que tava com 100% ocupado |
| 57:43 | na partição primária. Puts, as malditas imagens de docker! Tentei dar um docker system prune. |
| 57:50 | Mas nada. Continua ocupando 100% do disco. Puts, os snapshots! As malditas imagens ficaram presas em snapshots do passado. |
| 57:58 | Abri o timeshift e apaguei todos os snapshots do passado. Voltei pra verificar o espaço livre, e nada, continuava ocupando. |
| 58:06 | Ué, que diabos. BTRFS é conservador, ele não vai apagar nada a menos que você realmente diga pra |
| 58:12 | apagar. Apagar snapshots não libera o espaço, pra isso precisa reclamar esse espaço de volta. |
| 58:18 | Deixa eu demonstrar. Podemos rodar o comando "btrfs filesystem df /". Uma das pequenas desvantagens de usar |
| 58:25 | btrfs é que ferramentas normais de Linux como o comando "df" propriamente dito, podem |
| 58:30 | informar valores incorretos. No nosso Ubuntu de exemplo, estamos usando um total de 25GB. |
| 58:37 | Isso é somando coisas como metadados do sistema de arquivos e tudo mais. Os bytes dos arquivos em si é esse "used", pouco mais de 23GB. |
| 58:44 | Ou seja, pelo menos 2GB são só metadados. Você precisa entender essa diferença. Tamanho de um arquivo não são só os bytes dentro desse arquivo. |
| 58:53 | O nome do arquivo ocupa espaço, a informação de data de criação também, atributos como |
| 58:58 | read only, localização no diretório também. Tudo ocupa espaço. E quanto mais avançado é o sistema de arquivos, mais espaço vai ocupar de metadados. |
| 59:06 | Enfim, se você não tem noção de quanto um sistema recém instalado ocupa, pode pensar |
| 59:12 | "ah, 25 giga, ok, faz sentido". Mas lembra que eu fiz alguns testes de snapshots pra vocês verem na prática? |
| 59:18 | E aquele Gimp, e aquele Discord? Eles desapareceram, mas os bytes deles continuam no snapshot antigo. |
| 59:25 | Vamos abrir o Timeshift e apagar todos os snapshots. Rodando de novo o comando "df" do btrfs, não mudou nada. |
| 59:33 | Continua indicando 25GB. Foi o que aconteceu na minha máquina quando acabou espaço. Mesmo apagando os snapshots, continuava indicando falta de espaço. |
| 59:41 | Precisa manualmente reclamar o espaço de volta, pra isso usamos o comando "btrfs filesystem |
| 59:47 | balance start /". Esse comando é bem demorado. Pode levar mais de hora numa máquina como a minha, mas pelo menos podemos continuar |
| 59:54 | usando o sistema em paralelo. Enfim, esperamos acabar e pronto. Vamos ver de novo o comando "df" e olha só, caiu de 25GB pra 10GB! |
| 1:00:04 | Tinha 15 GB sendo reservado pelo btrfs seja pros snapshots antigos e outras coisas dele. |
| 1:00:10 | E isso numa instalação nova, praticamente vazia, onde só instalamos 2 programas. |
| 1:00:15 | Agora imagina no meu caso, com dezenas de imagens de docker em snapshots. Ocupou meu HD inteiro de 1 terabyte. |
| 1:00:21 | Pois é, foi muito fácil encher 1 tera em poucos dias só de não ter tomado cuidado. |
| 1:00:26 | E como faz pra isso não acontecer? Tem que fazer "sudo chattr +C /var/lib/docker" ou também "sudo chattr +C /var/lib/libvirt" |
| 1:00:40 | no caso de estar usando Libvirt pra máquinas virtuais. E de novo, isso só vai se aplicar a arquivos novos. |
| 1:00:46 | O correto é primeiro limpar esses diretórios, daí mudar esse atributo. Acho que o certo não é aplicar esse atributo no diretório todo, algumas coisas talvez |
| 1:00:55 | você queira manter snapshots, como volumes de Docker. Fique só atento com isso. Essa dica é muito importante, porque se você não entender o funcionamento de snapshots |
| 1:01:04 | no btrfs e começar a usar como máquina de desenvolvimento, com certeza vai ter imagens |
| 1:01:09 | de docker, e isso com certeza vai destruir o espaço livre em poucas semanas. Você não vai saber que é, nenhum tutorial de como liberar espaço vai funcionar, você |
| 1:01:18 | não saberia que precisa rebalancear o sistema, e no final iria desistir e reinstalar tudo |
| 1:01:24 | do zero de novo. No momento em que estou escrevendo este script, no meu Manjaro, se rodar "df" ele me diz que |
| 1:01:30 | está usando 775 giga do meu NVME de 1TB de novo. |
| 1:01:36 | De arquivos mesmo são só 164 GB. Bora rodar "balance start" e ir tomar café. |
| 1:01:41 | Deixei 1 hora rodando e olha só, agora diz que está usando um total de só 166 giga, |
| 1:01:46 | que faz mais sentido. Ainda tinha uns snapshots velhos, provavelmente com imagens de docker velhas. |
| 1:01:52 | Logo que instalei o Timeshift, mostrei que tem como configurar pra guardar snapshots só de hoje, ou da semana, ou até de meses. |
| 1:02:00 | Se você tem um bom backup externo, isso não é necessário, só o do dia ou até o da semana deve ser suficiente. |
| 1:02:06 | Quando ver que está acabando o espaço, sabendo que tem tudo no backup externo, pode apagar todos os snapshots do timeshift, menos o último. |
| 1:02:14 | Daí rodar o rebalanceamento e pronto. Segurança é um trade off com performance e espaço. |
| 1:02:21 | Gastamos mais processamento e gastamos mais espaço, pra garantir paz de espírito, essa |
| 1:02:26 | é a filosofia. E felizmente chegamos num ponto onde o sistema operacional realmente nos ajuda a não perder |
| 1:02:32 | nada. A única coisa que nenhum software consegue fazer, é consertar um hardware barato porcaria. |
| 1:02:39 | Contanto que o hardware seja bom, é quase impossível perder dados hoje em dia. Tão importante quanto não perder dados importante é não perder horas ou dias tentando recuperar |
| 1:02:48 | seu sistema por causa de uma atualização bugada. Basta não ter preguiça, porque as ferramentas estão à nossa disposição e, como demonstrei, |
| 1:02:57 | são super fáceis de usar. O meu NAS Synology usa BTRFS também, mas em configuração de RAID. |
| 1:03:03 | Ele roda scrubbing a cada 6 meses e faz checagens de checksum pra garantir que nenhum erro físico |
| 1:03:10 | nos HDs me faça perder dados. Isso é só pra quem escolher ter um NAS: lembre-se de configurar pra rodar scrubbing, |
| 1:03:16 | é essencial, mas isso vem desligado por padrão. Não basta só instalar e achar que vai tudo funcionar por mágica. |
| 1:03:23 | Numa distro Linux como Ubuntu ou Manjaro, tenho o Timeshift. Mas no sistema operacional da Synology, ele tem o Snapshot Replication, que também me |
| 1:03:32 | permite navegar por snapshots antigos e recuperar coisas rapidamente. Olha só, se der qualquer problema, consigo ver como eram meus arquivos de 4 meses atrás. |
| 1:03:42 | E não sei se perceberam, mas esse sistema de snapshots me dá outra coisa de graça: proteção contra ransomware. |
| 1:03:49 | O que é um ransomware? É um malware que você instala ao abrir um powerpoint ou PDF qualquer que veio de um |
| 1:03:56 | email desconhecido e na verdade era um programa malicioso. É assim que YouTuber perde o canal deles: clicando em PDF falso que não era um PDF. |
| 1:04:05 | Parem com essa mania de dar duplo clique em tudo. O malware se instala silenciosamente na sua máquina e começa a encriptar seus arquivos. |
| 1:04:13 | Pode levar dias e você não vai perceber até precisar abrir um desses arquivos e notar que não abre mais. |
| 1:04:18 | No final vai aparecer uma janela parecida com essa dizendo algo como "Você se fodeu, |
| 1:04:24 | encriptamos todos os seus arquivos, podemos te dar a chave pra desencriptar mas você vai nos pagar X bitcoins pra isso. |
| 1:04:31 | Mande pra este endereço e daí te damos a chave". Isso realmente acontece, e não existe garantia nenhuma de receber essa tal chave, mesmo pagando. |
| 1:04:40 | Se isso acontecer com você, nunca pague, só aceite que você se fodeu. Reze pra ter seguido minhas recomendações. |
| 1:04:47 | Ah, mas eu tenho backup externo, então tô seguro, não? Não. Eu disse que leva dias pra esse processo conseguir encriptar todos os seus arquivos. |
| 1:04:55 | Durante esse período o que você fez? Plugou o HD externo e deixou fazendo backup dos arquivos encriptados por cima dos arquivos |
| 1:05:03 | bons do backup. Agora seu backup também foi contaminado, parte dele tá encriptado. |
| 1:05:09 | Perdeu playboy. É menos ruim se estiver usando Google Drive ou Dropbox ou OneDrive da vida, porque eles |
| 1:05:16 | tem suporte de snapshot. Mas eu não confiaria muito. Nunca precisei usar o deles então não fucei o suficiente, mas veja esta minha pasta do |
| 1:05:24 | Obsidian no Dropbox, que é onde edito meus scripts. Tem essa função de Rewind, que é voltar pra trás. |
| 1:05:30 | Escolho o dia que quero voltar, e ele me mostra as últimas atividades. Daqui posso escolher voltar pra algum ponto do passado, mais ou menos como commits também. |
| 1:05:39 | É meio um saco porque eu não vi uma interface que permite voltar meu Dropbox inteiro, acho que tem que ir diretório a diretório, não tenho certeza. |
| 1:05:46 | Enfim, não achei muito intuitivo de usar, mas em última instância, se não tiver mais pra onde recorrer, talvez isso ajude. |
| 1:05:52 | Se um ransomware encriptar todos os seus arquivos, mesmo no Dropbox vai estar tudo encriptado, |
| 1:05:59 | mas se tiver o Rewind de alguns dias pra trás, pode tentar recuperar. Isso é ok, mas eu não gosto de depender de um serviço que não tenho controle. |
| 1:06:06 | Por isso essa mesma pasta de Dropbox está em BTRFS no meu NAS, sendo sincronizado com |
| 1:06:12 | o aplicativo Cloud Sync da Synology. Eu uso os três, Google Drive, Microsoft OneDrive e Dropbox como backups secundários offsite |
| 1:06:20 | de alguns dados. E o meu NAS tem snapshots de BTRFS ativado pra até 4 meses pra trás. |
| 1:06:26 | Ou seja, isso nunca vai acontecer, mas se por ventura algum malware conseguir passar por mim e encriptar meus arquivos, eu só dou risada, volto alguns snapshots pra trás |
| 1:06:36 | e mando esse hackerzinho de merda tomar no cú. Não pego malware faz pelo menos uns 20 anos, e sempre tenho múltiplos backups de tudo, |
| 1:06:44 | tanto local quanto offsite, fora daqui. E os arquivos mais antigos que realmente não quero perder já queimei tudo em Blurays Millenium |
| 1:06:53 | Disk, feitos de material inorgânico que nunca oxidam. Todos guardados no meu cofre. |
| 1:06:58 | Vem tentar encriptar meus dados seus hackerzinhos de merda. |
| 1:07:05 | Segurança é uma questão de oportunidades. Quanto mais você pensar que nunca vai acontecer com você, maiores as chances de realmente |
| 1:07:12 | acontecer. Eu penso o contrário, sempre penso que estou 100% inseguro 100% do tempo e faço toda a |
| 1:07:18 | estratégia em cima disso. Segurança funciona em camadas. Se o plano A falhar, tem o plano B. |
| 1:07:24 | Se o plano B falhar tem o plano C. Isso se chama contingência. Quem não prepara contingências, sempre vai viver dando desculpas. |
| 1:07:32 | E eu odeio desculpas. Se desculpas funcionassem, não precisávamos de polícia. Por fim, um comentário que não coube antes no video é sobre como mantenho meu Manjaro. |
| 1:07:42 | Uma recomendação que dou é usar muito Docker pros seus projetos. Não precisa instalar coisas como MySQL, Postgres, Redis nem nada local. |
| 1:07:50 | Use tudo com Docker Compose. Primeiro porque isso garante que estamos rodando a versão certa de cada coisa pra cada projeto. |
| 1:07:56 | Segundo, porque é menos pacotes instalados na sua máquina que o Manjaro vai precisar |
| 1:08:01 | ficar atualizando. Quanto mais pacotes instalar, maiores as chances de algum upgrade quebrar alguma coisa. |
| 1:08:08 | Pelo mesmo motivo, tudo que é aplicativo como Discord, Zoom, o próprio browser Edge |
| 1:08:13 | que eu uso, Firefox, e muito mais, eu prefiro instalar via Flatpak. Flatpaks são containers, tipo um Docker light. |
| 1:08:21 | E dá pra usar coisas como FlatSeal pra garantir que nenhum aplicativo tem mais permissões |
| 1:08:26 | e acessos do que deveria. Podemos fechar um Discord pra não conseguir enxer nada dos seus arquivos, só deixar ele |
| 1:08:33 | ver a pasta de Downloads, por exemplo. Depois veja este video explicando sobre Flat Seal. |
| 1:08:38 | Eu sei que vai aparecer o povo do NixOS nos comentários, mas eu não pretendo usar e nem preciso. |
| 1:08:43 | Meu sistema é super estável. Raramente tenho problemas, porque eu instalo o mínimo possível. |
| 1:08:48 | Pra projetos tá tudo em Docker. Aplicativos tudo em Flatpak ou Snap. E coisas mais arriscadas, como games, ou meus experimentos com LLMs e IAs, estão tudo em |
| 1:08:58 | máquinas virtuais com QEMU/KVM como mostrei neste outro video. Fazendo tudo que mostrei neste video, não precisei reinstalar meu sistema nenhuma vez |
| 1:09:06 | e nunca perdi nem dados e nem tempo. Qualquer besteira que eu faço, o Timeshift me salva, qualquer besteira maior e os backups |
| 1:09:13 | no meu NAS me salvam. Recapitulando: sempre, sempre, inicie um repositório git local no seu projeto, independente de |
| 1:09:21 | ter no GitHub ou não. Sempre, sempre, tenha no mínimo um HD externo USB da vida, um pouco maior do que o HD do |
| 1:09:28 | seu PC, e configure o app de Backup que já vem no seu sistema operacional. Não precisa de nada super fancy nem nada. |
| 1:09:36 | Só habilita. Qualquer backup é melhor que nenhum backup. Finalmente, se quiser aprender mais de Linux e usar o que há de mais novo, instale Manjaro |
| 1:09:45 | com suporte a BTRFS e configure o Timeshift como eu expliquei. Isso vai tornar você quase invencível, é praticamente um super poder. |
| 1:09:53 | Se ficaram com dúvidas, mandem nos comentários abaixo, se curtiram o video deixem um joinha, |
| 1:09:58 | assinem o canal e compartilhem o video com seus amigos. A gente se vê, até mais! |
