'use strict';

// import Swiper JS
import Swiper from './swiper.min.js';
// import Swiper styles
import './swiper.min.css';

const swiper = new Swiper('.recall-slider', {
  //БУЛЛЕТЫ, ТЕКУЩЕЕ ПОЛОЖЕНИЕ, ПРОГРЕСС БАР
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: 'true',
    dynamicMainBullets: 5,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoplay: {
    delay: 1800,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  preloadImages: false,
  lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
  },
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        freeMode: true,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      481: {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
      }
  },
  grabCursor: true,
  autoHeight: false,
  slidesPerView: 'auto',
  loop: true,
  freeMode: true,
  effect: 'slide',
  followFinger: true,
  speed: 1800,
  spaceBetween: 0,
  disableOnInteraction: true,
  // centerInsufficientSlides: true,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
});

let sliderBanner = document.querySelector('.swiper-container');

sliderBanner.addEventListener('mouseenter', () => {
  swiper.params.autoplay.disableOnInteraction = false;
  swiper.params.autoplay.delay = 1800;
  swiper.autoplay.stop();
})
sliderBanner.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});

sliderBanner.addEventListener('touchstart', () => {
    swiper.params.autoplay.disableOnInteraction = false;
    swiper.params.autoplay.delay = 1800;
    swiper.autoplay.stop();
});

sliderBanner.addEventListener('touchend', () => {
    swiper.autoplay.start();
});