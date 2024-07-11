var choices_data = {
    "falta_escolha":{
        "conteudo": `Está faltando o caminho de alguma escolha! </p>
        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&si=o9mAV2W7pCF3amPJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>`,
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
    "inicio_gritar": {
        "conteudo": `Você grita por ajuda desesperadamente, mas não ouve resposta. A sensação de desespero aumenta à medida que você percebe que está sozinho nesta situação.`,
        "botoes": [["falta_escolha", "falta escolha"]]
    },
    "inicio_despertador": {
        "conteudo": `
        Você tenta alcançar o despertador, mas a pata não consegue alcançar o botão de desligar. <br>
        O alarme toca novamente, e você percebe que não há como desligá-lo.`,
        "botoes": [["falta_escolha", "falta escolha"]]
    },
    "inicio_dormir_gritar": {
        "conteudo": `Insira texto aqui após dormir, acordar e gritar`,
        "botoes": [["falta_escolha", "falta escolha"]]
    },
    "inicio_dormir_despertador": {
        "conteudo": `Insira texto aqui após dormir, acordar e tentar alcançar o despertador`,
        "botoes": [["falta_escolha", "falta escolha"]]
    }
}