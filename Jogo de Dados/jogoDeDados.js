let point = null; // Variável para armazenar o ponto
let apostasAtivas = false; // Variável para controlar se as apostas estão ativas

document.getElementById("playButton").addEventListener("click", function () {
    jogarDados();
});

document.getElementById("passLineButton").addEventListener("click", function () {
    fazerAposta("Pass Line");
});

document.getElementById("dontPassButton").addEventListener("click", function () {
    fazerAposta("Don't Pass");
});

function fazerAposta(tipoAposta) {
    if (!apostasAtivas) {
        apostasAtivas = true;
        document.getElementById("betButtons").style.display = "none"; // Oculta os botões de aposta
        const resultadoDiv = document.getElementById("resultado");
        
        // Simula o lançamento de dois dados
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        
        // Calcula a soma dos resultados
        const soma = dado1 + dado2;
        
        // Exibe os resultados dos dados
        resultadoDiv.innerHTML = `
            <span class="dice">${dado1}</span> +
            <span class="dice">${dado2}</span> = ${soma}
        `;
        
        if (tipoAposta === "Pass Line") {
            if (soma === 7 || soma === 11) {
                resultadoDiv.innerHTML += "<p>Jogador Ganhou na Linha de Passe!</p>";
            } else if (soma === 2 || soma === 3 || soma === 12) {
                resultadoDiv.innerHTML += "<p>Jogador Perdeu na Linha de Passe!</p>";
            } else {
                // O resultado se torna o ponto
                point = soma;
                resultadoDiv.innerHTML += `<p>Ponto é ${point}. Continue lançando.</p>`;
            }
        } else if (tipoAposta === "Don't Pass") {
            if (soma === 2 || soma === 3) {
                resultadoDiv.innerHTML += "<p>Jogador Ganhou na Don't Pass!</p>";
            } else if (soma === 7 || soma === 11) {
                resultadoDiv.innerHTML += "<p>Jogador Perdeu na Don't Pass!</p>";
            } else if (soma === 12) {
                resultadoDiv.innerHTML += "<p>Empate (Push) na Don't Pass!</p>";
            } else {
                // O resultado se torna o ponto
                point = soma;
                resultadoDiv.innerHTML += `<p>Ponto é ${point}. Continue lançando.</p>`;
            }
        }
    }
}


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

    // Verifica se estamos na fase de lançamento inicial ou na fase de ponto
    if (point === null) {
        if (soma === 7 || soma === 11) {
            resultadoDiv.innerHTML += "<p>Jogador Ganhou na Linha de Passe!</p>";
        } else if (soma === 2 || soma === 3 || soma === 12) {
            resultadoDiv.innerHTML += "<p>Jogador Perdeu na Linha de Passe!</p>";
        } else {
            // O resultado se torna o ponto
            point = soma;
            resultadoDiv.innerHTML += `<p>Ponto é ${point}. Continue lançando.</p>`;
        }
    } else {
        if (soma === point) {
            resultadoDiv.innerHTML += "<p>Jogador Ganhou fazendo o Ponto!</p>";
            point = null; // Reinicie o ponto
        } else if (soma === 7) {
            resultadoDiv.innerHTML += "<p>Jogador Perdeu, 7 lançado!</p>";
            point = null; // Reinicie o ponto
        } else {
            resultadoDiv.innerHTML += "<p>Continue lançando para fazer o ponto.</p>";
        }
    }
}
