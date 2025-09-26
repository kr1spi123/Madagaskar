document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevArrow = document.querySelector(".arrow.left");
  const nextArrow = document.querySelector(".arrow.right");

  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("is-active");
    });

    slides[index].classList.add("is-active");
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % totalSlides;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prevIndex);
  }

  prevArrow.addEventListener("click", function (e) {
    e.preventDefault();
    prevSlide();
  });

  nextArrow.addEventListener("click", function (e) {
    e.preventDefault();
    nextSlide();
  });

  let slideInterval = setInterval(nextSlide, 5000);

  const sliderContainer = document.querySelector(".slider");
  sliderContainer.addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
  });

  sliderContainer.addEventListener("mouseleave", function () {
    slideInterval = setInterval(nextSlide, 5000);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });
});
const reviews = document.querySelectorAll(".review");
const prevBtn = document.querySelector(".reviews .arrow.left");
const nextBtn = document.querySelector(".reviews .arrow.right");
let current = 0;

function showReviews() {
  reviews.forEach((review, i) => {
    review.style.display =
      i === current || i === current + 1 ? "block" : "none";
  });
}

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  current = Math.max(0, current - 2);
  showReviews();
});

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  current = Math.min(reviews.length - 2, current + 2);
  showReviews();
});

showReviews();
