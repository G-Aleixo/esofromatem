// Função para fazer uma escolha
function escolha(opcao) {
    let conteudo = document.getElementById("conteudo");
    let resultado = document.getElementById("resultado");

    try {
        // Salva o estado atual no histórico
        history.pushState({
            conteudo: conteudo.innerHTML,
            resultado: resultado.innerHTML
        }, '', '');

        // Atualiza o conteúdo com base na escolha
        conteudo.innerHTML = construir_html(opcao);
    } catch (error) {
        conteudo.innerHTML = "<h1>Opção inválida!</h1>";
        resultado.innerHTML = "<p>Opção " + opcao + " não encontrada</p>";
        console.error(error);
    }
}

// Função para construir o HTML da escolha
function construir_html(opcao) {
    console.log(opcao);
    let html = "";

    if (choices_data[opcao]) {
        html += <p>${choices_data[opcao]["conteudo"]}</p>;

        const botoes = choices_data[opcao]["botoes"];

        if (botoes && botoes.length > 0) {
            botoes.forEach((botao, index) => {
                html += `
                    <button onclick="escolha('${botao[0]}')">
                        ${botao[1]}
                    </button><br>
                `;
            });
        }
    }

    return html;
}

// Função para lidar com o evento de navegação do navegador
window.onpopstate = function(event) {
    if (event.state) {
        document.getElementById('conteudo').innerHTML = event.state.conteudo;
        document.getElementById('resultado').innerHTML = event.state.resultado;
    } else {
        // Caso não haja estado, pode-se exibir uma mensagem ou voltar ao estado inicial
        alert('Não há mais estados para voltar.');
    }
};