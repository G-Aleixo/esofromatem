function escolha(opcao) {
    var conteudoElement = document.getElementById("conteudo");
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = ""; // Limpa o conteúdo anterior

    switch (opcao) {
        case 1:
            conteudoElement.innerHTML =
            `
                <h1>Opção 2</h1>
                <div id="buttons">
                    <button onclick="escolha(4)">Escolha 4</button>
                    <button onclick="escolha(5)">Escolha 5</button>
                    <button onclick="escolha(6)">Escolha 6</button>
                </div>
            `;
            break;
        case 2:
            conteudoElement.innerHTML =
            `
                <h1>Opção 3</h1>
                <div id="buttons">
                    <button onclick="escolha(7)">Escolha 7</button>
                    <button onclick="escolha(8)">Escolha 8</button>
                    <button onclick="escolha(9)">Escolha 9</button>
                </div>
            `;
            break;
        case 3:
            conteudoElement.innerHTML =
            `
                <h1>Opção 4</h1>
                <div id="buttons">
                    <button onclick="escolha(10)">Escolha 10</button>
                    <button onclick="escolha(11)">Escolha 11</button>
                    <button onclick="escolha(12)">Escolha 12</button>
                </div>
            `;
            break;
        default:
            resultadoElement.innerHTML = "<h1>Opção inválida</h1>";
    }
}