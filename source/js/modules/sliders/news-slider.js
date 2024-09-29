import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initNewsSlider = () => {
  const newsSlider = document.querySelector('[data-slider="news-tab-slider"]');
  if (!newsSlider) return;

  const slides = Array.from(newsSlider.querySelectorAll('.swiper-slide'));
  const totalSlides = slides.length;
  const slidesToDuplicate = 12 - totalSlides;

  for (let i = 0; i < slidesToDuplicate; i++) {
    const clone = slides[i % totalSlides].cloneNode(true);
    newsSlider.querySelector('.swiper-wrapper').appendChild(clone);
  }

  const swapSlides = () => {
    const travelsSlide = newsSlider.querySelector('.news-slide--travels');
    const volunteeringSlide = newsSlider.querySelector('.news-slide--volunteering');
    const travelsIndex = Array.from(slides).indexOf(travelsSlide);
    const volunteeringIndex = Array.from(slides).indexOf(volunteeringSlide);

    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      if (travelsIndex > -1 && volunteeringIndex > -1) {
        newsSlider.querySelector('.swiper-wrapper').insertBefore(volunteeringSlide, travelsSlide);
      }
    } else {
      if (travelsIndex > volunteeringIndex) {
        newsSlider.querySelector('.swiper-wrapper').insertBefore(travelsSlide, volunteeringSlide);
      }
    }
  };

  window.addEventListener('resize', swapSlides);
  swapSlides();

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
        return `<button class="${className}" type="button">${index + 1}</button>`;
      },
    },
    watchOverflow: true,
    simulateTouch: true,
    grabCursor: true,
    speed: 500,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 4,
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
      init: function (swiper) {
        updatePagination(swiper);
        markFirstSlide(swiper);
      },
      slideChange: function (swiper) {
        updatePagination(swiper);
        markFirstSlide(swiper);
      },
    },
  });

  function updatePagination(swiper) {
    const totalSlides = swiper.slides.length;
    const currentIndex = Math.floor(swiper.activeIndex / swiper.params.slidesPerGroup);
    const paginationButtons = document.querySelectorAll('.news-tab__slider-bullet');
    const totalPages = Math.ceil(totalSlides / swiper.params.slidesPerGroup);

    paginationButtons.forEach((button, index) => {
      if (totalPages <= 4) {
        button.style.display = 'inline-block';
      } else {
        button.style.display = (index >= currentIndex - 1 && index <= currentIndex + 2) ? 'inline-block' : 'none';
      }
    });
  }

  function markFirstSlide(swiper) {
    swiper.slides.forEach((slide, index) => {
      slide.classList.remove('news-slide--main');
      if (index % swiper.params.slidesPerGroup === 0) {
        slide.classList.add('news-slide--main');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', initNewsSlider);


export { initNewsSlider };
