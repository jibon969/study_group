
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled', 'shadow');
  } else {
    nav.classList.remove('scrolled', 'shadow');
  }
});

const swiper = new Swiper('.testimonial-slider', {
  loop: true,               // Infinite loop
  speed: 1000,              // Transition speed (1 second)
  autoplay: {
    delay: 5000,            // Time between slides (5 seconds)
    disableOnInteraction: false, // Keep sliding after user clicks
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Responsive settings
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1 }
  }
});