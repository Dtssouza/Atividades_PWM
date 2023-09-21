document.getElementById("playButton").addEventListener("click", function () {
    jogarDados();
});

function jogarDados() {
    // Simula o lançamento de dois dados
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcula a soma dos resultados
    const soma = dado1 + dado2;

    // Exibe os resultados dos dados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <span class="dice">${dado1}</span> +
        <span class="dice">${dado2}</span> = ${soma}
    `;

    // Verifica se o jogador ganhou ou a casa ganhou
    if (soma === 7) {
        resultadoDiv.innerHTML += "<p>Jogador Ganhou!</p>";
    } else {
        resultadoDiv.innerHTML += "<p>Casa Ganhou!</p>";
    }

    // Adicione classes de estilo adicionais aqui, se desejar
}
