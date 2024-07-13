let choices_data = {
    'inicio': {
        "conteudo": `Mais uma noite se passa na sua vida, você acorda numa manhã, depois de sonhos inquietantes. Percebe-se
        que você está diferente; não reconhecendo a si mesmo. Olhando para si mesmo, percebe sua diferente aparência. Uma
        cor completamente escura, não conseguindo identificar nada no seu corpo. Seus olhos arregalam com o pensamento 
        claro: "Eu não sou mais eu. O que eu sou? O que aconteceu comigo?"</p>
        <img style="height: auto; width: 300px;" src="../img/Gregor T.gif" alt="">`,
        "botoes": [
            ["olharquarto1", "Olhar ao redor do quarto"],
            ["olharjanela1", "Olhar para a janela"],
            ["irdormir1", "Voltar a dormir"]
        ]
    },
    'olharquarto1': {
        "conteudo": `Nota que não é um sonho, o seu quarto está exatamente como de costume, dando para observar até mesmo
        a moldura de um recorte de uma revista com uma bela vista, feita por si mesmo.`,
        "botoes": [
            ["olharjanela1", "Olhar para a janela"],
            ["irdormir1", "Voltar a dormir"]
        ]
    },
    'olharjanela1': {
        "conteudo": `Ao se levantar da cama e ir para a janela, vê o céu fechado, com várias nuvens e respingos de chuva.`,
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
        isso só por causa dos meus pais.`,
        "botoes": [
            ["continuar1", "Continuar"]
        ]
    },
    'continuar1': {
        "conteudo": `- Agora é bom eu me levantar, mesmo que não esteja muito bem. Meu trem parte às cinco, preciso estar 
        lá o quanto antes. 
        <br> Ao olhar ao relógio que fica em cima da cômoda, nota que já são 6h30. O relógio deveria tocar às quatro da 
        manhã. Todavia, agora já era. O que fazer? O próximo trem passa às sete horas; mas para chegar a tempo, deveria 
        correr e muito. Mesmo que você consiga pegar o trem, ouvirá muitas reclamações do seu chefe.`,
        "botoes": [
            ["ficarcasa1", "Ficar deitado"],
            ["irtrem1", "Sair correndo para a estação de trem"],
        ]
    },
    'irtrem1': {
        "conteudo": `Você rapidamente se levanta e, sem comer nada, sai do quarto correndo e sai de casa. Ninguém da sua 
        casa vê você saindo. Estando na rua, você percebe que muitas pessoas na rua te olham esranho, ficam susurrando 
        coisas que você não entende.`,
        "botoes": [
            ["voltarcasa1", "Voltar para casa"],
            ["irtrem2", "Continuar indo até a estação de trem"]
        ]
    },
    'irtrem2': {
        "conteudo": `Você continua indo até a estação. Ao chegar lá, você vê todas pessoas se afastando, inclusive os 
        funcionários. Quando vai à recepção da ferroviária, não tem ninguém para te atender.`,
        "botoes": [
            ["voltarcasa1", "Ir para sua casa"],
            ["irtrem3", "Ficar esperando alguém"]
        ]
    },
    'irtrem3': {
        "conteudo": `Você fica esperando alguém chegar, mas você percebe que não há mais ninguém no local. Depois de um 
        tempo, você é surpreendido pelo barulho de sirene do carro de polícia. Antes que você pudesse fazer algo, você é 
        abordado por dois policiais armados e apontando suas armas na sua direção. <br> - Mãos na cabeça aberração!`,
        "botoes": [
            ["reagirpolicia1", "Tentar fugir"],
            ["serpreso1", "Ficar parado"]
        ]
    },
    'serpreso1': {
        "conteudo": `Você fica parado e os policiais te prendem depois de te baterem. Você não entende bem o motivo. Você 
        é lavado a prisão e fica numa sala, sozinho, afastado de todos. 
        <h1>O jogo acabou, você foi preso.</h1>
        <p>Acesse os créditos abaixo ou volte ao início  do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'reagirpolicia1': {
        "conteudo": `Você se mexe um pouco para o lado e se prepara para correr; mas antes que possa fazer qualquer 
        coisa <br> - Atira nessa aberração! <br> O policial atira em você, causando sua morte.
        <h1>O jogo acabou, você morreu para um policial.</h1>
        <p>Acesse os créditos abaixo ou volte ao início  do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    'voltarcasa1': {
        "conteudo": `Você percebe que quando você volta para casa, ainda há muitas pessoas mantendo distância e sempre
        sussurrando uma para a outra. Você finalmente chega na sua casa e pelo transtorno que houve, você vai direto
        para o seu quarto.`,
        "botoes": [
            ["ficarcasa1", "Continuar"],
        ]
    },
    'ficarcasa1': {
        "conteudo": `Estando em sua casa, mais você se perde nos pensamentos sobre o que fazer. Quando nota, são mais de 
        sete horas e realmente perdeu o horário de trabalho. Você então escuta batidas cautelosas na porta. Você então 
        percebe a voz de sua mãe falando "Gregor? Já são sete horas. Não tem que pegar o trem?"`,
        "botoes": [
            ["pedirajuda1", "Falar com sua mãe sobre o seu problema"], // não fiz
            ["continuar2", "- Sim, sim, obrigado, mãe, já vou levantar."],
        ]
    },
    'continuar2': {
        "conteudo": `Com isso, as pessoas da casa percebem que você ainda está em casa, então logo chega seu pai falando 
        com sua voz grossa e firme "Gregor,o que você tem?" 
        <br> Antes que possa responder sua irmã também fala com sua voz baixa e doce "Gregor? Não se sente bem? Precisa 
        de alguma coisa?"`,
        "botoes": [
            ["continuar3", "- Eu estou bem, quase pronto para sair."],
            ["deixarquieto1", "- Me deixem quieto!"], // não fiz
        ]
    },
    'continuar3': {
        "conteudo": `Seus pais saem, mas sua irmã continua na frente da porta. "Abra essa porta logo, Gregor." Fala ela
        depois de tentar abrir a porta e não conseguindo (pois está trancada).`,
        "botoes": [
            ["pedirajuda2", "Falar com sua irmã sobre o seu problema"], // não fiz
            ["irporta1", "Se levantar e ir até a porta"],
            ["ficardeitado1", "Continuar deitado"],
        ]
    },
    'irporta1': {
        "conteudo": `Relutante, você se levanta com seu corpo desfigurado e sem nenhuma figura de você mesmo. Por mais que 
        você ainda seja você; não se sente um humanoide. Tens dificuldade para se levantar, mas depois de um tempo, você 
        consegue. Quando vai em direção a porta, sua irmã jã não está lá do outro lado. Invés disso você escuta o barulho 
        da campanhia da sua casa tocando. Ninguém vai para a sua casa nesse horário, então você sabe que é alguém do seu 
        trabalho. A criada da sua casa vai abrir a porta.
        <br> - Bom dia.`,
        "botoes": [
            ["continuar4", "Continuar"],
        ]
    },
    'ficardeitado1': {
        "conteudo": `Você continua deitado com seu corpo desfigurado e sem nenhuma figura de você mesmo. Por mais que você 
        ainda seja você; não se sente um humanoide. Tens dificuldade até de se mexer. Você percebe que sua irmã não está 
        mais do outro lado da porta; mas logo você escuta o barulho da campanhia da sua casa tocando. Ninguém vai para a 
        sua casa nesse horário, então você sabe que é alguém do seu trabalho. A criada da sua casa vai abrir a porta.
        <br> - Bom dia.`,
        "botoes": [
            ["continuar4.2", "Continuar"],
        ]
    },
    'continuar4.2': {
        "conteudo": `Apenas por escutar isso vindo da porta da sua casa, você tem certeza que é o seu chefe. Você leva um
        susto, não esperava que isso ocorresse. Podia ser qualquer outra pessoa do trabalho; mas logo o chefe foi atrás de
        você.
        <br> - Onde está o senhor Samsa?
        <br> Fala o seu chefe enquanto é guiado pela criada e sua mãe`,
        "botoes": [
            ["continuar5", "Continuar"],
        ]
    },
    'continur4': {
        "conteudo": `Apenas por escutar isso vindo da porta da sua casa, você tem certeza que é o seu chefe. Pelo susto 
        disso, suas pernas ficam trémulas, você já não tem mais nada para se segurar; pelo desequilíbrio, você cai no chão 
        e faz um barulho. O tapete do quarto amorteceu o som, mas a sua cabeça bate no chão, fazendo você sentir dores.
        <br> - Algo caiu aí dentro. - Fala o chefe do trabalho enquanto anda para entrar na casa, em busca de você.`,
        "botoes": [
            ["continuar5", "Continuar"],
        ]
    },
    'continuar5': {
        "conteudo": `Sua irmã, de forma sorrateira vai até a porta do seu quarto te avisar "Gregor, aqui está o chefe do 
        escritório." Você está ciente disso, paralisado está, sem saber o que fazer. Você olha ao redor do quarto, enquanto 
        isso, o seu pai vai até a porta e fala "Gregor, está aqui o chefe do escritório e quer saber porque não pegou o 
        primeiro trem. Além disso, ele quer falar contigo pessoalmente. Abre essa porta. Com certeza não vai reparar na
        desarrumação do quarto."`,
        "botoes": [
            ["fugirjanela1", "Fugir pela janela"],  // não fiz
            ["fazernada1", "Continuar"],
        ]
    },
    'fazernada1': {
        "conteudo": `- Bom dia, senhor Samsa.
        <br> Fala o seu chefe tentando falar com você. E logo em seguida sua mãe fala com ele. 
        <br> - Ele não está bem, senhor, pode acreditar. Se ele não estivesse mal, nunca perderia o trem! O rapaz não pensa 
        em nada além do emprego. Quase me zango com a mania que ele tem de nunca sair à noite.`,
        "botoes": [
            ["continuar6", "- Já vou"],
            ["continuar6", "Continuar"], 
            ["fugirjanela1", "Fugir pela janela"],  // não fiz
        ]
    },
    'continuar6': {
        "conteudo": `O seu chefe fala: 
        <br> - Não imagino qualquer outra explicação, senhora. Espero que não seja nada grave. Embora, deva dizer que nós, 
        homens de negócios, feliz ou infelizmente, temos muitas vezes de ignorar qualquer ligeira indisposição, visto que 
        é preciso olhar pelo negócio.
        Após isso, seu pai questiona "O seu chefe pode entrar, Gregor?"`,
        "botoes": [
            ["abrirporta1", "Abrir a porta"],  // não fiz
            ["naoabrirporta1", "- Não vou abrir agora"],
            ["fugirjanela1", "Fugir pela janela"],  // não fiz
        ]
    },
    'naoabrirporta1': {
        "conteudo": `O chefe acabara por escutar você se recusando, então logo fala com uma voz alta. 
        <br> - Senhor Samsa, é bom você abrir essa porta, tenho muitos a conversar, seja sobre o seu trabalho, seja sobre 
        essa sua suposta doença, seja sobre o que você fala só com esses "sim" e "não" ou até mesmo sua falta de compromisso 
        com as suas vendas; e também sobre o que você e sua família devem fazer!"`,
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
        família. Não se preocupe senhor, eu estarei logo no escritório e então poderemos falar com mais calma.`,
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
        toda a situação.`,
        "botoes": [
            ["sairquarto1", "Sair do quarto"],
            ["continuardeitado1", "Continuar deitado"], // não fiz
            ["fugirjanela1", "Fugir pela janela"],  // não fiz
        ]
    },
    'sairquarto1': {
        "conteudo": `Você se levanta, e com dificuldades, acaba girando a chave da porta, destrancando-a.
        <br> O seu chefe fala "Ouçam, Gregor está dando a volta na chave."
        <br> Aos poucos você abre a porta para si, abrindo mesmo só metade dela, você vê seus pais e seu chefe encarando
        a ti com uma péssima feição. Eles só conseguem ver metade de sua cabeça e uma parte do seu torso, mas eles veêm
        sua figura: um homem humanoide completamente preto, conseguindo notar apenas a cor de seus olhos. `,
        "botoes": [
            ["continuar9", "Continuar"],
        ]
    },
    'continuar9': {
        "conteudo": `Sua mãe tem seus olhos aregalados, seu cabelo bagunçado e uma roupa velha. Ela põe suas mãos na boca, 
        tenta andar para frente mas cai de joelhos no chão. Ela começa a cair em lágrimas, sem nem falar uma palavra.
        <br> O seu pai cerrou os punhos com um ar cruel, como se quisesse obrigar Gregor a voltar para o quarto com um 
        murro; depois, olhou perplexo em torno da sala de estar, cobriu os olhos com as mãos e desatou a chorar, o peito 
        vigoroso sacudido por soluços.`,
        "botoes": [
            ["falarchefe1", "Falar com o chefe"],
            ["voltarquarto1", "Entrar de volta no quarto e fechar a porta"], // não fiz
        ]
    },
    'falarchefe1': {
        "conteudo": `- Chefe, estou pronto. Onde vamos? Ao escritório? No caminho podemos falar sobre tudo isso. Bem, eu 
        estava meio mal, mas agora já estou de pé e pronto para o meu trabalho de caixeiro viajante. Eu estou ciente que 
        somos perfeitamente profissionais e meu trabalho é muito bem visto pelas pesssoas da empresa, então, mesmo que 
        não esteja do meu melhor jeito, estou disposto a ir trabalhar! 
        <br> - Você fala de forma bem calma, por mais que esteja aflito pelo o que houve com seus pais.`,
        "botoes": [
            ["reacaochefe1", "Continuar"],
        ]
    },
    'reacaochefe1': {
        "conteudo": `O seu chefe anda lentamente para fora da sala enquanto você fala, mordendo eles os lábios, com os 
        olhos trémulos e evitndo olhar diretamente para você. Você sabe que ele não conseguiu prestar atenção em nada que
        disse. 
        <br> Seria ótimo se sua irmã estivesse aqui, ela é esperta e provavelmente te ajudaria; e o chefe que é um grande 
        mulherengo, iria com certeza cair nas palavras dela. Mas ela não está. Além disso, se apenas deixar o chefe ir, 
        seu trabalho na firma estaria em risco. O que fazer agora?`,
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
        para sair da casa e corre.`,
        "botoes": [
            ["falarchefe3", "Seguir ele para falar com ele"],
            ["chefeir1", "Deixar ele ir"],
        ]
    },
    'falarchefe3': {
        "conteudo": `Você vê o chefe saindo da sua casa e antes que pudesse fazer qualquer coisa, sua mãe começa a 
        gritar "Socorro, por amor de Deus, socorro!". Enquanto isso seu pai pega a sua bengala e fica balançando a 
        bengala para perto de você. "Gregor, para o quarto, já!".`,
        "botoes": [
            ["ficarparado2", "Ficar parado"], 
            ["irquarto1", "Ir ao seu quarto"],
        ]
    },
    'chefeir1': {
        "conteudo": `Você vê o chefe saindo da sua casa, sua mãe começa a gritar "Socorro, por amor de Deus, socorro!". 
        Enquanto isso seu pai pega a sua bengala e fica balançando a bengala para perto de você. "Gregor, para o quarto, 
        já!".`,
        "botoes": [
            ["ficarparado1", "Ficar parado"], 
            ["irquarto1", "Ir ao seu quarto"],
        ]
    },
    'ficarparado1': {
        "conteudo": `Seu pai andando aos poucos chega próximo de você e acaba até mesmo te batendo com a bengala e te 
        empurrando para próximo do seu quarto. "Gregor, vai!" ele grita. Enquanto você não vai, a bengala dele te 
        machuca bastante, com ela tendo manchas de sangue de seus machucados.`,
        "botoes": [
            ["irquarto1", "Ir ao quarto"],
        ]
    },
    'irquarto1': {
        "conteudo": `Você entra no seu quarto enquanto seu pai te acompanha e assim que coloca um pé no quarto, seu pai 
        te empurra e fecha a porta de forma brusca. Você acaba se sentindo cansado por toda essa confusão, mas ao mesmo 
        tempo, preocupação e medo. No chão, acaba dormindo e chorando.`,
        "botoes": [
            ["continuar10", "Ir para a cama e dormir lá"],
            ["continuar10", "Dormir no chão"],
        ]
    },
    'continuar10': {
        "conteudo": `Passa-se um tempo, você não sabe quanto, mas quando acorda, está escuro, mesmo com a janela aberta. 
        Então você se levanta. Depois de passar muito tempo sem comer, você escuta roncos vindo de si mesmo; logo você 
        vê uma tigela de sopa no chão provavelmente quem colocou lá foi sua irmã.`,
        "botoes": [
            ["tomarsopa1", "Tomar a sopa"],
            ["naocomer1", "Não tomar a sopa"],
        ]
    },
    'tomarsopa1': {
        "conteudo": `Você pega a tigela e tenta tomar, mas assim que toma se quer um pouco, cospe no chão o que estava na 
        sua boca. O gosto está horrível, não se sabe o porquê. Desanimado, você vai até sua cama e se deita; lá fica por 
        um tempão, sem conseguir dormir.`,
        "botoes": [
            ["continuar11", "Tentar dormir"],
        ]
    },
    'continuar11': {
        "conteudo": `Pelo horário, muito provavelmente todos da sua casa já devem estar dormindo; mas então você escuta 
        passos próximo ao seu qaurto e logo em seguida uma pessoa abre a porta. Sua irmã trás para você comida numa folha 
        de jornal e sem falar nada deixa no chão e logo sai do quarto.`,
        "botoes": [
            ["comercomida1", "Comer a comida"], // não fiz
            ["naocomer1", "Não comer a comida"],
        ]
    },
    'naocomer1': {
        "conteudo": `Você decide não comer nada. Sua fome aumenta, assim como a sede. Você começa a ter muitos pensamentos
        paralelos, e no fim, não conseguir pensar no que fazer. Em pé, você fica girando em círculos, indo até a janela e
        pensando em fugir; em deixar sua família para não terem mais problemas.`,
        "botoes": [
            ["fugirjanela1", "Fugir pela janela"],  // não fiz
            ["deitarcama1", "Deitar na cama"],
        ]
    },
    'deitarcama1': {
        "conteudo": `Você deita na sua cama. Seus pensamentos param, você fica fazendo nada por horas até ficar com sono.
        Você fecha o olho lentamente; sua visão fica preta e você vai perdendo a consciência aos poucos. Chega num momento,
        que seu corpo fala mais alto, seus intestinos não tem de onde tirar energia. Você acaba morrendo de 
        fome e desidratação.`,
        "botoes": [
            ["morrer1", "Continuar"],
        ]
    },
    'morrer1': {
        "conteudo": `<h1>O jogo acabou, você morreu por não comer ou beber algo.</h1>
        <p>Acesse os créditos abaixo ou volte ao início  do jogo caso queira jogar novamente :)</p>
        <button onclick="window.location.href = '../html/creditos.html'">Créditos</button>
        <button onclick="window.location.href = '../index.html'">Menu</button>`,
        "botoes": [
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    '': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
}