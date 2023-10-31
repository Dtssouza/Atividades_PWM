// -----------------------------------------animação

var typed = new Typed(".typing",{
    strings:[ "Web Designer", "You Tuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

document.addEventListener('DOMContentLoaded', function () {
    // Adicione um ouvinte de evento para os links da lista com a classe "nav"
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
            const targetElement = document.getElementById(targetId); // Obtém o elemento de destino

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
