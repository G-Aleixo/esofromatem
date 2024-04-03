function botao_teste() {
    console.log("Botão clicado!");
    document.getElementById("botao_teste").innerHTML = "Botão clicado!";

    setTimeout(function() {
        document.getElementById("botao_teste").innerHTML = "Botão teste";
    }, 1000); // espera um segundo e reinicia o texto do botão
}