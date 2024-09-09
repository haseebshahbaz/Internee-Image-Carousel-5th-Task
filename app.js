const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');
let counter = 0;
let size = document.querySelector('.carousel-container').clientWidth;

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

function nextSlide() {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

function prevSlide() {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

let autoPlayInterval = setInterval(nextSlide, 3000);

window.addEventListener('resize', () => {
    size = document.querySelector('.carousel-container').clientWidth;
});


function currentSlide(index) {
    counter = index - 1;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === counter) {
            dot.classList.add('active');
        }
    });
}
