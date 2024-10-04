import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initNewsSlider = () => {
  const newsSlider = document.querySelector('[data-slider="news-tab-slider"]');
  if (!newsSlider) {
    return;
  }

  const originalSlides = Array.from(newsSlider.querySelectorAll('.swiper-slide'));

  const duplicateSlides = () => {
    const wrapper = newsSlider.querySelector('.swiper-wrapper');
    wrapper.innerHTML = '';

    let slidesToDuplicate;
    if (window.innerWidth >= 1440) {
      slidesToDuplicate = 12;
    } else if (window.innerWidth >= 768) {
      slidesToDuplicate = 16;
    } else {
      slidesToDuplicate = 8;
    }

    for (let i = 0; i < slidesToDuplicate; i++) {
      const clone = originalSlides[i % originalSlides.length].cloneNode(true);
      wrapper.appendChild(clone);
    }
  };

  const swapSlides = () => {
    const travelsSlide = newsSlider.querySelector('.news-slide--travels');
    const volunteeringSlide = newsSlider.querySelector('.news-slide--volunteering');
    const slides = Array.from(newsSlider.querySelectorAll('.swiper-slide'));
    const travelsIndex = slides.indexOf(travelsSlide);
    const volunteeringIndex = slides.indexOf(volunteeringSlide);

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

  const swiperInstance = new Swiper(newsSlider, {
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
    simulateTouch: false,
    grabCursor: false,
    speed: 500,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
        grid: {
          rows: 2,
        },
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      }
    },
    on: {
      init: function (swiper) {
        updatePagination(swiper);
        markFirstSlide(swiper);
        setSlideStyles();
      },
      slideChange: function (swiper) {
        updatePagination(swiper);
        markFirstSlide(swiper);
      },
    },
  });

  window.addEventListener('resize', () => {
    duplicateSlides();
    swapSlides();
    swiperInstance.update();
    setSlideStyles();
  });

  duplicateSlides();
  swapSlides();
  setSlideStyles();

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

  function setSlideStyles() {
    const slides = document.querySelectorAll('.news-tab__slide');
    slides.forEach((slide) => {
      slide.style.width = 'auto';
      if (window.innerWidth < 1440) {
        slide.style.height = 'auto';
      } else {
        slide.style.height = '';
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', initNewsSlider);

export { initNewsSlider };
