# Usando Git Direito | Limpando seus Commits!

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=6OokP-NE49k
- **Duração:** 47:20
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:18 | Olá pessoal, Fabio Akita Fiquei bem contente que vocês gostaram do vídeo de Git da semana passada. Como eu tinha dito o objetivo não era fazer um tutorial |
| 0:29 | e sim dar contexto de como as coisas começaram e porque usamos Git hoje em dia pra tudo. Porém, |
| 0:35 | vocês devem ter notado que o vídeo ficou bem longo passando de 1h, então obviamente eu não |
| 0:40 | consegui dizer tudo que eu queria. Mas como parece que vocês gostaram do assunto, resolvi fazer este logo na sequência pra encerrar. Neste episódio eu vou de fato |
| 0:48 | fazer um formato mini tutorial no começo. Só que não vai ser os comandos básicos. Como eu |
| 0:54 | já disse, a essa altura você já devia ter ido no site oficial do Git e lido a Documentação Oficial que faz um excelente trabalho de explicar não só o básico, mas tem bastante |
| 1:03 | coisa avançada pra estudar também. Na segunda metade - que começa neste tempo aqui |
| 1:09 | embaixo se você quiser pular direto - eu quero dar mais contexto. Em particular rapidamente |
| 1:14 | explicar porque apesar do desenvolvimento de um dos projetos open source mais importantes de todos |
| 1:20 | os tempos, a kernel do Linux, ter sido a origem do Git, ninguém por lá tem muita intenção de migrar |
| 1:26 | pra plataformas como GitHub. E também dar meus dois centavos sobre um assunto que talvez você |
| 1:32 | tenha ouvido falar, chamado monorepos. (...) |
| 1:42 | Pra começar eu quero explicar algumas coisas que eu acho que é importante qualquer desenvolvedor |
| 1:47 | saber hoje em dia. A principal função de um repositório Git é gravar um registro preciso |
| 1:53 | da história. Em qualquer momento você pode voltar no tempo e ver como seu código era exatamente uma |
| 2:00 | hora atrás, ou um dia atrás, ou um ano atrás. E ele consegue fazer isso garantindo que os dados |
| 2:06 | colocados lá estão íntegros, ou seja, você nunca vai puxar um dado corrompido sem o Git te avisar. |
| 2:12 | E pra guardar tanta história, ao mesmo tempo ele faz o possível pra economizar espaço. Apesar do Git sozinho fazer bastante coisa sem você saber, ainda assim tem maneiras de |
| 2:22 | você estragar seu repositório, então o tema do mini tutorial dessa primeira metade do vídeo |
| 2:27 | é um pouco sobre como zelar um pouco mais pelo seu repositório. E eu acho que a primeira coisa que você deveria tentar fazer é: não escreve porcaria |
| 2:36 | nas mensagens de commit. Tá ligado, mensagens do tipo "correção" ou "fixing" ou "hotfix" ou |
| 2:44 | "atualizando" ou qualquer lixo assim. Sendo mais exato, você pode fazer mensagens porcaria |
| 2:49 | de commit. Mas no seu próprio branch. Antes de mergear seu trabalho na master, por favor, |
| 2:55 | escreve que nem gente. Vai, o tico e o teco não vão reclamar tanto assim. Mas tudo bem, eu entendo, você começou a aprender Git semana passada, só sabe os primeiros comandos |
| 3:05 | que todos os dez mil tutoriais por aí já repetiram milhares de vezes. Digamos que você fez um |
| 3:10 | git commit -m e escreveu uma palavra errada. Mas agora já era, tá comitado. Já foi, deixa pra lá. |
| 3:16 | NÃO, sempre conserte as coisas no minuto que notou o erro. E corrigir uma mensagem de commit é super |
| 3:23 | fácil, nenhum inconveniente. == tutorial - begin Vamos lá, primeiro vamos adicionar alguns arquivos no stage. |
| 3:29 | Agora vamos fazer git commit com um erro na mensagem. Puts e agora? Se eu puxar o git log, olha que feio. |
| 3:37 | Mas não tem problema, vamos fazer git commit --amend com a mensagem certa e |
| 3:43 | boom, olha só que simples. Completamente indolor, e não te custou 2 segundos. |
| 3:49 | Mas vamos mudar o exemplo. Digamos que você tá programando, feliz e contente. Só pra |
| 3:55 | simplificar vou só criar um arquivo vazio aqui e adicionar um commit. Só que aí você lembra, puts, esqueci que precisava fazer outra coisa. Então vou criar outro arquivo |
| 4:04 | aqui e comitar com a feliz mensagem de "fixing". Mas como sempre, nunca acaba quando você pensa, |
| 4:10 | daí dá algum outro pau e você lembra que precisava adicionar outro arquivo, então vamos fazer isso e comitar com a criativa mensagem de "fixing" de novo. |
| 4:19 | E você pode continuar fazendo isso e de repente você achava que ia terminar meia dúzia de |
| 4:25 | commits atrás e em vez disso ficou com um monte de commitzinhos com mensagens toscas de fixing. |
| 4:30 | == tutorial - end Tudo bem, não tem nenhum problema fazer isso. Porque se você está desenvolvendo no seu branch e ainda não deu push pro servidor, |
| 4:38 | você ainda tem uma chance de não passar vergonha. Tem duas formas de fazer isso. Uma delas é a |
| 4:45 | forma que eu normalmente faço porque eu sou preguiçoso pra relembrar muitos comandos. O git tem um comando que faz diversas coisas, esse é o reset. O último commit que você tá trabalhando |
| 4:56 | normalmente é etiquetado como HEAD ou literalmente cabeça. Eu já não falei que o Git é representado |
| 5:02 | por um grafo? Mas no caso mais simples você tá lidando com uma simples lista ligada de commits |
| 5:08 | e o último se chama HEAD. A importância disso é que podemos navegar por essa lista ligada fazendo HEAD (til) 3 pra apontar 3 commits pra trás por exemplo. |
| 5:17 | O comando git reset tem duas opções que eu uso mais. --hard e --reset. O --hard normalmente eu |
| 5:24 | uso quando baguncei o código e quero simplesmente apagar tudo que eu fiz e voltar como era antes de eu mexer. É uma opção de tipo “undo” sem recuperação, então cuidado. Por outro lado eu |
| 5:35 | posso fazer --soft que vai remover os commits da tal lista ligada mas não vai jogar fora as |
| 5:40 | modificações desses commits. === tutorial - ini É isso que eu quero, eu quero apagar os commits fixing mas não quero perder o que eu fiz. Então |
| 5:48 | vamos fazer isso. git reset --soft HEAD~2 que foram os dois commits de fixing. |
| 5:55 | Pronto, matei os commits e agora posso fazer um novo git commit com uma mensagem |
| 6:00 | decente. Se eu errar a mensagem, posso fazer --amend como falei antes. Mas, esse não é o jeito considerado oficial. Tem outro jeito. Então vamos refazer os commits |
| 6:10 | feios de fixing de novo ... (tempo) ... pronto. Agora podemos usar git rebase -i que significa |
| 6:17 | interativo porque o git vai ficar me perguntando o que ele quer que eu faça. Se eu passar git rebase -i HEAD~2 ele vai abrir a seguinte tela. |
| 6:25 | Olha que fácil, ele lista os últimos commits, normalmente eu quero manter o primeiro como pick |
| 6:31 | e os seguintes eu posso mudar de pick pra squash. Squash é o que você pensou mesmo, |
| 6:37 | amassar tudo junto. Não precisa ser todos, eu posso inclusive pular um no meio se não fizer sentido mesclar tudo junto. Embaixo ele te ajuda ainda dizendo quais opções |
| 6:47 | você tem. Eu recomendo brincar com todas as opções num repositório local seu. |
| 6:52 | Vamos mudar tudo pra squash. Esse editor que ele abriu pra mim é o vim que é o que eu prefiro mas |
| 6:59 | você pode mudar qual editor quer usar com a variável de ambiente EDITOR ou usando o |
| 7:04 | comando git config. De novo, veja a documentação oficial do git config pra saber mais. Mas enfim, |
| 7:10 | quando eu gravar e sair, ele vai abrir o editor de novo, mostrando embaixo o que esse novo commit |
| 7:16 | vai conter e me pedindo pra eu editar uma mensagem decente. Então vamos tirar a mensagem padrão que |
| 7:22 | ele montou e digitar uma mensagem decente. Pronto, agora se dermos um git log, veja que |
| 7:27 | bonito que ficou. === tutorial - end Pro próximo exemplo, uma coisa muito comum é você começar a trabalhar numa coisa, |
| 7:33 | aí você dá uma divagada, resolve codar outra coisa não relacionada, só que agora você ficou com duas |
| 7:39 | coisas não relacionadas que precisa comitar. Vamos pro caso mais simples. Onde você criou arquivos |
| 7:45 | relacionados a uma coisa e criou outros arquivos que são de outra coisa diferente. A maioria das pessoas faz um git add . (ponto) e comita tudo junto. Tá errado! Commits devem ter |
| 7:57 | só uma "coisa" de cada vez. Um commit pra uma pequena funcionalidade. Um commit pra correção |
| 8:02 | de bugs. Um commit pra documentação. Meio difícil definir o que é essa "coisa" mas usa o bom senso, |
| 8:09 | pra variar. Não faz sentido você misturar um arquivo CSS de uma tela com uma linha nova de |
| 8:14 | README descrevendo infra, por exemplo. === tutorial - ini Vamos criar uns arquivos css qualquer. E vamos criar um arquivo README por |
| 8:21 | exemplo. E vamos criar mais algumas coisa só pra ficar mais realista. A coisa mais simples é dar git add e o nome do css e fazer o commit só do css. |
| 8:31 | Depois fazer git add separado do readme e um commit só pra ele. Quando você tem poucos arquivos esse é o jeito mais simples. Mas normalmente você se empolga, |
| 8:40 | ou tá usando algum gerador de código de algum framework e fica com um tanto de arquivo. Eu sei, é um saco digitar git add |
| 8:48 | pra caaaada arquivo pra organizar o commit. Digamos que você começou fazendo a besteira de fazer git add . (ponto) agora todos os arquivos estão misturados no stage e se |
| 8:57 | você der git commit vai tudo pro mesmo commit. Ainda tem como consertar. Se for só um arquivo |
| 9:03 | que você quer tirar do stage basta fazer git reset -- (traço traço duas vezes) e o nome do arquivo. Pronto, se der git status, veja que ele saiu do stage. |
| 9:13 | Mas como eu falei, faz de conta que são uma dúzia de arquivos e você deu git add . de tudo. |
| 9:20 | Novamente, a preguiça reina e você tá quase ligando o foda-se e fazendo commit de tudo. |
| 9:26 | Calma! Ainda dá pra consertar fácil. Digite git add -i que é de novo opção interativa. |
| 9:32 | O git vai te abrir esse menuzinho e você pode usar a opção 3 que é revert. Ele vai listar os arquivos |
| 9:37 | que estão no stage e você pode só digitar o número dos arquivos que não quer comitar agora. No final dá enter pra voltar pro menu anterior. |
| 9:44 | Digamos que você olha e fala, puuuts, tinha um arquivo que eu tirei que era pra estar lá mesmo |
| 9:49 | na real. Então você tem a opção 2 de update. É o oposto, agora você digita o número do arquivo |
| 9:56 | que quer colocar no stage. Dá enter no final, e no menu principal digita q pra dar quit e sair. Pronto. Vamos dar git status e olha só, |
| 10:04 | é como se tivéssemos dado git add manualmente arquivo por arquivo. Agora sim podemos fazer o commit correto e fazer git add -i de novo pra ir adicionando arquivos pro |
| 10:14 | próximo commit. Super simples. Mas, como eu falei, esse é o caso simples. E se |
| 10:20 | no mesmo arquivo temos modificações que um é pra ir num commit e outro |
| 10:25 | é pra ir só em outro commit? Vamos fazer um arquivo README qualquer com um conteúdo |
| 10:30 | aleatório pra servir de base. (...) Pronto. Agora vamos fazer 3 modificações. Agora eu queria que a primeira modificação e a terceira fossem um commit só. E a segunda |
| 10:41 | modificação fosse um commit separado. Vamos digitar git diff pra ver o patch completo. |
| 10:46 | Olha só, se eu der git add e comitar vai tudo no mesmo commit. E agora? Não se preocupem, pra isso tem git add -p. A idéia é que o git vai perguntar |
| 10:56 | um hunk de modificação de cada vez. Veja só, como as modificações estão próximas |
| 11:01 | ele me pergunta se quer adicionar elas juntas pro stage. Se eu quisesse bastaria digitar y de yes, |
| 11:08 | ou se eu quiser pular eu digito n pra não e esse tanto de opção aqui embaixo se eu der enter ou interrogação, ele vai explicar todas as opções que eu tenho. |
| 11:17 | Vale a pena explorar cada uma delas depois, num repositório local. Mas no meu caso eu não quero adicionar tudo junto, quero dividir. Pra isso eu digito s de split, e veja só ele dividiu o hunk |
| 11:27 | mais uma vez e me deu só a primeira parte! E é isso que eu quero. Então vamos dar yes. O próximo hunk é o que eu quero separado, então digito “no” pra pular, e a última eu também quero |
| 11:36 | no mesmo commit, então dou yes. Se eu quisesse parar no meio, só digitar q de quit. |
| 11:42 | Se eu der git status vemos que parte do arquivo README está no stage e parte não está. |
| 11:47 | Se eu der git diff --staged pra ver só o que vai no próximo commit, veja que está só o hunk que eu escolhi. Vamos criar o commit. Pronto, e agora só sobrou |
| 11:57 | a segunda modificação que eu posso adicionar no stage e criar o segundo commit. (...) Entenderam? |
| 12:03 | Essa parte pode ser meio complicada da primeira vez então recomendo assistir de novo. Mas resumindo, eu tinha modificações num mesmo arquivo que eu queria separar em |
| 12:13 | commits diferentes. Pra isso usamos git add -p. Aliás esse p é de patch. |
| 12:19 | == tutorial - end Trabalhar com o git tem sempre 3 estágios. O primeiro estágio acontece onde chamamos de working tree que é o diretório normal de trabalho |
| 12:27 | com seus arquivos pra você editar e tudo mais. Pra criar um commit você precisa ir estacionando as |
| 12:33 | modificações num lugar intermediário, esse lugar chamamos de stage. O Git não rastreia arquivos, |
| 12:39 | ele rastreia conteúdo. Hunks e patches, lembra que eu falei no episódio passado? Podemos adicionar |
| 12:46 | todas as modificações de um ou mais arquivos com os comandos git add ou git add interativo |
| 12:51 | -i ou adicionar um hunk de cada arquivo de cada vez usando git add -p. Aliás, como o Git rastreia conteúdo e não diretórios, por isso que diretórios vazios |
| 13:01 | nunca entram num repositório git e por isso muitos frameworks reservam diretórios vazios colocando |
| 13:08 | um arquivo vazio escondido como .gitkeep só pro diretório ter alguma coisa e com isso conseguir |
| 13:14 | adicionar no Git. Uma vez que eu tenho tudo que eu quero no stage, posso empacotar com o comando git |
| 13:20 | commit, onde você cadastra uma mensagem e o git vai terminar adicionando o resto dos metadados |
| 13:25 | pra grudar seu commit como a nova cabeça do grafo, com a etiqueta de HEAD. Mas mesmo depois que você já comitou, ainda dá pra voltar atrás. Você pode |
| 13:34 | fazer git reset tanto hard pra apagar tudo sem dó nem piedade. Ou git reset soft pra tirar os |
| 13:42 | commits do grafo e jogar as modificações de volta pro stage. Vamos fazer isso pra você ver. |
| 13:47 | === tutorial - ini Digamos que temos alguns commits. Vamos fazer git reset --soft HEAD~2 pra apagar 2 commits. Essa sintaxe de HEAD e tilzinho pode ser |
| 13:57 | mais complicado se você tiver merges no meio do caminho, então recomendo pesquisar e estudar como |
| 14:03 | isso funciona na documentação oficial, mas pra maioria dos casos serve associar que esse número |
| 14:09 | é o número de commits pra trás. === tutorial - end Por exemplo, se você quiser reverter um commit de merge que aponta pra outros 10 commits, |
| 14:16 | ele é virar um galho paralelo no histórico. Mas basta usar HEAD~1 que ele vai matar só o commit |
| 14:22 | do merge que é quem liga os outros commits e você some com os 10. Isso não é tão intuitivo então é |
| 14:28 | melhor você praticar. === tutorial - ini De qualquer forma, demos reset soft. Se dermos git log veja que os commits |
| 14:35 | desapareceram, mas você não perdeu nada. Se der git status veja que está tudo no stage, |
| 14:41 | como se você tivesse acabado de dar git add. Nesse ponto, como já fizemos antes, |
| 14:46 | podemos dar git commit e empacotar tudo num commit. Mas e se alguns desses arquivos eu não quero no próximo commit? Pra isso podemos fazer git reset -- (traço |
| 14:55 | traço) e o nome do arquivo. Ou só git reset -- e ele vai tirar tudo do stage. Olha no git status |
| 15:02 | como mudou e eles saíram do stage. A partir desse ponto podemos fazer git add -i ou git |
| 15:07 | add -p como já expliquei antes. Mas digamos que tô estressado e quero só marretar tudo pro lixo. Então eu vou fazer git reset --hard porque eu sei que só tem lixo aqui |
| 15:18 | mesmo ... e puta que pariu! tinha um arquivo que eu não podia perder!! e agora??? Calma!! Se você tiver o SHA-1 do último commit tá tudo certo. E por sorte demos um git log aqui |
| 15:28 | em cima, então temos o SHA-1 e podemos fazer o equivalente a um undelete. Mesmo se eu não tivesse |
| 15:34 | ainda ia dar, só ia dar um pouquinho mais de trabalho pra achar o commit certo. Como eu disse antes o Git é um banco de dados de grafos. Quando demos o reset só mudamos a etiqueta, ou referência |
| 15:45 | do branch master dois commits pra trás. Os commits em si não foram apagados, eles foram só marcados |
| 15:51 | pra serem apagados. Aliás, pro tipo: sempre evite apagar dados, melhor sempre marcar como |
| 15:57 | apagado. De temos em tempos o Git roda um garbage collector, que você pode executar manualmente com |
| 16:02 | o comando git gc, que seria o equivalente a esvaziar a lixeira no Windows. Mas não queremos rodar o GC agora. Vamos primeiro tirar nossos commits da lixeira. Pra isso podemos |
| 16:13 | rodar o comando git reflog -b (pra criar um novo branch) teste xxxxx (com o SHA-1). Aproveitando, |
| 16:19 | note que normalmente usamos só um pedaço do começo do SHA-1 em vez do SHA-1 inteiro porque |
| 16:25 | como raramente eles colidem, só a versão curta é suficiente pra achar o commit. E pronto! Se dermos git log veja que o master continua apontando 2 commits pra trás, |
| 16:36 | mas acabamos de anexar a etiqueta de teste pro commit antigo. Se eu quiser recuperar de volta pro master, basta dar git checkout master pra voltar pro master, |
| 16:46 | e como estamos trabalhando só localmente sem dar push ou pull de servidor, podemos fazer um git rebase teste. E se dermos git log de novo veja que o |
| 16:55 | branch master está apontando pro mesmo commit que o branch teste. Se listarmos os arquivos, |
| 17:01 | pronto, tá tudo recuperado! Agora podemos respirar fundo e reescrever esses commits |
| 17:06 | sem perder algo importante. Ah sim, e pode apagar esse branch temporário com git branch |
| 17:12 | -d teste. Pronto, tudo limpo. === tutorial - end Tudo que eu mostrei até agora são comandos que você pode e deve usar no seu dia a dia |
| 17:20 | pra manter o histórico dos seus commits limpos. Muita gente, especialmente iniciantes e amadores, |
| 17:26 | ligam o foda-se pra isso. Eu mesmo sou culpado de já ter dado push de muito commit ruim então não posso julgar tanto. O correto é deixar limpo. Repositório limpo, |
| 17:37 | código limpo, tudo isso faz parte de você se tornar um profissional. É que nem sua casa ou |
| 17:42 | seu escritório. Você pode jogar lixo no chão. Pode deixar as coisas sujas. Isso diz muita coisa sobre |
| 17:47 | você. Se for um espaço compartilhado, demonstra sua falta de respeito com as pessoas ao redor. |
| 17:53 | E nesse caso você também não pode reclamar se achar uma casca de banana em cima do seu teclado. Se você não se importa com os outros, porque os outros tem que se importar com você? E se você é um tech lead ou seja lá que posição que é responsável por mergear pull requests dos |
| 18:00 | outros, é parte do seu trabalho rejeitar pull requests se eles estiverem sujos e ruim. Senão |
| 18:07 | pra que você serve? Rejeite sumariamente pull requests que estão quebrados, incompletos, não tem |
| 18:13 | testes, estão bagunçados com coisas que não deviam estar misturados, com commits sem mensagens decentes e descritivas. Tudo isso faz parte do protocolo de boa vizinhança. |
| 18:23 | "Ah mas estamos com pressa, os prazos tão apertados, foda-se se tá um pouco bagunçado ou um |
| 18:30 | pouco quebrado, depois a gente arruma". Não, depois que alguma coisa é mergeada na master, |
| 18:36 | ninguém nunca mais vai arrumar. Faz direito da primeira vez. Sujeira se acumula, e ninguém nunca |
| 18:43 | vai limpar. O que vai acontecer, como sempre acontece, é que lá na frente essa sujeira vai |
| 18:48 | aparecer. E quando a produtividade cair, número de bugs aumentar, mais pessoas novas entrarem na |
| 18:53 | equipe com todo mundo copiando os maus maus hábitos, é tarde demais. É muito difícil, |
| 18:59 | se não impossível, mudar maus hábitos depois. Então enforce bons hábitos no começo. |
| 19:04 | Dez anos atrás tinha um excelente programador na minha equipe. E ele gostava de mentorar os outros |
| 19:10 | desenvolvedores. Eu não tenho certeza mas eu acho que todo mundo podia dar push direto na master, |
| 19:16 | ainda não era tão comum usar Pull Requests como fluxo de trabalho. Ele basicamente apagava o |
| 19:22 | commit da master se o novo código estivesse sem testes. A regra dele era muito simples |
| 19:27 | "código sem teste não tem lugar no repositório". E ele tinha razão. No começo todo mundo reclama, |
| 19:33 | depois sabe o que acontece? Todo o código está com cobertura de teste. E a produtividade não cai. |
| 19:38 | Mais do que isso, ela aumenta, porque no futuro não acumulou débito técnico. Débito técnico daria um outro episódio inteiro, mas resumindo é qualquer coisa |
| 19:48 | que você sabe que devia fazer, mas acha que vai te deixar mais devagar, então você escolhe pular. Você cria uma dívida. Só que como o nome diz, uma hora você tem que pagar |
| 19:59 | essa dívida. E quanto mais demora mais os juros vão aumentando. Vai ficando cada vez mais caro, |
| 20:05 | mais e mais rápido. É uma escolha, e às vezes realmente compensa assumir uma pequena dívida, |
| 20:10 | basta ter consciência de pagar os juros sem reclamar depois. Mudando de assunto, falando em projetos dos outros, vai uma outra dica. Tô parecendo |
| 20:20 | vitrola quebrada, mas na documentação no site oficial do Git tem um capítulo sobre migração |
| 20:26 | de projetos pra Git. Eu mencionei que mesmo se você estiver num projeto subversion, ainda |
| 20:32 | assim pode usar Git. Pra fazer isso primeiro você vai instalar o suporte a subversion do Git. |
| 20:38 | === tutorial - ini Vamos voltar pro Ubuntu e instalar o pacote apt install git-svn. Todas as distros tem algum pacote similar. Feito isso vamos |
| 20:47 | clonar o projeto do próprio subversion, que obviamente está em subversion. git svn clone .... Isso vai demorar um tempão, |
| 20:56 | então vai almoçar. Quando voltar você vai ter um clone do repositório em Git. A partir daqui, |
| 21:01 | você pode simplesmente pode dar git remote pra adicionar um repositório vazio do Github |
| 21:06 | por exemplo, e dar push pra lá. E a partir desse ponto, pode jogar fora o repositório subversion. |
| 21:12 | Todo o histórico está salvo. === tutorial - end Mas, digamos que você não possa fazer isso porque sei lá porque motivo a empresa exige que precisa |
| 21:20 | comitar no servidor de subversion mesmo. Não tem problema. Localmente tudo que eu expliquei no |
| 21:25 | tutorial até agora vai funcionar igualzinho. É um repositório Git normal. De tempos em tempos você |
| 21:32 | pode fazer git svn rebase pra puxar os últimos commits do subversion. E quando você tiver |
| 21:37 | terminado basta agora fazer um git svn dcommit (observe o d antes da palavra commit). Me repetindo de novo, diferente de um commit de Git que é só local commit de subversion é pra |
| 21:47 | mandar pro servidor. Aqui o git svn vai pegar os commits que você trabalhou localmente no Git |
| 21:52 | e criar commits de subversion. A graça disso é que outros desenvolvedores de |
| 21:58 | subversion, quando derem svn update, vão baixar seus commits como se você nunca tivesse usado |
| 22:04 | Git. A diferença é que você vai trabalhar muito melhor que todo mundo, porque você pode fazer branches locais pra experimentar coisas e trabalhar aos poucos fazendo commits pequenos, |
| 22:14 | e só no final pode fazer squash dos seus branchs e criar commits limpos pra mandar de volta pro |
| 22:19 | servidor legado. Era o que eu fazia em 2007. E digamos que em vez de subversion você tá usando |
| 22:25 | Mercurial, Bazaar, Perforce ou mesmo o antigo TFS. Tem opções similares pra todos eles. Olhem |
| 22:32 | a documentação no site oficial. Uma última dica importante que muitos iniciantes |
| 22:38 | fazem errado. Digamos que você é um desenvolvedor front-end. Digamos que você receba arquivos de |
| 22:43 | Photoshop dos designers. E como é de costume; vira e mexe os designers ficam mandando novas versões |
| 22:49 | dos photoshops. Uma hora vocês perdem noção de qual era a versão mais nova. E ninguém chega num |
| 22:55 | consenso de qual era a versão do design certo pra mexer. Pra facilitar, alguém tem a grande |
| 23:01 | idéia de criar uma pasta chamada photoshop na raíz do projeto e vocês ensinam o designer a usar Git |
| 23:08 | também. Daí sempre que tiver versões novas, todo mundo recebe no próximo git pull e ninguém mais |
| 23:13 | se confunde. Ótima idéia …. Só que isso tá errado se você não souber o que é LFS. Lembrem do que eu ensinei no episódio anterior. Ferramentas como diff, patch e o próprio |
| 23:24 | Git tem algoritmos muito bons pra lidar com hunks e patches de texto. Porém, photoshop é um arquivo |
| 23:31 | binário. Não existe nenhuma forma eficiente de se fazer patches de arquivos binários. Se você |
| 23:37 | tentar mergear binários sem saber a estrutura interna delas, a chance de dar problemas é praticamente garantido. Portanto o Git não faz deltas de binários, ele grava o |
| 23:46 | binário inteiro. Aliás, ele grava o arquivo inteiro pra cada modificação. Pra entender o problema pensa assim. Digamos que o photoshop original tinha 200 Mb. Você |
| 23:56 | adiciona ele no Git. O designer vai mexendo, e todo dia ele cria um novo commit. E ele faz |
| 24:02 | isso por 5 dias só. Em cada commit vai os 200Mb inteiro de cada versão, porque como eu disse, |
| 24:08 | não tem como tirar delta de binário. Ao final de 5 dias seu repositório tem 5 vezes 200 Mb ou 1 |
| 24:14 | Gb. Agora todo novo desenvolvedor que fizer um git clone vai ter que puxar 1 Gb, sendo |
| 24:19 | que o código mesmo, no mesmo repositório, são poucos megas. E normalmente você só precisaria |
| 24:25 | do último photoshop do designer. Se for arquivos pequenos como jpgs ou pngs |
| 24:30 | tudo bem, mas qualquer coisa muito maior que isso precisa ser tratado diferente. Isso é uma |
| 24:36 | das arestas que ainda não é exatamente a melhor solução, mas pra casos assim, onde você precisa armazenar grandes binários, como photoshops, videos, |
| 24:45 | audio, instaladores, você tem que lembrar de fazer da seguinte maneira: === tutorial - ini Em Ubuntu, primeiro você |
| 24:50 | precisa instalar apt install git-lfs. Pronto, agora no diretório do projeto você inicializa |
| 24:57 | com git lfs install. Finalmente você tem que dizer pro Git que tipos de arquivos você quer |
| 25:03 | jogar no LFS. Pra isso você faz git lfs track "*.psd" por exemplo. Isso vai criar um arquivo |
| 25:09 | chamado .gitattributes com essa condição. Agora você pode começar a dar git add de arquivos |
| 25:16 | com extensão .psd. Vamos adicionar alguns psds, dar git add, criar um commit e até aqui, tudo |
| 25:24 | igualzinho com era antes. Do seu ponto de vista de desenvolvedor, não parece que mudou nada. === tutorial - end O que está acontecendo agora é que no commit não |
| 25:32 | vai mais anexado o arquivo binário inteiro. Em vez de jogar o binário no diretório .git/objects, que |
| 25:38 | eu ensinei no episódio anterior, ele vai jogar em outro diretório, o .git/lfs. E no commit em si, em |
| 25:45 | vez de ir armazenado o binário inteiro, vai só um texto indicando onde tá o arquivo. Pense como se |
| 25:50 | fosse um link simbólico num Linux. Assim o commit fica super leve, sem o bináriozão pesando nele. A |
| 25:57 | vantagem disso é que agora quando você fizer um novo git clone do zero, não vai mais vir todo o 1 GB com todas as versões de photoshop que o designer comitou. Vai vir só o último e você pode |
| 26:07 | pedir versões antigas só se precisar. A desvantagem disso é que instalar e configurar o |
| 26:13 | suporte de LFS num servidor de Git seu pode ser um pouco chatinho de gerenciar. Se você estiver |
| 26:19 | usando GitHub ou GitLab ou outra plataforma web, esse trabalho deve ser mais transparente. |
| 26:24 | Na dúvida, sempre use git lfs se tiver arquivos binários grandes no seu projeto. |
| 26:30 | Porém, no caso do seu projeto ser basicamente só binários grandes e pouco ou nenhum texto, |
| 26:35 | eu diria que o Git não é a melhor solução. Não só git, nenhum versionador feito pra código. |
| 26:41 | Imagina uma agência de design ou uma produtora de vídeo. Ninguém usa Git num lugar desses. Se você |
| 26:47 | precisa lidar com binário, o fluxo de trabalho é completamente diferente. Não tem como dois |
| 26:52 | designers trabalharem ao mesmo tempo, em máquinas separadas, no mesmo arquivo de Illustrator. Não |
| 26:59 | existe pull request de edição de vídeo de Premiere Pro. Não tem como fazer patches num arquivo de |
| 27:04 | áudio de LogicPro. Trabalho de mídia, pela própria natureza, sempre vai ser um fluxo em cascata, |
| 27:11 | onde a próxima etapa só pode ser iniciada quando a anterior já terminou. E sempre que precisa voltar |
| 27:17 | passos é uma dor de cabeça mesmo. Por isso mesmo, não é incomum ver servidores |
| 27:22 | de arquivos em rede de alta velocidade, rede de 10 gigabit, com servidores mais parrudos, |
| 27:28 | com gigabytes de RAM pra fazer buffer, e soluções bem caras como os famosos Jellyfish da LumaForge, |
| 27:35 | cujos modelos mais baratos como o de 32TB móvel, começa em mais de 9 mil dólares. E 32TB é bem pouco espaço na real. O modelo servidor, que começa com 80TB não |
| 27:45 | sai por menos de 30 mil dólares. Tá vendo porque um Mac Pro de 10 mil dólares não é caro pra lugares como esses? Voltando ao assunto. Pra poucos binários como |
| 27:54 | designs de photoshop, video em mp4 de tutorial do seu produto, manuais em PDF e coisas assim, |
| 28:00 | use o git lfs. Mas, digamos que você não sabia disso, e já tem um repositório com um monte de |
| 28:06 | binário, e já tá sentindo que tá lento, todo mundo que faz git clone fica esperando um tempão baixar tudo pela internet. E na cidade que você mora sequer tem suporte a internet |
| 28:15 | de fibra com mais banda. E agora? O problema de um repositório de versionamento é |
| 28:21 | que por princípio, o binário agora está anexado num commit e esse binário é usado também pra |
| 28:27 | gerar o SHA-1 que identifica o commit. Lembra? Se eu tirar o binário vai necessariamente mudar |
| 28:33 | o SHA-1. Qual o problema disso? Lembra que o Git é um DAG, ou seja um grafo, onde os nós |
| 28:39 | são cada commit apontando pro commit anterior? E como um commit aponta pro anterior? Fácil, |
| 28:44 | armazenando nele o SHA-1 desse commit anterior. Ou seja, se o SHA-1 do commit anterior mudar, |
| 28:50 | o SHA-1 de Todos os outros commits que apontam pra ele mudam também. Portanto, sim, é possível arrancar fora um arquivo do Git, mas pra fazer isso precisamos literalmente |
| 29:00 | reescrever toda a história até o ponto onde o binário foi adicionado pela primeira vez. |
| 29:06 | Se fizer isso, todo mundo que trabalhava no repositório antigo vai precisar dar um git |
| 29:11 | clone novo tudo outra vez. Se você tá no ponto onde seu repositório tem gigas de tamanho e tá |
| 29:16 | ficando cada vez pior, só adicionar o git lfs não vai adiantar porque o lfs vai ficar |
| 29:22 | ativo só pra novos commits. Mas os antigos vão continuar no repositório. Entendido isso, vamos aos finalmentes. A situação tá feia, a equipe concorda que vale a pena todo |
| 29:32 | mundo parar de trabalhar um pouco pra limpar o repositório. Lembre de avisar todo mundo pra ver se deram push de tudo. Uma solução é usar o recurso de filter-branch do Git mas |
| 29:43 | ele é muito lento. Não, em vez disso existe uma ferramenta feita em java chamada BFG. Eu |
| 29:49 | gosto dele só pelo nome. Eu não sei se foi essa a inspiração mas qualquer um que tenha jogado Doom |
| 29:54 | sabe o que é um Big Fucking Gun. Vou deixar o link nas descrições abaixo. Mas |
| 30:00 | resumindo, primeiro você instala Java na sua distro. Como cada um tem seu jeito, veja nas |
| 30:05 | documentações pra cada sistema operacional. Num ubuntu seria um apt install openjdk. Agora você |
| 30:12 | baixa o .jar neste link. Pra executar um java, se você não sabe é rodar o comando java -jar com o |
| 30:19 | caminho pra onde você baixou o .jar. Agora você precisa fazer um git clone --mirror |
| 30:24 | do repositório gigante. Tem que ser com --mirror porque quando você acabar e der git push ele vai |
| 30:31 | reescrever todo o repositório. Mais ou menos como se você fizesse um git push com force. |
| 30:37 | Com o BFG você pode escolher remover arquivos específicos pelo |
| 30:42 | próprio nome. Mas se forem muitos, você pode escolher remover todos os blobs maiores que um |
| 30:47 | certo tamanho por exemplo. Digamos que todos os seus videos tenham 100mb ou mais, então use esta |
| 30:53 | opção pra remover por esse critério. Tem um outro caso de uso pro BFG, se por acaso |
| 30:59 | em vez de arquivos grandes na realidade você fez a besteira de iniciante que todo mundo faz, |
| 31:05 | e comitou arquivos de configuração com senhas hardcoded de coisas de produção. Se você não sabia |
| 31:13 | disso, deixa eu explicar: JAMAIS comite coisas com senha num repositório. Mesmo se você apagar |
| 31:19 | do arquivo depois o histórico vai continuar lá. Se você fez a monumental besteira de comitar senhas |
| 31:24 | no Git, agora você precisa obrigatoriamente atirar o BFG pra reescrever a história também. |
| 31:30 | Lembram que eu já expliquei que o git não apaga pra sempre seus commits? O BFG vai gerar novos |
| 31:37 | commits e reapontar todas as referências de branchs e tudo mais corretamente, mas os commits |
| 31:42 | antigos vão continuar na lixeira. Pra apagar definitivamente você vai usar o comando git gc. |
| 31:48 | O procedimento completo é primeiro rodar um git reflog pra expirar tudo que você não vai precisar |
| 31:53 | e depois rodar o git gc assim. (imagem) Feito isso, é só dar um git push digamos pro |
| 32:00 | repositório principal no Github. Agora você pode apagar essa cópia local onde rodou o BFG |
| 32:05 | e todo mundo pode dar git clone de novo do novo histórico. E sim, o procedimento não é exatamente |
| 32:10 | rápido nem trivial, mas também a idéia é que se você fizer certo como eu expliquei até agora, |
| 32:16 | você não devia nunca precisar rodar algo assim. O BFG é pros casos raros onde você |
| 32:21 | fez merda e agora temos que limpar a merda. Se isso fosse Pulp Fiction, o BFG seria Winston |
| 32:27 | The Wolf e você é o Vincent ou o Jules tendo que limpar a merda dentro do carro. E falando em sujeira, vamos falar rapidamente sobre monorepos. Esse é um daqueles assuntos |
| 32:37 | que arrisca ser controverso, mas vou tentar simplificar pra vocês. Se você nunca ouviu falar |
| 32:43 | dessa palavra, se não me engano começou com o Twitter. Mas o que interessa é o seguinte. Digamos |
| 32:48 | que você é uma empresa de tecnologia gigante, mais especificamente uma com poucos produtos |
| 32:55 | muito populares e centenas de desenvolvedores internos. Como num Twitter. Pior ainda, |
| 33:01 | digamos que esse produto é composto por dezenas de bibliotecas e microserviços. Imagine o pesadelo logístico. Você tem dezenas de pull requests aparecendo toda |
| 33:11 | hora em dezenas de repositórios de código. Alguns deles podem acabar quebrando as integrações entre |
| 33:18 | os diversos componentes. Num exemplo hipotético simples, digamos que num dos repositórios você |
| 33:23 | atualize uma biblioteca de ... parsing de JSON por conta de uma melhoria de performance. Mas digamos |
| 33:28 | que em outro repositório você precise voltar uma versão pra trás dessa biblioteca porque a versão |
| 33:35 | nova causa um erro de compatibilidade com seu código. E agora imagine um terceiro repositório |
| 33:40 | que importa o código desses dois repositórios, cada um dependendo da mesma biblioteca |
| 33:46 | em versões diferentes. Fodeu. Agora imagine situações como essa acontecendo na mão de centenas de desenvolvedores, toda hora, todos os dias. Imagine a dificuldade |
| 33:57 | que é no final empacotar tudo junto pra gerar um deploy coerente. Milhões de linhas de código, |
| 34:03 | divididos em dezenas ou centenas de repositórios, recebendo modificações o dia inteiro pela mão de |
| 34:09 | centenas de desenvolvedores, sendo vários desses times distribuídos geograficamente e separados até |
| 34:15 | por fusos horários diferentes, e no final precisa empacotar uma versão de produção sem bugs. Ah, |
| 34:21 | e isso tem que acontecer com bastante frequência, tipo uma vez por semana ou mesmo uma vez por dia. Ah sim, e o deploy acontece em centenas de máquinas espalhadas em dezenas |
| 34:30 | de data centers pelo mundo. E pra piorar imagine 20 anos de histórico de |
| 34:36 | código acumulado no caso de alguém como Google. Falando em Google, no caso dele estamos falando |
| 34:42 | de mais de um bilhão de linhas de código. Mais de 25 mil engenheiros. E quase 20 anos |
| 34:48 | de histórico num mono repositório gigante com todo o código da empresa que hoje já passou |
| 34:54 | dos 80 terabytes de tamanho. Só de código! Esse é o tipo de desafio que empresas com Twitter, |
| 34:59 | Google, Facebook, Netflix, e outros gigantes enfrentam todos os dias. |
| 35:05 | Nesse contexto, é muito fácil de imaginar que uma das técnicas que pode ajudar é reunir todos |
| 35:12 | os projetos que compõe o produto num único repositório. Mais do que isso, vendorizar, ou seja, baixar as dependências de terceiros e também comitar junto com o código; |
| 35:22 | em vez de instalar bibliotecas só durante o processo de deployment em produção. Por |
| 35:28 | que você acha que o Go, que é a linguagem criada pelo Google, não tem um gerenciador de dependência tradicional como um NPM de Javascript? Porque o Google prefere manter todas as dependências |
| 35:37 | estáticas junto com o código do projeto. Eles também preferem compilar todas as dependências |
| 35:43 | estaticamente no mesmo binariozão, de forma que não precise depender de quase nada instalado no |
| 35:49 | sistema operacional. Essa é a necessidade deles, e um Go da vida foi feito primariamente pra |
| 35:55 | resolver os problemas específicos deles, não necessariamente os seus. Casos como Google, Twitter ou Facebook são obviamente pontos fora da curva. Você pode |
| 36:06 | contar nos dedos quantas empresas tem o mesmo nível de problemas. Agora vem o ponto principal: |
| 36:11 | você não é o Google! Desculpa, as chances da sua empresa ser o próximo Twitter ou o próximo |
| 36:18 | Facebook é uma fração de uma fração de uma fração de um porcento, o que em matemática nós diríamos |
| 36:26 | que é o limite tendendo a zero. Quando um engenheiro de uma dessas empresas apresenta em palestras e eventos ou posts de blog sobre o que eles estão fazendo, |
| 36:35 | esses insights servem na maior parte das vezes só pra outras empresas de porte similar. Portanto |
| 36:42 | se você é uma empresa com uma equipe de 10 ou 20 pessoas, com 10 ou 20 repositórios, e só meras |
| 36:49 | dezenas de milhares de linhas de código, fazendo deployment em produção uma vez por quinzena; então quase nada da escalabilidade de um Google se aplica a você. Se você é menor que isso, |
| 36:59 | pode pular esse assunto por um bom tempo, ele não te interessa. Uma das coisas mais prejudiciais que alguém pode fazer é adotar uma tecnologia ou uma técnica |
| 37:08 | baseado na premissa errada de "se o Google usa, deve ser bom e devemos usar também". Não, essa |
| 37:16 | premissa não faz o menor sentido, porque o correto deveria ser "se o Google usa, qualquer empresa de |
| 37:22 | mesmo porte e com os mesmos problemas, talvez se beneficiem e talvez valha a pena tentar". Você |
| 37:28 | tem o porte do Google? Mais importante, você tem o dinheiro que o Google investe? Lógico que não. |
| 37:33 | Então não, você nunca, jamais, deve usar alguma coisa meramente porque você é fanboy de uma marca. |
| 37:39 | Fanboyismo é o oposto de engenharia. Engenharia é encontrar a solução do tamanho certo pro problema |
| 37:45 | certo em mãos, dentro das restrições do seu contexto. Nem mais, nem menos. Agora tem um problema similar que vale a pena colocar em perspectiva. Eu mencionei no episódio |
| 37:55 | anterior que o desenvolvimento da kernel do Linux não está no GitHub. Um dos motivos é que o Linus |
| 38:01 | Torvalds jamais vai confiar num terceiro pra manter a cópia mestra do kernel. |
| 38:17 | (torvalds - google) Mas tirando isso, seria bem difícil usar |
| 38:39 | o fluxo de trabalho e interface gráfica ou mesmo as apis do GitHub. Assim como no caso do monorepo, |
| 38:45 | daria pra ficar horas listando item a item todos os prós e contras e explicar tecnicamente os |
| 38:51 | efeitos pra cada caso particular. Em vez disso quero que você leiam os links que vou deixar nas descrições abaixo e por hoje quero listar só os pontos que eu acho importantes. |
| 39:01 | A kernel do Linux é um dos projetos open source mais antigos em atividade hoje, e com maior quantidade de código, e com a maior quantidade de voluntários colaborando ao redor do |
| 39:12 | mundo. Dezenas de empresas, de dezenas de setores, dependem do Linux. A kernel em si é tecnicamente |
| 39:18 | um monorepo. Mais corretamente ela é um monotree. Diferente de projetos dentro de um Google, onde a |
| 39:24 | maior parte dos repositórios é centralizada e todo mundo clona de um único lugar. No caso da kernel, |
| 39:30 | existe o repositório do Linus, só que o único desenvolvedor que trabalha nesse repositório é o próprio Linus. Cada distro como Ubuntu, Fedora ou outros tem |
| 39:40 | seus próprios repositórios principais, que não necessariamente clonam direto do Linus. Cada |
| 39:46 | fabricante de hardware que desenvolve drivers tem repositórios diferentes. Mais importante, diversos |
| 39:52 | produtos estão trabalhando em versões diferentes da kernel. Por exemplo, na própria Canonical que |
| 39:57 | faz o Ubuntu, você tem o Ubuntu LTS que é o Long Term Service e o Ubuntu com versões mais |
| 40:03 | novas dos componentes. A idéia do LTS é que ele atualize o menos possível pra não ficar quebrando |
| 40:08 | compatibilidade o tempo todo. Porém, digamos que seja descoberto um problema grave de segurança num driver na kernel nova. E esse bug afeta várias versões da kernel pra |
| 40:18 | trás. O bug é descoberto no Fedora primeiro. Então a correção é feita no repositório deles. |
| 40:24 | O patch da correção começa a ser distribuída em mailing lists. Cada empresa ou comunidade com |
| 40:30 | um repositório tem seu mailing list. A forma de distribuir pra tanta gente é literalmente usar o recurso de CC ou carbon copy de e-mail, e assim distribuir o patch pra |
| 40:40 | diversos lugares diferentes. Pense por um momento num GitHub. Se cada empresa tem uma organização e cada um tem um fork. É como se você tivesse um jeito de postar o mesmo pull |
| 40:51 | request pra diferentes repositórios em diferentes organizações. Coisa que na interface gráfica |
| 40:57 | atual, não dá pra fazer. Na interface web você só devolve pull request pro repositório de quem fez |
| 41:02 | fork. Mas o problema não acaba aí. Não quer dizer que esse patch vai funcionar em todas as versões e diferentes variações de cada organização. Agora os responsáveis precisam testar, muita discussão |
| 41:13 | pode acontecer. Numa mailing list essa discussão é um Reply All pra todo mundo. Num GitHub seriam |
| 41:19 | as Issues em cada repositório, só que no GitHub as issues são atreladas a um repositório. Como |
| 41:26 | que o cara da RedHat que tem repositório próprio vai ficar respondendo nas Issues dele e nas Issues de outras organizações como da Canonical, sobre o mesmo problema? De novo, |
| 41:35 | a interface gráfica atual não tem como resolver esse problema. Mais do que isso, cada área de interesse dentro do kernel, |
| 41:42 | driver de rede, o X, o systemd e assim por diante tem uma lista de mantenedores. Eles que em última |
| 41:48 | instância vão aprovar ou reprovar uma modificação em seu subsistema. No caso do Linux, se eu quiser |
| 41:55 | achar quem é o responsável pra receber o tal patch de segurança, eu procuro no arquivo chamado MAINTAINERS que tem na raíz do projeto. No caso de um GitHub, cada mantenedor talvez teria um fork do |
| 42:06 | projeto na sua conta do GitHub. Mas não existe uma forma fácil de achar quais dos forks são de mantenedores ativos e quais dos forks são de colaboradores. De novo, a interface gráfica atual |
| 42:16 | não resolve esse problema. Em última instância, até depois dos outros repositórios já terem aplicado o patch e deployado, a versão mestra pode acabar aplicando |
| 42:26 | o patch depois dos outros, porque o Linus vai ser mais cuidadoso em aceitar os patches, |
| 42:32 | talvez até rejeite e mande modificar. Mas enquanto isso a RedHat ou Canonical precisam |
| 42:37 | fechar o bug pros seus clientes, independente do Linus ter aprovado o patch ou não. Vai ter |
| 42:42 | muitas idas e vindas em cada patch, e não existe a obrigação de que os forks vão esperar pra dar |
| 42:48 | git fetch do Linus só depois dele ter dado merge no repositório dele. O fluxo de trabalho num GitHub envolve fazer forks dos repositórios, discutir Issues na interface |
| 42:59 | gráfica do repositório, e receber colaborações via pull requests vindos de outros forks. O fluxo |
| 43:06 | de trabalho da kernel do Linux envolve dezenas de repositórios distribuídos que são forks do |
| 43:12 | repositório do Linux, com discussões acontecendo simultaneamente em dezenas de mailing lists, |
| 43:17 | e esses e-mails servindo como canal de distribuição de dezenas de patches de código |
| 43:23 | que são automatizados de diversas maneiras diferentes por cada empresa ou mantenedor. |
| 43:28 | Uma das primeiras coisas que é diferente no fluxo é que no GitHub só tem como fazer pull request de volta pro repositório de onde se fez fork. Na kernel você quer distribuir os patches |
| 43:37 | pra múltiplos repositórios de uma só vez. Além de pode discutir o assunto em paralelo entre diversos |
| 43:43 | repositórios ao mesmo tempo. É por essas e várias outras razões que, hoje, |
| 43:48 | não tem como suportar o fluxo de trabalho da kernel no GitHub ou GitLab ou qualquer um que siga |
| 43:54 | esse mesmo modelo e tenha essa escala. O fluxo deles segue uma árvore, onde o principal é a raíz |
| 44:00 | e ele vai expandindo numa única direção pra cada galho. No caso do Linux é uma rede, um mesh, onde |
| 44:06 | não existe direção definida, cada nó da rede pode se comunicar com qualquer outro nó da rede, sem |
| 44:11 | um que coordena ou bloqueia essa comunicação. O Git foi originalmente feito com essa estrutura |
| 44:17 | totalmente distribuída em mente. Hoje em dia nós simplificamos de uma forma mais centralizada, como num GitHub, pra ficar mais usável pra maioria dos mortais. |
| 44:26 | Em resumo, sim, se o GitHub ou GitLab resolverem criar uma estrutura de projeto |
| 44:33 | de múltiplas árvores do mesmo repositório separados pra mantenedores diferentes com |
| 44:38 | uma forma mais simples de unificar a cooperação entre repositórios, tanto do ponto de vista de |
| 44:44 | Issues e Pull Requests distribuídos, talvez, bem talvez, um projeto como Linux poderia |
| 44:50 | viver nessas plataformas. Mas seria um tanto de funcionalidade extra pra atender um nicho muito pequeno de projetos. Pouquíssimos projetos tem os requerimentos da kernel do Linux, por isso não |
| 45:01 | vejo isso acontecendo tão cedo. Pros colaboradores do kernel, tirando alguns subgrupos que podem trabalhar mais isoladamente; digamos, equipes de drivers ou algo assim, |
| 45:10 | a grande maioria ainda vai ser mais produtiva com simples mailing lists e distribuindo |
| 45:16 | patches mesmo, sem ficar na dependência de nenhuma plataforma controlando a comunicação. |
