const galeria = document.getElementById("galeria");
const detalhesGato = document.getElementById("detalhesGato");
const btnAnterior = document.getElementById("btnAnterior");
const btnProxima = document.getElementById("btnProxima");

let images = [];
let currentImageIndex = 0;

const fetchImages = (page) => {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      images = data;
      displayImage(currentImageIndex);
    })
    .catch((error) => {
      console.error("Erro ao buscar imagens de gatos:", error);
      galeria.innerHTML = "<p>Erro ao buscar imagens de gatos.</p>";
    });
};

const displayImage = (index) => {
  const image = images[index];
  if (image) {
    const imageHTML = `<img src="${image.url}" alt="Gato">`;
    galeria.innerHTML = imageHTML;

    // Adicione um ouvinte de evento para exibir os detalhes quando a imagem for clicada
    galeria.onclick = () => {
      displayImageDetails(image);
    };
  }
};

const displayImageDetails = (image) => {
  const { id, url, breeds } = image;
  const breedInfo = breeds.length > 0 ? breeds[0] : null;

  let detailsHTML = `<h2>Detalhes do Gato</h2>`;
  detailsHTML += `<img src="${url}" alt="Gato">`;
  if (breedInfo) {
    detailsHTML += `<p>Raça: ${breedInfo.name}</p>`;
    detailsHTML += `<p>Temperamento: ${breedInfo.temperament}</p>`;
    detailsHTML += `<p>Origem: ${breedInfo.origin}</p>`;
    detailsHTML += `<p>Expectativa de Vida: ${breedInfo.life_span}</p>`;
    detailsHTML += `<p><a href="${breedInfo.wikipedia_url}" target="_blank">Mais informações</a></p>`;
  }

  detalhesGato.innerHTML = detailsHTML;
};

btnAnterior.addEventListener("click", () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    displayImage(currentImageIndex);
  }
});

btnProxima.addEventListener("click", () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    displayImage(currentImageIndex);
  }
});

// Inicialize a busca de imagens quando a página carregar
fetchImages(0);
