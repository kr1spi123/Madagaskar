document.addEventListener('DOMContentLoaded', function() {
    // Элементы слайдера
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.arrow.left');
    const nextArrow = document.querySelector('.arrow.right');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Функция для показа текущего слайда
    function showSlide(index) {
        // Скрываем все слайды
        slides.forEach(slide => {
            slide.classList.remove('is-active');
        });
        
        // Показываем выбранный слайд
        slides[index].classList.add('is-active');
        currentSlide = index;
    }

    // Функция для следующего слайда
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % totalSlides;
        showSlide(nextIndex);
    }

    // Функция для предыдущего слайда
    function prevSlide() {
        let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
    }

    // Обработчики событий для стрелок
    prevArrow.addEventListener('click', function(e) {
        e.preventDefault();
        prevSlide();
    });

    nextArrow.addEventListener('click', function(e) {
        e.preventDefault();
        nextSlide();
    });

    // Автоматическое переключение слайдов (опционально)
    let slideInterval = setInterval(nextSlide, 5000);

    // Остановка автоматического переключения при наведении
    const sliderContainer = document.querySelector('.slider');
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', function() {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Добавляем обработчики для клавиатуры (опционально)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});