document.addEventListener('DOMContentLoaded', function () {
    // Adicione um ouvinte de evento para os links com a classe "smooth-scroll"
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
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
  
  function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }
  const btfoto = document.getElementById("btfoto");
        const fto = document.getElementById("foto");
        let isImage1 = true;

        btfoto.addEventListener("click", () => {
            if (isImage1) {
                fto.src = "img/Clipped_image_20231026_002941.png";
            } else {
                fto.src = "img/Clipped_image_20231026_002935.png";
            }
            isImage1 = !isImage1; // Inverter o valor da variável
        });