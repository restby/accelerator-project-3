import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initHeroSlider = () => {
  if (!document.querySelector('[data-slider="hero-slider"]')) {
    return;
  }

  const heroSlider = document.querySelector('[data-slider="hero-slider"]');
  const paginationElement = document.querySelector('.hero__slider-pagination');

  const movePaginationToActiveSlide = () => {
    const activeSlide = document.querySelector('.swiper-slide-active .hero-slide__content');
    if (activeSlide && paginationElement) {
      activeSlide.insertBefore(paginationElement, activeSlide.firstChild);
    }
  };

  const initActiveSlide = () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) {
      return;
    }

    const allSlides = document.querySelectorAll('.hero-slide');
    allSlides.forEach((slide) => {
      slide.querySelectorAll('a').forEach((slideLink) => {
        slideLink.setAttribute('tabindex', '-1');
      });
    });

    activeSlide.querySelectorAll('a').forEach((slideLink) => {
      slideLink.setAttribute('tabindex', '0');
    });

    movePaginationToActiveSlide();
  };

  const addAriaAttributesToBullets = () => {
    const bullets = document.querySelectorAll('.hero__slider-bullet');
    bullets.forEach((bullet, index) => {
      bullet.setAttribute('role', 'button');
      bullet.setAttribute('aria-label', `слайд №${index + 1}`);
    });
  };

  new Swiper(heroSlider, {
    modules: [Pagination],
    watchOverflow: true,
    grabCursor: false,
    simulateTouch: false,
    speed: 500,
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
      bulletElement: 'button type="button"',
      bulletClass: 'hero__slider-bullet',
      bulletActiveClass: 'hero__slider-bullet--is-active',
    },
    on: {
      init: () => {
        initActiveSlide();
        addAriaAttributesToBullets();
      },
      slideChange: () => {
        initActiveSlide();
      },
      slideChangeTransitionStart: () => {
        initActiveSlide();
      },
    },
    breakpoints: {
      320: {
        pagination: {
          clickable: false,
          grabCursor: true,
          simulateTouch: true,
        },
      },
      768: {
        pagination: {
          clickable: false,
          grabCursor: true,
          simulateTouch: true,
        },
      },
      1440: {
        allowTouchMove: false,
        clickable: true,
      }
    },
  });
};

export { initHeroSlider };
