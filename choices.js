let choices_data = {
    'inicio': {
        "conteudo": `Mais uma noite se passa na sua vida, você acorda numa manhã, depois de sonhos inquietantes. Percebe-se que você está diferente; não reconhecendo a si mesmo. 
        Olhando para si mesmo, percebe sua diferente aparência. Uma cor completamente escura, não conseguindo identificar nada no seu corpo. Seus olhos arregalam com o pensamento 
        claro: "Eu não sou mais eu. O que eu sou? O que aconteceu comigo?"`,
        "botoes": [
            ["olharquarto1", "Olhar ao redor do quarto"],
            ["olharjanela1", "Olhar para a janela"],
            ["irdormir1", "Voltar a dormir"]
        ]
    },
    'olharquarto1': {
        "conteudo": `Nota que não é um sonho, o seu quarto está exatamente como de costume, dando para observar até mesmo a moldura de um recorte de uma revista com uma bela vista, 
        feita por si mesmo.`,
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
        "conteudo": `Você tenta voltar a dormir. Contudo, é impossível. Mesmo se esforçando para dormir, é uma tentativa falha. Fechando o olho dezenas de vezes, evitando ver seu 
        corpo completamente desfigurado. E também você se lembra do trabalho.<br> - Que trabalho cansativo escolhi! Viajar, dia sim, dia não. É um trabalho mais irritante do que o de 
        escritório, e ainda por cima há o desconforto de andar sempre preocupado com as ligações dos trens, com a cama e com as refeições irregulares. Diabos levem tudo isto! Mas eu 
        não posso reclamar muito; se meu chefe descobrir isso, serei despedido na hora... mas se bem que ser despedido desse trabalho de merda não seria tão ruim. Mas não faço isso 
        só por causa dos meus pais.<br> - Agora é bom eu me levantar, mesmo que não esteja muito bem. Meu trem parte às cinco, preciso estar lá o quanto antes. Ao olhar ao relógio que 
        fica em cima da cômoda, nota que já são 6h30. O relógio deveria tocar às quatro da manhã. Todavia, agora já era. O que fazer? O próximo trem passa às sete horas; mas para 
        chegar a tempo, deveria correr e muito. Mesmo que você consiga pegar o trem, ouvirá muitas reclamações do seu chefe. `,
        "botoes": [
            ["fingirdoenca1", "Se fingir de doente"],
            ["irtrem1", "Sair correndo para a estação de trem"],
            ["ficarcasa1", "Ficar deitado"]
        ]
    },
    'fingirdoenca': {
        "conteudo": ``,
        "botoes": [
            ["", ""],
        ]
    },
    'irtrem1': {
        "conteudo": `Você rapidamente se levanta e, sem comer nada, sai do quarto correndo e sai de casa. Ninguém da sua casa vê você saindo. Estando na rua, você percebe que muitas
        pessoas na rua te olham esranho, ficam susurrando coisas que você não entende.`,
        "botoes": [
            ["voltarcasa1", "Voltar para casa"],
            ["irtrem2", "Continuar indo até a estação de trem"]
        ]
    },
    'irtrem2': {
        "conteudo": `Você continua indo até a estação. Ao chegar lá, você vê todas pessoas se afastando, inclusive os funcionários. Quando vai à recepção da ferroviária, não tem 
        ninguém para te atender.`,
        "botoes": [
            ["voltarcasa1", "Ir para sua casa"],
            ["irtrem3", "Ficar esperando alguém"]
        ]
    },
    'irtrem3': {
        "conteudo": `Você fica esperando alguém chegar, mas você percebe que não há mais ninguém no local. Depois de um tempo, você é surpreendido pelo barulho de sirene do carro de
        polícia. Antes que você pudesse fazer algo, você é abordado por dois policiais armados e apontando suas armas na sua direção. 
        - Mãos na cabeça aberração!`,
        "botoes": [
            ["reagirpolicia1", "Tentar fugir"],
            ["serpreso1", "Ficar parado"]
        ]
    },
    'serpreso1': {
        "conteudo": `Você fica parado e os policiais te prendem. Você não entende bem o motivo. Você é lavado a prisão e fica numa sala, sozinho, afastado de todos. 
        <h1>O jogo acabou, você foi preso.</h1>
        <p>Acesse os créditos abaixo ou volte ao início  do jogo caso queira    :)</p>
        <button onclick="window.location.href = 'creditos.html'">Créditos</button>
        <button onclick="window.location.href = 'index.html'">Menu</button>`,
        "botoes": [
        ]
    },
}