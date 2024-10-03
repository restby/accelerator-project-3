import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('[data-slider="reviews-slider"]');
  if (!reviewsSlider) {
    return;
  }

  new Swiper(reviewsSlider, {
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: '.reviews__slider-btn--next',
      prevEl: '.reviews__slider-btn--prev',
      disabledClass: 'is-disabled',
    },
    scrollbar: {
      el: '.reviews__scrollbar',
      horizontalClass: 'slider__scrollbar',
      draggable: true,
      dragClass: 'slider__drag-element',
      dragSize: '394px',
    },
    watchOverflow: false,
    simulateTouch: false,
    grabCursor: false,
    speed: 500,
    loop: false,
    slidesPerView: 3,
    spaceBetween: 32,
    autoHeight: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        scrollbar: {
          enabled: false,
        },
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
          enabled: true,
          dragSize: '326px',
        },
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,
        scrollbar: {
          enabled: true,
        },
      }
    },
  });
};

export { initReviewsSlider };
