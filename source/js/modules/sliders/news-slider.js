import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initNewsSlider = () => {
  const newsSlider = document.querySelector('[data-slider="news-tab-slider"]');
  if (!newsSlider) {
    return;
  }

  const swiperContainer = newsSlider.querySelector('.swiper-wrapper');
  const slides = newsSlider.querySelectorAll('.swiper-slide');
  const totalSlides = 12;

  for (let i = 0; i < totalSlides - slides.length; i++) {
    const clone = slides[i % slides.length].cloneNode(true);
    swiperContainer.appendChild(clone);
  }

  new Swiper(newsSlider, {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.news-tab__slider-btn--next',
      prevEl: '.news-tab__slider-btn--prev',
      disabledClass: 'is-disabled',
    },
    pagination: {
      el: '.news-tab__slider-pagination',
      clickable: true,
      bulletElement: 'button type="button"',
      bulletClass: 'news-tab__slider-bullet',
      bulletActiveClass: 'news-tab__slider-bullet--is-active',
    },
    watchOverflow: false,
    simulateTouch: false,
    grabCursor: false,
    speed: 500,
    loop: false,
    spaceBetween: 32,
    breakpoints: {
      1440: {
        allowTouchMove: false,
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
      }
    },
  });
};

export { initNewsSlider };
