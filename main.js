function escolha(opcao) {
    let conteudo = document.getElementById("conteudo");
    let resultado = document.getElementById("resultado");

    try {
        conteudo.innerHTML = choices_data[opcao];
    } catch (error) {
        // TODO: Não chega aqui
        conteudo.innerHTML = "<h1>Opção inválida!</h1>";
        resultado.innerHTML = "<p>Opção " + opcao + " não encontrada</p>";
    }
    
}