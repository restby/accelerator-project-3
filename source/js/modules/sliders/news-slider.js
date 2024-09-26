import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initNewsSlider = () => {
  const newsSlider = document.querySelector('[data-slider="news-tab-slider"]');
  if (!newsSlider) {
    return;
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
      bulletElement: 'button',
      bulletClass: 'news-tab__slider-bullet',
      bulletActiveClass: 'news-tab__slider-bullet--is-active',
      renderBullet: function (index, className) {
        return '<button class="' + className + '" type="button">' + (index + 1) + '</button>';
      },
    },
    watchOverflow: true,
    simulateTouch: true,
    grabCursor: true,
    speed: 500,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        grid: {
          rows: 2,
        },
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
      }
    },
    on: {
      init: function () {
        updatePagination(this);
        markFirstSlide(this);
      },
      slideChange: function () {
        updatePagination(this);
        markFirstSlide(this);
      },
    },
  });

  function updatePagination(swiper) {
    const totalSlides = swiper.slides.length;
    const currentIndex = Math.floor(swiper.activeIndex / 3);
    const paginationButtons = document.querySelectorAll('.news-tab__slider-bullet');
    const totalPages = Math.ceil(totalSlides / 3);

    paginationButtons.forEach((button, index) => {
      if (totalPages <= 4) {
        button.style.display = 'inline-block';
      } else {
        if (index >= currentIndex - 1 && index <= currentIndex + 2) {
          button.style.display = 'inline-block';
        } else {
          button.style.display = 'none';
        }
      }
    });
  }

  function markFirstSlide(swiper) {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      slide.classList.remove('news-slide--main');
      if (index % 3 === 0) {
        slide.classList.add('news-slide--main');
      }
    });
  }
};

export { initNewsSlider };
