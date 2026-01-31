document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     HERO SLIDER LOGIC
  ================================ */
  const hero = document.querySelector(".hero");
  const track = hero.querySelector(".hero__track");
  const slides = hero.querySelectorAll(".hero__slide");
  const buttons = hero.querySelectorAll(".hero__btn");

  let index = 0;
  let autoplay = true;
  let intervalId;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function startAutoplay() {
    if (prefersReducedMotion) return;
    intervalId = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(intervalId);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if (action === "next") nextSlide();
      if (action === "prev") prevSlide();

      if (action === "pause") {
        autoplay = !autoplay;
        btn.setAttribute("aria-pressed", String(!autoplay));
        btn.textContent = autoplay ? "❚❚" : "▶";
        autoplay ? startAutoplay() : stopAutoplay();
      }
    });
  });

  /* Pause on hover / focus */
  hero.addEventListener("mouseenter", stopAutoplay);
  hero.addEventListener("mouseleave", () => autoplay && startAutoplay());
  hero.addEventListener("focusin", stopAutoplay);
  hero.addEventListener("focusout", () => autoplay && startAutoplay());

  /* Touch swipe */
  let startX = 0;

  hero.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  hero.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  });

  /* Init */
  updateSlider();
  startAutoplay();
});
