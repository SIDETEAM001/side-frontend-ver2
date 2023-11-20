
const swiper = new Swiper('.classAroundMeBanner', {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    scale: 0.9,
    slideShadows: false,
    stretch: -50,
  },
});