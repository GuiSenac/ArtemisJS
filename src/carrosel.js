const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const cardWidth = 220; // largura do card + margens

// Função para mover o carrossel
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Botão anterior
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    }
});

// Botão próximo
nextButton.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarouselPosition();
    }
});

export default updateCarouselPosition;