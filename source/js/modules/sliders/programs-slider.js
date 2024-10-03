import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const initProgramsSlider = () => {
  const programsSlider = document.querySelector('[data-slider="programs-slider"]');
  if (!programsSlider) {
    return;
  }

  new Swiper(programsSlider, {
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: '.programs__slider-btn--next',
      prevEl: '.programs__slider-btn--prev',
      disabledClass: 'is-disabled',
    },
    scrollbar: {
      el: '.programs__scrollbar',
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
    breakpoints: {
      320: {
        slidesPerView: 1,
        scrollbar: {
          enabled: false,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        scrollbar: {
          enabled: true,
          dragSize: '326px',
        },
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 32,
        scrollbar: {
          enabled: true,
        },
      }
    },
  });
};

export { initProgramsSlider };
