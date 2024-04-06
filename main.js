function escolha(opcao) {
    var conteudo = document.getElementById("conteudo");
    var resultado = document.getElementById("resultado");

    try {
        conteudo.innerHTML = choices_data[opcao];
    } catch (error) {
        conteudo.innerHTML = "<h1>Opção inválida!</h1>"; // Não funciona D:
        resultado.innerHTML = "<p>Opção " + opcao + " não encontrada</p>";
    }
    
}