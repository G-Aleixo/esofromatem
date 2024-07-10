var choices_data = {
    "falta_escolha":{
        "conteudo": "Está faltando o caminho de alguma escolha!",
        "botoes": []
    },
    "iniciacao": {
        "conteudo": `Você se chama Gregor Samsa, um homem que trabalha em um trabalho que odeia, sendo você um caixeiro viajante, viajando a todo momento, até mesmo quando não deseja. Você trabalha especificamente para pagar a dívida dos seus pais, dando todo o luxo possível para eles. Você ajuda toda sua família e até se sente bem por isso.
        Todos da sua família gostam da pessoa que você é.
        Você mora junto de seus pais e sua irmã chamada Grete`,
        "botoes": [["inicio_dormir", "Ir dormir"]]
    },
    "inicio_dormir": {
        "conteudo" : `Texto que indica que tudo continua do mesmo jeito ou alguma coisa assim <br>
        O alarme/trovão toca novamente, e você acorda com um pulo. <br>
        Parece que a sua situação não mudou`,
        "botoes": [
            ["inicio_dormir_gritar", "Devo gritar por ajuda desesperadamente na <br> esperança de que alguem da casa escute"],
            ["inicio_dormir_despertador", "Vou tentar alcançar o despertador <br> com essa estranha pata mal articulada"]
        ]
    },
    "inicio_gritar":
    `
    <h2>
    Você grita por ajuda desesperadamente, mas não ouve resposta. A sensação de desespero aumenta à medida que você percebe que está sozinho nesta situação.
    </h2>

    <div id="buttons">
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
    </div>
    `,
    "inicio_despertador":
    `
    <h2>
    Você tenta alcançar o despertador, mas a pata não consegue alcançar o botão de desligar. <br>
    O alarme toca novamente, e você percebe que não há como desligá-lo.
    </h2>

    <div id="buttons">
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
    </div>
    `,
    "inicio_dormir_gritar":
    `
    <h2>
    Insira texto aqui após dormir, acordar e gritar
    </h2>

    <div id="buttons">
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
    </div>
    `,
    "inicio_dormir_despertador":
    `
    <h2>
    Insira texto aqui após dormir, acordar e tentar alcançar o despertador
    </h2>

    <div id="buttons">
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
        <button onclick="escolha('falta_escolha')">falta escolha</button>
    </div>`
    // Adicione mais escolhas aqui
}

const tmp = {
    "falta_opçcao": {
        "conteudo":
            "Está faltando o caminho de alguma escolha!",
        "botoes": []
    }
}