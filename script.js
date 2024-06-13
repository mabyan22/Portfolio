document.addEventListener('DOMContentLoaded', () => {
    // Implementing clicking for the cards
    document.getElementById('personal-card').onclick = () => {
        document.getElementById('personal').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('professional-card').onclick = () => {
        document.getElementById('professional').scrollIntoView({ behavior: 'smooth' });
    };

    // Implementing the slideshow
    const slides = document.querySelectorAll('.slideshow-container img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); 

    // Implementing overlay and clickability for the projects
    const projectCards = document.querySelectorAll('.project-card .overlay');
    projectCards.forEach(overlay => {
        overlay.addEventListener('click', () => {
            const url = overlay.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});

