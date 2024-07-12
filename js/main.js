function escolha(opcao) {
    let conteudo = document.getElementById("conteudo");
    let resultado = document.getElementById("resultado");

    try {
        conteudo.innerHTML = construir_html(opcao)
    } catch (error) {
        conteudo.innerHTML = "<h1>Opção inválida!</h1>";
        resultado.innerHTML = "<p>Opção " + opcao + " não encontrada</p>";
        console.error(error);
    }
    
}

function construir_html(opcao) {
    console.log(opcao)
    let html = ""

    html += `<p>${choices_data[opcao]["conteudo"]}</p>`

    const botoes = choices_data[opcao]["botoes"]

    if (!(botoes === undefined || botoes.length == 0)) {
        botoes.forEach((botao, index) => {
            html += `
                <button onclick="escolha('${botao[0]}')">
                    ${botao[1]}
                </button><br>
            `;
        });
    }

    return html

}