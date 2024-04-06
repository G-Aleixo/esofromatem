var choices_data = {
    "falta_escolha":
    `
    <h2>
    Está faltando o caminho de alguma escolha!
    </h2>

    `,
    "inicio_dormir":
    `
    <h2>
    Texto que indica que tudo continua do mesmo jeito ou alguma coisa assim <br>
    O alarme/trovão toca novamente, e você acorda com um pulo. <br>
    Parece que a sua situação não mudou
    </h2>

    <div id="buttons">
        <button onclick="escolha('inicio_dormir_gritar')">Devo gritar por ajuda desesperadamente na <br> esperança
            de que alguem da casa escute</button>
        <button onclick="escolha('inicio_dormir_despertador')">Vou tentar alcançar o despertador <br> com
            essa estranha pata mal articulada</button>
    </div>
    `,
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