let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Optional: Auto play
// setInterval(() => {
//     changeSlide(1);
// }, 5000);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});
