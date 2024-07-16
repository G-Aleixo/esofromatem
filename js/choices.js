let choices_data = {
    'inicio': {
        "conteudo": `Mais uma noite se passa na sua vida, você acorda numa manhã, depois de sonhos inquietantes. Percebe-se 
        que você está diferente; não reconhecendo a si mesmo. Olhando para si mesmo, percebe sua diferente aparência. Uma 
        cor completamente escura, não conseguindo identificar nada no seu corpo. Seus olhos arregalam com o pensamento 
        claro: "Eu não sou mais eu. O que eu sou? O que aconteceu comigo?"</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["olharquarto1", "Olhar ao redor do quarto"],
            ["olharjanela1", "Olhar para a janela"],
            ["irdormir1", "Voltar a dormir"]
        ]
    },
    'olharquarto1': {
        "conteudo": `Nota que não é um sonho, o seu quarto está exatamente como de costume, dando para observar até mesmo 
        a moldura de um recorte de uma revista com uma bela vista, feita por si mesmo.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["olharjanela1", "Olhar para a janela"],
            ["irdormir1", "Voltar a dormir"]
        ]
    },
    'olharjanela1': {
        "conteudo": `Ao se levantar da cama e ir para a janela, vê o céu fechado, com várias nuvens e respingos de chuva.</p>
        <img style="height: auto; width: 256px;" src="../img/janela.png" alt="">`,
        "botoes": [
            ["olharquarto1", "Olhar ao redor do quarto"],
            ["irdormir1", "Voltar a dormir"]
        ]
    },
    'irdormir1': {
        "conteudo": `Você tenta voltar a dormir. Contudo, é impossível. Mesmo se esforçando para dormir, é uma tentativa 
        falha. Fechando o olho dezenas de vezes, evitando ver seu corpo completamente desfigurado. E também você se lembra 
        do trabalho. 
        <br> - Que trabalho cansativo escolhi! Viajar, dia sim, dia não. É um trabalho mais irritante do que o de 
        escritório, e ainda por cima há o desconforto de andar sempre preocupado com as ligações dos trens, com a cama e 
        com as refeições irregulares. Diabos levem tudo isto! Mas eu não posso reclamar muito; se meu chefe descobrir isso, 
        serei despedido na hora... mas se bem que ser despedido desse trabalho de merda não seria tão ruim. Mas não faço 
        isso só por causa dos meus pais.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["continuar1", "Continuar"]
        ]
    },
    'continuar1': {
        "conteudo": `- Agora é bom eu me levantar, mesmo que não esteja muito bem. Meu trem parte às cinco, preciso estar 
        lá o quanto antes. 
        <br> Ao olhar ao relógio que fica em cima da cômoda, nota que já são 6h30. O relógio deveria tocar às quatro da 
        manhã. Todavia, agora já era. O que fazer? O próximo trem passa às sete horas; mas para chegar a tempo, deveria 
        correr e muito. Mesmo que você consiga pegar o trem, ouvirá muitas reclamações do seu chefe.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/relogio.gif" alt="">`,
        "botoes": [
            ["ficarcasa1", "Ficar deitado"],
            ["irtrem1", "Sair correndo para a estação de trem"],
        ]
    },
    'irtrem1': {
        "conteudo": `Você rapidamente se levanta e, sem comer nada, sai do quarto correndo e sai de casa. Ninguém da sua 
        casa vê você saindo. Estando na rua, você percebe que muitas pessoas na rua te olham estranho, ficam susurrando 
        coisas que você não entende.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_rua.png" alt="">`,
        "botoes": [
            ["voltarcasa1", "Voltar para casa"],
            ["irtrem2", "Continuar indo até a estação de trem"]
        ]
    },
    'irtrem2': {
        "conteudo": `Você continua indo até a estação. Ao chegar lá, você vê todas pessoas se afastando, inclusive os 
        funcionários. Quando vai à recepção da ferroviária, não tem ninguém para te atender.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["voltarcasa1", "Ir para sua casa"],
            ["irtrem3", "Ficar esperando alguém"]
        ]
    },
    'irtrem3': {
        "conteudo": `Você fica esperando alguém chegar, mas você percebe que não há mais ninguém no local. Depois de um 
        tempo, você é surpreendido pelo barulho de sirene do carro de polícia. Antes que você pudesse fazer algo, você é 
        abordado por dois policiais armados e apontando suas armas na sua direção. <br> - Mãos na cabeça aberração!</p>
        <img style="height: auto; width: 256px;" src="../img/policial.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/policial.png" alt="">`,
        "botoes": [
            ["reagirpolicia1", "Tentar fugir"],
            ["serpreso1", "Ficar parado"]
        ]
    },
    'serpreso1': {
        "conteudo": `Você fica parado e os policiais te prendem depois de te baterem. Você não entende bem o motivo. Você 
        é lavado a prisão e fica numa sala, sozinho, afastado de todos.</p>
        <h1>O jogo acabou, você foi preso.</h1>
        <img style="height: auto; width: 256px;" src="../img/policial_gregorp.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_preso.gif" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'reagirpolicia1': {
        "conteudo": `Você se mexe um pouco para o lado e se prepara para correr; mas antes que possa fazer qualquer 
        coisa <br> - Atira nessa aberração! <br> O policial atira em você, causando sua morte.</p>
        <h1>O jogo acabou, você morreu para um policial.</h1>
        <img style="height: auto; width: 256px;" src="../img/policial_gregorp.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregor_lapide.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'voltarcasa1': {
        "conteudo": `Você percebe que quando você volta para casa, ainda há muitas pessoas mantendo distância e sempre
        sussurrando uma para a outra. Você finalmente chega na sua casa e pelo transtorno que houve, você vai direto
        para o seu quarto.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_rua.png" alt="">`,
        "botoes": [
            ["ficarcasa1", "Continuar"],
        ]
    },
    'ficarcasa1': {
        "conteudo": `Estando em sua casa, mais você se perde nos pensamentos sobre o que fazer. Quando nota, são mais de 
        sete horas e realmente perdeu o horário de trabalho. Você então escuta batidas cautelosas na porta. Você então 
        percebe a voz de sua mãe falando "Gregor? Já são sete horas. Não tem que pegar o trem?"</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/portaquarto.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">`,
        "botoes": [
            ["pedirajuda1", "Falar com sua mãe sobre o seu problema"],
            ["continuar2", "- Sim, sim, obrigado, mãe, já vou levantar."],
        ]
    },
    'pedirajuda1': {
        "conteudo": `- Mãe, aconteceu alguma coisa comigo, eu não sei explicar bem...
        <br> - Oh Deus, você está doente meu filho? Quer que eu vá chamar um médico? Abra essa porta para eu ver se é grave. 
        <br> - Não é bem uma doença, eu acho; é algo que está acontecendo no meu corpo. Eu irei abrir a porta, mas por 
        favor, não surta.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">`,
        "botoes": [
            ["continuar20", "Abrir a porta"],
        ]
    }, 
    'continuar20': {
        "conteudo": `Com esse diálogo que você tem com sua mãe, as pessoas da família percebem que você está em casa. Você  
        abre a porta, então seu pai nem te estranha, mas quando você percebe sua irmã está junto de sua mãe. Assim que elas 
        te veem, te estranham, te olham com choque.</p>
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`, 
        "botoes": [
            ["continuarajuda1", "- Por favor, me ajudem"],
        ]
    },
    'continuarajuda1': {
        "conteudo": `Você pede ajuda às mulheres da sua casa, sua mãe entra em prantos, sem saber o que fazer, assim como
        sua irmã Grete.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["continuarajuda2", "- Eu não sei o que fazer.. <br> Eu devo ir ao trabalho?"],
            ["continuarajuda2", "- O que será que <br> está acontecendo comigo?"],
        ]
    },
    'continuarajuda2': {
        "conteudo": `Logo após sua fala, elas ficam olhando uma para a outra e para você. Então, sua mãe fala enquanto cai
        algumas lágrimas do seu rosto.
        <br> - Filho, o que houve com você meu filho? Você não pode ir ao trabalho nesse estado... eu não sei o que é isso.
        Você precisa ir ao hospital! Grete, ligue para o trabalho de Gregor, fale que ele está com uma grave doença! Meu
        filho querido, eu vou te ajudar com qualquer coisa possível!
        <br> Sua irmã vai atrás do telefone para falar com seu chefe para justificar sua falta. E sua mãe, ao fim de sua
        fala, ela te dá um grande e caloroso abraço.</p>
        <img style="height: auto; width: 256px;" src="../img/mae_choro.gif" alt="">`,
        "botoes": [
            ["aceitarajuda1", "Aceitar a ajuda da mãe"],
        ]
    },
    'aceitarajuda1': {
        "conteudo": `Sua mãe e sua irmã fazem de tudo para te ajudar, por mais que achem estranho tudo isso que você
        passa. Sua mãe tenta te dar remédios, enquanto sua irmã tenta marcar uma consulta no hospital para você.
        Já o seu pai, acha que isso é falta de orações na família de vocês. Um tempo se passa, sua família se torna mais
        unida, e finalmente chega um dia que você vai ao médico.</p>
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["continuarajuda3", "Ir ao médico"],
        ]
    },
    'continuarajuda3': {
        "conteudo": `Você vai ao médico e, pelo incrível que pareça, o médico não se assusta ao te ver, ele apenas fica
        com receio de ser uma doença altamente contagiosa. Ao conversar com o médico, ele afirma que você não é a
        primeira pessoa que aparece assim no mundo, e que é aparentemente algo temporário.</p>
        <img style="height: auto; width: 256px;" src="../img/medico.gif" alt="">`,
        "botoes": [
            ["continuar21", "Continuar"],
        ]
    },
    'continuar21': {
        "conteudo": `Você convive normalmente assim com sua família e aos poucos, você volta ao trabalho mesmo nessa forma
        desconfigurada. O jornal da sua cidade faz reportagens sobre você, e dias depois passa a ser compartilhado no mundo
        que isso é algo que está ocorrendo com pessoas específicas, havendo dezenas de casos. Contudo, não há informações
        concretas sobre isso pela falta de conhecimento científico.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_jornal.png" alt="">`,
        "botoes": [
            ["familiaaceitar1", "Conviver com essa 'doença'"],
            ["estudar1", "Estudar para descobrir a cura dessa 'doença'"],
        ]
    },
    'familiaaceitar1': {
        "conteudo": `Por mais que não seja o melhor dos mundos, grande parte da sociedade aceita as pessoas que tiveram
        essa metamorfose. Então você passou a viver tranquilamente com sua família, como se nada tivesse ocorrido.</p>
        <h1>O jogo acabou, você foi aceitado pela família.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'estudar1': {
        "conteudo": `Por mais que não seja o melhor dos mundos, grande parte da sociedade aceita as pessoas que tiveram
        essa metamorfose. Você começa a estudar medicina e matérias de ciência para tentar achar a cura dessa doença.
        Você não conseguiu, mas Gregor Samsa é o nome de um dos médicos que ajudou.</p>
        <h1>O jogo acabou, você foi aceitado pela família.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregorp_medico.gif" alt=""> 
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'continuar2': {
        "conteudo": `Com isso, as pessoas da casa percebem que você ainda está em casa, então logo chega seu pai falando 
        com sua voz grossa e firme "Gregor,o que você tem?" 
        <br> Antes que possa responder sua irmã também fala com sua voz baixa e doce "Gregor? Não se sente bem? Precisa 
        de alguma coisa?"</p>
        <img style="height: auto; width: 256px;" src="../img/porta_familia.png" alt="">`,
        "botoes": [
            ["continuar3", "- Eu estou bem, quase pronto para sair."],
            ["deixarquieto1", "- Me deixem quieto!"],
        ]
    },
    'deixarquieto1': {
        "conteudo": `Você fala com grosseiria com sua família, seus pais ficam estressados, e sua irmã preocupada.`,
        "botoes": [
            ["continuar3", "Continuar"],
        ]
    },
    'continuar3': {
        "conteudo": `Seus pais saem, mas sua irmã continua na frente da porta. "Abra essa porta logo, Gregor." Fala ela
        depois de tentar abrir a porta e não conseguindo (pois está trancada).</p>
        <img style="height: auto; width: 256px;" src="../img/porta_irma_fora.png" alt="">`,
        "botoes": [
            ["pedirajuda2", "Falar com sua irmã sobre o seu problema"],
            ["irporta1", "Se levantar e ir até a porta"],
            ["ficardeitado1", "Continuar deitado"],
        ]
    },
    'pedirajuda2': {
        "conteudo": `- Grete, aconteceu alguma coisa comigo, eu não sei explicar bem...
        <br> - Vixe, você tá doente por acaso? Quer que eu vá chamar um médico? Abra essa porta para eu verificar isso.
        <br> - Não é bem uma doença, eu acho; é algo que está acontecendo no meu corpo. Eu irei abrir a porta, mas por 
        favor, não surte.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/porta_irma_fora.png" alt="">`,
        "botoes": [
            ["continuar22", "Abrir a porta"],
        ]
    },
    'continuar22': {
        "conteudo": `Com esse diálogo que você tem com sua irmã, você abre a porta. Assim que ela te vê, te estranha, te 
        olha com choque. Você pede ajuda à sua irmã, ela, sem saber o que fazer, fica com os olhos trémulos.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["continuarajuda4", "- Eu não sei o que fazer.. <br> Eu devo ir ao trabalho?"], 
            ["continuarajuda4", "- O que será que <br> está acontecendo comigo?"], 
        ]
    },
        'continuarajuda4': {
        "conteudo": `Logo após sua fala, sua irmã fica te olhando por um tempo, sem saber o que fazer. Então, Grete fala 
        enquanto cai algumas lágrimas do seu rosto.
        <br> - Meu irmão, o que houve com você? Você não pode ir ao trabalho nesse estado... eu não sei o que é isso.
        Você precisa ir ao hospital! E também precisamos ligar para o seu trabalho para justificar sua falta... Gregor, 
        eu vou te ajudar com qualquer coisa possível!
        <br> Sua irmã vai atrás do telefone para falar com seu chefe para justificar sua falta. E logo depois, ela volta
        para te dar um grande abraço caloroso.</p>
        <img style="height: auto; width: 256px;" src="../img/irma_choro.gif" alt="">`, // IRMÃ CHORANDO
        "botoes": [
            ["aceitarajuda2", "Aceitar a ajuda da mãe"],
        ]
    },
    'aceitarajuda2': {
        "conteudo": `Sua irmã fala seu problema para sua família, por mais que achem estranho tudo isso que você passa te 
        ajudam com o que for possível. Sua mãe tenta te dar remédios, enquanto sua irmã tenta marcar uma consulta no 
        hospital para você. Já o seu pai, acha que isso é falta de orações na família de vocês. Um tempo se passa, sua 
        família se torna mais unida, e finalmente chega um dia que você vai ao médico.</p>
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["continuarajuda3", "Ir ao médico"],
        ]
    },
    'irporta1': {
        "conteudo": `Relutante, você se levanta com seu corpo desfigurado e sem nenhuma figura de você mesmo. Por mais que 
        você ainda seja você; não se sente um humanoide. Tens dificuldade para se levantar, mas depois de um tempo, você 
        consegue. Quando vai em direção a porta, sua irmã jã não está lá do outro lado. Invés disso você escuta o barulho 
        da campanhia da sua casa tocando. Ninguém vai para a sua casa nesse horário, então você sabe que é alguém do seu 
        trabalho. A criada da sua casa vai abrir a porta.
        <br> - Bom dia.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["continuar4", "Continuar"],
        ]
    },
    'ficardeitado1': {
        "conteudo": `Você continua deitado com seu corpo desfigurado e sem nenhuma figura de você mesmo. Por mais que você 
        ainda seja você; não se sente um humanoide. Tens dificuldade até de se mexer. Você percebe que sua irmã não está 
        mais do outro lado da porta; mas logo você escuta o barulho da campanhia da sua casa tocando. Ninguém vai para a 
        sua casa nesse horário, então você sabe que é alguém do seu trabalho. A criada da sua casa vai abrir a porta.
        <br> - Bom dia.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["continuar26", "Continuar"],
        ]
    },
    'continuar26': {
        "conteudo": `Apenas por escutar isso vindo da porta da sua casa, você tem certeza que é o seu chefe. Você leva um
        susto, não esperava que isso ocorresse. Podia ser qualquer outra pessoa do trabalho; mas logo o chefe foi atrás de
        você.
        <br> - Onde está o senhor Samsa?
        <br> Fala o seu chefe enquanto é guiado pela criada e sua mãe</p>
        <img style="height: auto; width: 256px;" src="../img/gregor.gif" alt="">`,
        "botoes": [
            ["continuar5", "Continuar"],
        ]
    },
    'continuar4': {
        "conteudo": `Apenas por escutar isso vindo da porta da sua casa, você tem certeza que é o seu chefe. Pelo susto 
        disso, suas pernas ficam trémulas, você já não tem mais nada para se segurar; pelo desequilíbrio, você cai no chão 
        e faz um barulho. O tapete do quarto amorteceu o som, mas a sua cabeça bate no chão, fazendo você sentir dores.
        <br> - Algo caiu aí dentro. - Fala o chefe do trabalho enquanto anda para entrar na casa, em busca de você.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["continuar5", "Continuar"],
        ]
    },
    'continuar5': {
        "conteudo": `Sua irmã, de forma sorrateira vai até a porta do seu quarto te avisar "Gregor, aqui está o chefe do 
        escritório." Você está ciente disso, paralisado está, sem saber o que fazer. Você olha ao redor do quarto, enquanto 
        isso, o seu pai vai até a porta e fala "Gregor, está aqui o chefe do escritório e quer saber porque não pegou o 
        primeiro trem. Além disso, ele quer falar contigo pessoalmente. Abre essa porta. Com certeza não vai reparar na
        desarrumação do quarto."</p>
        <img style="height: auto; width: 256px;" src="../img/porta_irma_fora.png" alt="">`,
        "botoes": [
            ["fugirjanela1", "Fugir pela janela"],  
            ["fazernada1", "Continuar"],
        ]
    },
    'fazernada1': {
        "conteudo": `- Bom dia, senhor Samsa.
        <br> Fala o seu chefe tentando falar com você. E logo em seguida sua mãe fala com ele. 
        <br> - Ele não está bem, senhor, pode acreditar. Se ele não estivesse mal, nunca perderia o trem! O rapaz não pensa 
        em nada além do emprego. Quase me zango com a mania que ele tem de nunca sair à noite.</p>
        <img style="height: auto; width: 256px;" src="../img/mae.png" alt="">`,
        "botoes": [
            ["continuar6", "- Já vou"],
            ["continuar6", "Continuar"], 
            ["fugirjanela1", "Fugir pela janela"],
        ]
    },
    'continuar6': {
        "conteudo": `O seu chefe fala: 
        <br> - Não imagino qualquer outra explicação, senhora. Espero que não seja nada grave. Embora, deva dizer que nós, 
        homens de negócios, feliz ou infelizmente, temos muitas vezes de ignorar qualquer ligeira indisposição, visto que 
        é preciso olhar pelo negócio.
        <br> Após isso, seu pai questiona "O seu chefe pode entrar, Gregor?"</p>
        <img style="height: auto; width: 256px;" src="../img/portaquarto.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["abrirporta1", "Abrir a porta"],
            ["naoabrirporta1", "- Não vou abrir agora"],
            ["fugirjanela1", "Fugir pela janela"],
        ]
    },
    'abrirporta1': {
        "conteudo": `Você tenta criar coragem para fazer você abrir a porta, mas não consegue. É muita pressão sob você.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/portaquarto.png" alt="">`,
        "botoes": [
            ["naoabrirporta1", "- Não vou abrir agora"],
            ["fugirjanela1", "Fugir pela janela"],
        ]
    },
    'naoabrirporta1': {
        "conteudo": `O chefe acabara por escutar você se recusando, então logo fala com uma voz alta. 
        <br> - Senhor Samsa, é bom você abrir essa porta, tenho muitos a conversar, seja sobre o seu trabalho, seja sobre 
        essa sua suposta doença, seja sobre o que você fala só com esses "sim" e "não" ou até mesmo sua falta de compromisso 
        com as suas vendas; e também sobre o que você e sua família devem fazer!"</p>
        <img style="height: auto; width: 256px;" src="../img/gregor.gif" alt="">`,
        "botoes": [
            ["continuar7", "Continuar"],
        ]
    },
    'continuar7': {
        "conteudo": `Logo após o término da fala de seu chefe, você cria coragem e fala sem nem pensar: 
        <br> - Chefe, meu senhor, 
        eu estou melhorando já, deve ter sido algo que comi à noite; pois tive agora umas tonturas, mas já estou melhor.
        Dê-me só mais um ou dois minutos para eu conseguir me levantar. E sobre essas coisa que o senhor disse, eu devo falar
        sobre a encomenda que fiz, o senhor não deve ter sido notificado; e além disso, não é necessário falar sobre minha 
        família. Não se preocupe senhor, eu estarei logo no escritório e então poderemos falar com mais calma.</p>
        <img style="height: auto; width: 256px;" src="../img/gregor.gif" alt="">`,
        "botoes": [
            ["continuar8", "Continuar"],
        ]
    },
    'continuar8': {
        "conteudo": `Você até pode ter entendido tudo isso que você falou. Mas na verdade, a única coisa que saiu de sua 
        boca foram gemidos e grunhidos baixos; por algum motivo, provavelmente pela desconfiguração do seu corpo, você não 
        conseguiu falar.
        <br> - Meu Deus, Gregor deve estar terrivelmente doente e nós estamos atormentando ele... Grete, vá atrás de um 
        médico! - Fala a mãe.
        <br> - Isso não era uma voz humana... - Exclama o chefe
        <br> - Ana, vá atrás de um serralheiro! - Diz o pai para a mãe.
        <br> Passa-se um tempo, seus familiares devem estar na sala junto do chefe. Você está mais calmo, entendendo já 
        toda a situação.</p>
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif.png" alt="">`,
        "botoes": [
            ["sairquarto1", "Sair do quarto"],
            ["continuardeitado1", "Continuar deitado"],
            ["fugirjanela1", "Fugir pela janela"],
        ]
    },
    'continuardeitado1': {
        "conteudo": `Você continua deitado, com fome, com sede mas com grande vontade de dormir. O que fazer?</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["sairquarto1", "Sair do quarto"],
            ["continuardeitado2", "Dormir na sua cama"],
            ["fugirjanela1", "Fugir pela janela"],
        ]
    }, 
    'continuardeitado2': {
        "conteudo": `Você fica deitado e acaba dormindo, mas antes de dormir, você fica chorando na sua cama.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">`,
        "botoes": [
            ["morrer1", "Continuar"],
        ]
    },
    'sairquarto1': {
        "conteudo": `Você se levanta, e com dificuldades, acaba girando a chave da porta, destrancando-a.
        <br> O seu chefe fala "Ouçam, Gregor está dando a volta na chave."
        <br> Aos poucos você abre a porta para si, abrindo mesmo só metade dela, você vê seus pais e seu chefe encarando
        a ti com uma péssima feição. Eles só conseguem ver metade de sua cabeça e uma parte do seu torso, mas eles veêm
        sua figura: um homem humanoide completamente preto, conseguindo notar apenas a cor de seus olhos.</p>
        <img style="height: auto; width: 256px;" src="../img/porta_gregorp.png" alt="">`,
        "botoes": [
            ["continuar9", "Continuar"],
        ]
    },
    'continuar9': {
        "conteudo": `Sua mãe tem seus olhos aregalados, seu cabelo bagunçado e uma roupa velha. Ela põe suas mãos na boca, 
        tenta andar para frente mas cai de joelhos no chão. Ela começa a cair em lágrimas, sem nem falar uma palavra.
        <br> O seu pai cerrou os punhos com um ar cruel, como se quisesse obrigar Gregor a voltar para o quarto com um 
        murro; depois, olhou perplexo em torno da sala de estar, cobriu os olhos com as mãos e desatou a chorar, o peito 
        vigoroso sacudido por soluços.</p>
        <img style="height: auto; width: 256px;" src="../img/mae_choro.gif" alt=""></p>
        <img style="height: auto; width: 256px;" src="../img/pai_choro.gif" alt="">`,
        "botoes": [
            ["falarchefe1", "Falar com o chefe"],
            ["voltarquarto1", "Entrar de volta no quarto e fechar a porta"],
        ]
    },
    'voltarquarto1': {
        "conteudo": `Assim que você vê a reação dos seus pais, você rapidamente fecha a porta, vai para a sua cama e
        começa a cair em lágrimas lá. Depois de um tempo, você acab dormindo.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">`,
        "botoes": [
            ["continuar10", "Continuar"],
        ]
    },
    'falarchefe1': {
        "conteudo": `- Chefe, estou pronto. Onde vamos? Ao escritório? No caminho podemos falar sobre tudo isso. Bem, eu 
        estava meio mal, mas agora já estou de pé e pronto para o meu trabalho de caixeiro viajante. Eu estou ciente que 
        somos perfeitamente profissionais e meu trabalho é muito bem visto pelas pesssoas da empresa, então, mesmo que 
        não esteja do meu melhor jeito, estou disposto a ir trabalhar! 
        <br> - Você fala de forma bem calma, por mais que esteja aflito pelo o que houve com seus pais.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["reacaochefe1", "Continuar"],
        ]
    },
    'reacaochefe1': {
        "conteudo": `O seu chefe anda lentamente para fora da sala enquanto você fala, mordendo eles os lábios, com os 
        olhos trémulos e evitando olhar diretamente para você. Você sabe que ele não conseguiu prestar atenção em nada que
        disse. 
        <br> Seria ótimo se sua irmã estivesse aqui, ela é esperta e provavelmente te ajudaria; e o chefe que é um grande 
        mulherengo, iria com certeza cair nas palavras dela. Mas ela não está. Além disso, se apenas deixar o chefe ir, 
        seu trabalho na firma estaria em risco. O que fazer agora?</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["chefeir1", "Deixar seu chefe ir embora"],
            ["falarchefe2", "Se aproximar do chefe"],
        ]
    },
    'falarchefe2': {
        "conteudo": `Você sai do quarto, seus pais ainda calados até evitam olhar para vocês assim como o seu chefe. 
        Mas você vai até o chefe que até mesmo está se segurando num corrimão. Você quer ter o seu futuro, então deve ir 
        atrás para não perder o emprego. 
        <br> Quanto mais você se aproximava, mais todos ali perto sentiam pavor. Até que o chefe se vira para a porta 
        para sair da casa e corre.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/mae_choro.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai_choro.gif" alt="">`,
        "botoes": [
            ["falarchefe3", "Seguir ele para falar com ele"],
            ["chefeir1", "Deixar ele ir"],
        ]
    },
    'falarchefe3': {
        "conteudo": `Você vê o chefe saindo da sua casa e antes que pudesse fazer qualquer coisa, sua mãe começa a 
        gritar "Socorro, por amor de Deus, socorro!". Enquanto isso seu pai pega a sua bengala e fica balançando a 
        bengala para perto de você. "Gregor, para o quarto, já!".</p>
        <img style="height: auto; width: 256px;" src="../img/mae_choro.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["ficarparado1", "Ficar parado"], 
            ["irquarto1", "Ir ao seu quarto"],
        ]
    },
    'chefeir1': {
        "conteudo": `Você vê o chefe saindo da sua casa, sua mãe começa a gritar "Socorro, por amor de Deus, socorro!". 
        Enquanto isso seu pai pega a sua bengala e fica balançando a bengala para perto de você. "Gregor, para o quarto, 
        já!".</p>
        <img style="height: auto; width: 256px;" src="../img/mae_choro.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["ficarparado1", "Ficar parado"], 
            ["irquarto1", "Ir ao seu quarto"],
        ]
    },
    'ficarparado1': {
        "conteudo": `Seu pai andando aos poucos chega próximo de você e acaba até mesmo te batendo com a bengala e te 
        empurrando para próximo do seu quarto. "Gregor, vai!" ele grita. Enquanto você não vai, a bengala dele te 
        machuca bastante, com ela tendo manchas de sangue de seus machucados.</p>
        <img style="height: auto; width: 256px;" src="../img/bengala_sangue.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_machucado.gif" alt="">`,
        "botoes": [
            ["irquarto1", "Ir ao quarto"],
        ]
    },
    'irquarto1': {
        "conteudo": `Você entra no seu quarto enquanto seu pai te acompanha e assim que coloca um pé no quarto, seu pai 
        te empurra e fecha a porta de forma brusca. Você acaba se sentindo cansado por toda essa confusão, mas ao mesmo 
        tempo, preocupação e medo. No chão, acaba dormindo e chorando.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_machucado.gif" alt=""></p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">`,
        "botoes": [
            ["continuar10", "Ir para a cama e dormir lá"],
            ["continuar10", "Dormir no chão"],
        ]
    },
    'continuar10': {
        "conteudo": `Passa-se um tempo, você não sabe quanto, mas quando acorda, está escuro, mesmo com a janela aberta. 
        Então você se levanta. Depois de passar muito tempo sem comer, você escuta roncos vindo de si mesmo; logo você 
        vê uma tigela de sopa no chão provavelmente quem colocou lá foi sua irmã.</p>
        <img style="height: auto; width: 256px;" src="../img/porta_irma_dentro.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/sopa.png" alt="">`,
        "botoes": [
            ["tomarsopa1", "Tomar a sopa"],
            ["naocomer1", "Não tomar a sopa"],
        ]
    },
    'tomarsopa1': {
        "conteudo": `Você pega a tigela e tenta tomar, mas assim que toma se quer um pouco, cospe no chão o que estava na 
        sua boca. O gosto está horrível, não se sabe o porquê. Desanimado, você vai até sua cama e se deita; lá fica por 
        um tempão, sem conseguir dormir.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["continuar11", "Tentar dormir"],
        ]
    },
    'continuar11': {
        "conteudo": `Pelo horário, muito provavelmente todos da sua casa já devem estar dormindo; mas então você escuta 
        passos próximo ao seu quarto e logo em seguida uma pessoa abre a porta. Sua irmã trás para você comida numa folha 
        de jornal e sem falar nada deixa no chão e logo sai do quarto.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/porta_irma_dentro.png" alt="">`,
        "botoes": [
            ["comercomida1", "Comer a comida"],
            ["naocomer1", "Não comer a comida"],
        ]
    },
    'naocomer1': {
        "conteudo": `Você decide não comer nada. Sua fome aumenta, assim como a sede. Você começa a ter muitos pensamentos
        paralelos, e no fim, não conseguir pensar no que fazer. Em pé, você fica girando em círculos, indo até a janela e
        pensando em fugir; em deixar sua família para não terem mais problemas.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["fugirjanela1", "Fugir pela janela"],
            ["deitarcama1", "Deitar na cama"],
        ]
    },
    'deitarcama1': {
        "conteudo": `Você deita na sua cama. Seus pensamentos param, você fica fazendo nada por horas até ficar com sono.
        Você fecha o olho lentamente; sua visão fica preta e você vai perdendo a consciência aos poucos. Chega num momento,
        que seu corpo fala mais alto, seus intestinos não tem de onde tirar energia. Você acaba morrendo de 
        fome e desidratação.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["morrer1", "Continuar"],
        ]
    },
    'morrer1': {
        "conteudo": `<h1>O jogo acabou, você morreu por não comer ou beber algo.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregor_lapide.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'comercomida1': {
        "conteudo": `Você se levanta e vê que sua irmã trouxe restos de comida e alguns peticos para você. Você come uma 
        parte dessa comida, não conseguindo comer a comida toda pelo horrível gosto que ela tem. 
        <br> - Por que a comida está tão ruim mesmo estando como de costume?</p>
        <img style="height: auto; width: 256px;" src="../img/porta_irma_dentro.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["continuar12", "Continuar"],
        ]
    },
    'continuar12': {
        "conteudo": `Depois disso, você volta para a cama e lá fica. Essas mesmas coisas acontecem dia após dia. Sua irmã 
        leva restos de comida e você sempre come pouco, cada vez diminuindo a quantia que você comeu. É frequente as 
        conversas que as pessoas da sua casa têm sobre você, com elas se perguntando "O que fazer?", "Como fazer?" e "E o 
        dinheiro?". A economia da família era o que mais preocupava a todos, pois além de uma dívida a pagar, há uma 
        família para sustentar. 
        <br> Mesmo no quarto, você consegue escutar as pessoas falando mal de você.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_choro.gif" alt="">`,
        "botoes": [
            ["continuar13", "Continuar"],
        ]
    },
    'continuar13': {
        "conteudo": `Um mês de sofrência se passa. Você tem fome, medo, preocupação, ansiedade, tristeza etc; sabe-se que 
        você tem sido um peso para sua família, não conseguindo ajudar em nada, pelo contrário, só atrapalhando. As pessoas 
        da sua família já nem falam com você direito, até mesmo sua irmã está passando cada vez menos tempo com você.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["suicidio1", "Desistir de tudo"],
            ["continuar14", "Ficar deitado sem fazer nada"],
        ]
    },
    'suicidio1': {
        "conteudo": `Você está atrapalhando toda sua família, então você finalmente decide ajudar eles com alguma coisa. 
        Você pretende se matar, então se levanta da cama e sem hesitar, sai do quarto.</p>
        <img style="height: auto; width: 256px;" src="../img/porta_gregorp.png" alt="">`,
        "botoes": [
            ["suicidio2", "Ir para a cozinha"],
            ["suicidio3", "Ir para o terraço do prédio onde mora"],
        ]
    },
    'suicidio2': {
        "conteudo": `Você vai até sua cozinha e ninguém está nela, pelo horário, todos devem estar dormindo.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["pegarfaca1", "Procurar alguma lâmina"],
            ["produtoquimico1", "Procurar algum produto químico"],
        ]
    },
    'pegarfaca1': {
        "conteudo": `Você procura e acha uma faca de cortar carne muito afiada. Você sabe que isso vai ser doloroso, mas
        vai ajudar sua família. Você deixa a ponta da faca apontada para o seu pescoço. Mas antes de fazer algo, sua irmã
        aparece chorando.
        <br> - Gregor, não faça isso!</p>
        <img style="height: auto; width: 256px;" src="../img/faca.png" alt="">`, // FOTO FACA
        "botoes": [
            ["irterraco2", "Ir correndo ao terraço"],
            ["pedirajuda3", "Não se matar e pedir ajuda à sua irmã"],
            ["matarfaca1", "Se matar com a faca na frente de <br> sua irmã para ajudar a família"],
        ]
    },
    'matarfaca1': {
        "conteudo": `Mesmo com sua irmã na sua frente, você não hesita e se mata. Você ajudou sua família, mesmo que não
        seja da melhor maneira.</p>
        <h1>O jogo acabou, você se matou com uma faca.</h1>
        <img style="height: auto; width: 256px;" src="../img/faca.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregor_lapide.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`, // FACA FOTO
        "botoes": [
        ]
    },
    'irterraco2': {
        "conteudo": `Você vai correndo ao terraço do prédio, chega lá primeiro que sua irmã. Então consegue se matar sem
        que ela precise ver. Na beira do prédio, percebe que o lugar é realmente alto; ali, você toma sua decisão final.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_predio.png" alt="">`,
        "botoes": [
            ["pularterraco1", "Pular do terraço"],
            ["pedirajuda3", "Não se matar e pedir ajuda a sua irmã"],
        ]
    },
    'pularterraco1': {
        "conteudo": `Você pula, e tudo começa a ficar em câmera lenta, você percebe que você não tem mais salvação e 
        começa a chorar no meio da queda. 
        <br> - Família... eu amo vocês.`,
        "botoes": [
            ["morrerterraco1", "Continuar"], // GREGOR CHORANDO DE CABEÇA PARA BAIXO 
        ]
    },
    'produtoquimico1': {
        "conteudo": `Você procura e acha no armário água sanitária, que se você tomar, vai morrer provavelmente sem dores.
        Você sabe que vai morrer, mas vai morrer ajudando sua família. Você coloca o líquido num copo, e está prestes a 
        tomar. Mas antes de fazer algo, sua irmã aparece chorando.
        <br> - Gregor, não faça isso!</p>
        <img style="height: auto; width: 256px;" src="../img/agua.png" alt="">`, // ÁGUA SANITÁRIA
        "botoes": [
            ["irterraco2", "Ir correndo ao terraço"],
            ["pedirajuda3", "Pedir ajuda à sua irmã"],
            ["matarprodutoquimico1", "Tomar a água sanitária e morrer na frente <br> da sua irmã para ajudar sua família"],
        ]
    },
    'matarprodutoquimico1': {
        "conteudo": `Mesmo com sua irmã na sua frente, você não hesita e toma o produto químico. Você ajudou sua família, 
        mesmo que não seja da melhor maneira.</p>
        <h1>O jogo acabou, você se matou tomando água sanitária.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregor_lapide.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'suicidio3': {
        "conteudo": `Do seu quarto você vai direto para o topo do prédio de onde você mora; anda até a beira do prédio e 
        lá fica olhando. Na beira do prédio, percebe que o lugar é realmente alto; ali você deve tomar sua decisão.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_predio.png" alt="">`,
        "botoes": [
            ["irterraco1", "Se jogar do topo do prédio"],
            ["voltarquarto2", "Desistir dessa ideia e voltar ao seu quarto"],
        ]
    },
    'voltarquarto2': {
        "conteudo": `Você desiste dessa ideia e vai até o seu quarto. E então fica deitado na cama enquanto chora.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">`,
        "botoes": [
            ["continuar14", "Tentar dormir"],
        ]
    },
    'irterraco1': {
        "conteudo": `Você toma uma decisão. Mas antes de fazer algo, sua irmã aparece chorando.
        <br> - Gregor, não faça isso!</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_predio.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma_choro.gif" alt="">`, // IRMÃ CHORANDO
        "botoes": [
            ["pularterraco2", "Se jogar do terraço na frente da <br> sua irmã para ajudar a família"],
            ["pedirajuda3", "Não se matar e pedir ajuda a sua irmã"],
        ]
    },
    'pedirajuda3': {
        "conteudo": `Você muda de ideia, vai até sua irmã e dá um abraço nela. Ambos choram como bebês um no braço do
        outro. Sua irmã te leva ao seu quarto e ela vai até o dela.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_choro.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma_choro.gif" alt="">`, // IRMÃ CHORANDO
        "botoes": [
            ["continuar14", "Tentar dormir"],
        ]
    },
    'pularterraco2': {
        "conteudo": `- Irmã, eu te amo. Obrigado.
        <br> - Gregor! Não! - Grita sua irmã, caindo em lágrimas.
        <br> Você pula, e tudo começa a ficar em câmera lenta, você percebe que você não tem mais salvação e 
        começa a chorar no meio da queda.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_choro.gif" alt="">`, // GREGOR CHORANDO DE CABEÇA PARA BAIXO
        "botoes": [
            ["morrerterraco1", "Continuar"],
        ]
    },
    'morrerterraco1': {
        "conteudo": `<h1>O jogo acabou, você se matou pulando do terraço.</h1>
        <img style="height: auto; width: 256px;" src="../img/sangue_rua.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'continuar14': {
        "conteudo": `Você espera que algo aconteça, e mais dias se passam com a mesma rotina. Até que um dia, sua irmã vai 
        ao seu quarto junto de sua mãe, você está cansado, mas fica feliz por ver sua mãe novamente. Elas duas ficam 
        tentando levantar uma cômoda que tem no seu quarto; mas elas não conseguem pelo móvel ser muito pesado.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["falarmaeirma1", "Falar com elas"],
            ["continuar15", "Apenas observar elas"],
        ]
    },
    'falarmaeirma1': {
        "conteudo": `- Eu... eu amo vocês.
        <br> Você fala isso e se arrepende muito. Ambas te olham com desprezo, até parece que nem se importam com você.
        Você até para de olhar para elas depois disso, então fica só chorando na cama.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">`,
        "botoes": [
            ["continuar15", "Continuar"],
        ]
    },
    'continuar15': {
        "conteudo": `Depois de muito tempo, elas param de tentar tirar a cômoda e tiram outros móveis exceto a cama em que 
        você está deitado. Em todo esse período, você percebe sua mãe extremamente incomodada ao ficar no seu quarto. 
        Depois de tirar os móveis, elas duas ficam na sala discutindo o que fazer com os móveis.</p>
        <img style="height: auto; width: 256px;" src="../img/mae.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["ficarquarto1", "Continuar deitado"],
            ["irsala1", "Ir à sala falar com sua família"],
        ]
    },
    'ficarquarto1': {
        "conteudo": `Você fica no seu quarto, só olhando para o teto com uma grande tristeza.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["continuar18", "Continuar"],
            ["fugirjanela1", "Fugir pela janela da sua casa"],
        ]
    },
    'irsala1': {
        "conteudo": `Você sai do quarto tentando ver o que falam e se esconde ao lado de uma porta. Sua irmã percebe que 
        você está ali e fica fingindo que não lhe viu. Mas logo, sua mãe percebe e ela acaba soltando um berro de susto. 
        Isso chama a atenção do seu pai, que vai até a sala e depois de lhe ver, com uma cara fechada, ele anda lentamente 
        até você.</p>
        <img style="height: auto; width: 256px;" src="../img/porta_gregorp.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["continuar16", "Continuar"],
        ]
    },
    'continuar16': {
        "conteudo": `Esse é mesmo o seu pai? Ele está diferente; constantemente bravo desde sua transformação, enquanto 
        antes ele pouco se importava com a família. Vivia deitado ou sentado, raramente andando com a família. Agora, ele 
        está na sua frente, com uma cara que demonstra frustração.</p>
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["enfurecer1", "Você está bravo pelas constantes <br> frustações do seu pai. Por isso, ataca-o"],
            ["encarar1", "Ficar só olhando para seu pai"],
        ]
    },
    'encarar1': {
        "conteudo": `O seu pai está claramente bravo, ele, sem hesitar, te dá um soco no rosto, lhe derrubando de
        imediato. Com você no chão, o seu pai tira maçãs do bolso e começa a arremessar elas contra você. E então,
        novamente você está bem machucado por causa do seu pai.</p>
        <img style="height: auto; width: 256px;" src="../img/maca.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_machucado.gif" alt="">`,
        "botoes": [
            ["continuar17", "Continuar"],
        ]
    },
    'enfurecer1': {
        "conteudo": `O seu pai está claramente bravo, ele, sem hesitar e até mesmo antes que você fizesse algo, te dá um 
        soco no rosto, lhe derrubando de imediato. Com você no chão, o seu pai tira maçãs do bolso e começa a arremessar 
        elas em você enquanto lhe espancava muito. E então, novamente você está bem machucado por causa do seu pai.</p>
        <img style="height: auto; width: 256px;" src="../img/maca.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_machucado.gif" alt="">`,
        "botoes": [
            ["continuar17", "Continuar"],
        ]
    },
    'continuar17': {
        "conteudo": `Seu pai te bateu muito nessa noite, até parecia que ele nem se importava de você ser o filho dele.
        Você se machucou bastante, e perdendo até a capacidade de andar de forma normal por causa dos ferimentos.
        <br> A vida da família Samsa mudou completamente e virou de cabeça para baixo em míseros meses. A irmã agora
        é caixeira enquanto estuda; a mãe teve seu trabalho doméstico multiplicado por causa da demissão da criada
        e as despesas tiveram que ser diminuidas. 
        <br> Depois disso, seria importante ir dormir.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_machucado.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama.png" alt="">`,
        "botoes": [
            ["continuar18", "Dormir"],
        ]
    },
    'continuar18': {
        "conteudo": `Você acaba dormindo... mas não por muito tempo. Você é surpreendido por um alto barulho vindo da
        sala de estar e fica escutando murmuros da sua irmã e seu pai.</p>
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">`,
        "botoes": [
            ["ignorar1", "Ignorar o que falam"],
            ["irescutar1", "Se levantar e escutar a conversa pela porta"],
        ]
    },
    'ignorar1': {
        "conteudo": `<p style="font-size: xx-large;">Você não consegue ignorar por estar muito curioso.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt=""></p>`,
        "botoes": [
            ["irescutar1", "Se levantar e escutar a conversa pela porta"],
        ]
    },
    'irescutar1': {
        "conteudo": `- Eu não aguento mais pai! Nós temos que nos livrar dele agora! O Gregor não é mais ele mesmo. Faz
        tempo que ele deixou de ser, você está ciente disso. A gente tentou cuidar desse bicho até não aguentarmos mais;
        continuar cuidando dele não é mais algo humano! Se ele ainda fosse o meu irmão, ele saberia que seria muito melhor
        para nós se ele se fosse.
        <br> Grete diz isso em voz alta para o pai enquanto ele concorda.
        <br> - Temos que nos ver livres dele. - Diz sua irmã.</p>
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/pai.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/porta_gregorp.png" alt="">`,
        "botoes": [
            ["falarfamilia1", "Sair do quarto <br> e falar com eles"],
            ["fugirjanela1", "Fugir pela janela"],
            ["espiar1", "Tentar ver o que fazem"],
            ["suicidio4", "Se matar para ajudar a família"],
        ]
    },
    'falarfamilia1': {
        "conteudo": `Você sai do quarto, então de imediato eles param de conversar.
        <br> - Vocês querem fazer o que? - Você fala enquanto chora.
        <br>Sua irmã se vira na sua direção e, com uma cara frustrada, ela entra no seu quarto, faz algo que você não
        consegue prestar atenção e logo sai do quarto.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_choro.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["continuar19", "Ficar parado"],
            ["implorarajuda1", "Pedir ajuda à sua irmã"],
        ]
    },
    'suicidio4': {
        "conteudo": `Você decide então pôs fim a sua vida para ajudar a família. Você fica inquieto no quarto, sem saber
        se essa é a única opção. Você espera até todos estarem dormindo, então você decide o que vai realmente fazer.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["suicidio2", "Ir para a cozinha"],
            ["suicidio3", "Ir para o terraço do prédio onde mora"],
        ]
    },
    'espiar1': {
        "conteudo": `Você abre a porta lentamente, então vê a situação: sua mãe dormindo numa cadeira, Grete em pé, na
        frente do pai, que está sentado em uma poltrona. Você tenta ser silencioso, mas os dois que falavam param de
        falar ao ouvir rangidos da porta que você abriu.
        <br> Sua irmã se vira na sua direção e, com uma cara frustrada, ela entra no seu quarto, faz algo que você não
        consegue prestar atenção e logo sai do quarto.</p>
        <img style="height: auto; width: 256px;" src="../img/porta_gregorp.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["continuar19", "Ficar parado"],
            ["implorarajuda1", "Pedir ajuda à sua irmã"],
        ]
    },
    'continuar19': {
        "conteudo": `Você não faz nada, não consegue nem mesmo falar algo. Assim que Grete sai do quarto, ela fica na sua
        frente te encarando e te dá um empurrão.
        <br> Você cai no chão e ela rapidamente fecha a porta com força e tranca-a. Você está preso no seu quarto.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_choro.gif" alt="">`,
        "botoes": [
            ["aceitar1", "Aceitar que sua família não lhe quer mais."],
            ["fugirjanela2", "Tentar fugir de sua casa pela janela do seu quarto"], 
        ]
    },
    'fugirjanela2': {
        "conteudo": `Você tenta abrir a porta do seu quarto, ela está realmente fechada. Então logo vai até a janela.
        Quando você da conta, a janela está trancada com uma chave.
        <br> - Até que fim! Não vou mais ver essa aberração. - Fala Grete para o pai
        <br> Você começa a cair em lágrimas, pensando que só tem mais uma escolha.</p>
        <img style="height: auto; width: 256px;" src="../img/janela.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_choro.gif" alt="">`,
        "botoes": [
            ["aceitar1", "Aceitar que sua família não lhe quer mais."],
        ]
    },
    'aceitar1': {
        "conteudo": `Você se deita na sua cama enquanto cai em choro. Seus pais junto de sua irmã começam a falar de
        planos futuros que, claramente, você não está incluido.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">`,
        "botoes": [
            ["serabandonado1", "Aceitar a decisão da sua irmã"],
        ]
    },
    'serabandonado1': {
        "conteudo": `<h1>O jogo acabou, você foi abandonado pela família e morto depois de um tempo.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregorp_cama_choro.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregor_lapide.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'implorarajuda1': {
        "conteudo": `- Grete, minha irmã; por favor, me ajude!
        <br> - Cala a merda da boca, aberração. Você é a causa da desgraça na nossa família!
        <br> Sua irmã fala isso na sua frente, você fica em choque, sem nem saber como reagir.</p>
        <img style="height: auto; width: 256px;" src="../img/irma.gif" alt="">`,
        "botoes": [
            ["continuar19", "Continuar"],
        ]
    },
        'fugirjanela1': {
        "conteudo": `Você vai até a janela, fica olhando para a rua, então você se decide. Você vai fugir de casa.
        <br> Assim ocorre. De forma silenciosa e sorrateira, você abre a janela e passa por ela. Você anda pela rua, sem
        saber o seu rumo.</p>
        <img style="height: auto; width: 256px;" src="../img/janela.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/gregorp_rua.png" alt="">`,
        "botoes": [
            ["continuar23", "Ficar andando na rua para <br> longe de casa e do trabalho"],
        ]
    },
    'continuar23': {
        "conteudo": `Você fica andando para distante de tudo que conhece, para não ser achado. Você está com fome e sede;
        e o problema é que agora a chance de você perder seu emprego é de 100%. Você não sabe o que fazer; então para e
        olha ao redor da rua.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_rua.png" alt="">`,
        "botoes": [
            ["roubar2", "Ir para um carro estacionado e roubá-lo"],
            ["roubar1", "Ir numa loja de comida e roubar para comer"], 
            ["esconder1", "Se esconder em algum lugar longe de todos"],
        ]
    },
    'roubar2': {
        "conteudo": `Na rua, você vê um carro sem nada dentro, você se aproxima dele e percebe que consegue entrar nele 
        pelas janelas estarem abertas.</p>
        <img style="height: auto; width: 256px;" src="../img/carro.png" alt="">`, // CARRO
        "botoes": [
            ["roubar3", "Realmente roubar o carro e ir para muito longe"],
            ["esconder1", "Desistir dessa ideia e ir se <br> esconder em algum lugar longe de todos"], 
        ]
    },
    'roubar3': {
        "conteudo": `Você entra no carro, fica mexendo na fiação dele debaixo do volante para ligar ele. E, pelo incrível 
        que possa ser, você consegue. Você consegue ir para muito longe de onde estava com o carro, seguindo numa linha 
        reta em uma avenida. Depois de mais de oito horas dirigindo, você está a centenas quilômetros de distância da sua 
        casa e a gasolina do carro acaba.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">
        <img style="height: auto; width: 256px;" src="../img/carro.png" alt="">`, // CARRO
        "botoes": [
            ["continuar24", "Continuar"],
        ]
    },
    'continuar24': {
        "conteudo": `Você deixa o carro no acostamento e fica sentado no chão olhando para o pôr do sol.</p>
        <h1>O jogo acabou, você fugiu e está longe de casa.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregorp_deserto.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'roubar1': {
        "conteudo": `Você vai até uma coveniência próxima de você. Só de entrar na loja, você causa tumulto, as pessoas ficam
        susurrando, e com certeza é sobre você. Você fica na frente de uma estante de comida, pega um grande pacote e fica
        pronto para fugir.</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp.gif" alt="">`,
        "botoes": [
            ["roubar4", "Realmente roubar a comida"],
            ["continuar25", "Desistir da ideia e sair sem nada"],
        ]
    },
    'roubar4': {
        "conteudo": `Você sai correndo do estabelecimento, mas isso não dura muito tempo. Você é surpreendido por dois
        policiais armados no lado de fora. Eles tentam te prender.
        <br> - Não se mexa sua aberração!</p>
        <img style="height: auto; width: 256px;" src="../img/policial.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/policial_gregorp.png" alt="">`,
        "botoes": [
            ["reagirpolicia1", "Tentar fugir"],
            ["serpreso1", "Deixar te prenderem"]
        ]
    },
    'continuar25': {
        "conteudo": `Você desiste de roubar a loja, então guarda a comida e sai do local normalmente. Contudo, você é 
        pego de surpresa com dois policiais armados pensando que você é um ladrão e uma aberração. Eles tentam te 
        prender.
        <br> - Não se mexa sua aberração!</p>
        <img style="height: auto; width: 256px;" src="../img/policial.png" alt="">
        <img style="height: auto; width: 256px;" src="../img/policial_gregorp.png" alt="">`,
        "botoes": [
            ["reagirpolicia1", "Tentar fugir"],
            ["serpreso1", "Deixar te prenderem"]
        ]
    },
    'esconder1': {
        "conteudo": `Você fica andando pela cidade, até que encontra um local que dá para você ficar escondido. Não há
        ninguém nesse beco, mas você se lembra que pode se esconder debaixo de uma ponte próxima à um lago que tem na sua
        cidade.<br> - Não se mexa sua aberração!</p>
        <img style="height: auto; width: 256px;" src="../img/gregorp_rua.png" alt="">`,
        "botoes": [
            ["esconderbeco1", "Ficar no beco"],
            ["esconderponte1", "Ir se esconder debaixo<br> da ponte da cidade"],
        ]
    },
    'esconderbeco1': {
        "conteudo": `Você fica escondido no beco, vivendo de restos de comida que vê nas ruas. Mas você está ciente que um
        dia morrerá de fome ou sede.</p>
        <h1>O jogo acabou, você fugiu e se escondeu em um beco.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregorp_beco.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'esconderponte1': {
        "conteudo": `Você fica escondido debaixo da ponte, vivendo de restos de comida que vê nas ruas e de peixes no 
        lago. Mas você está ciente que um dia morrerá de fome ou sede.</p>
        <h1>O jogo acabou, você fugiu e se escondeu debaixo de uma ponte.</h1>
        <img style="height: auto; width: 256px;" src="../img/gregorp_ponte.png" alt="">
        <p>Acesse os créditos abaixo ou volte ao início do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`, // GREGOR DEBAIXO DA PONTE
        "botoes": [
        ]
    },
}