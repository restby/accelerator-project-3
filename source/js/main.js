import { lazyLoadImages, removeFocusAfterClick } from '../js/modules/utils/utils';
import { initBurgerMenu } from '../js/modules/burger-menu';
import { initHeroSlider } from '../js/modules/sliders/hero-slider';
import { initProgramsSlider } from '../js/modules/sliders/programs-slider';
import { initReviewsSlider } from '../js/modules/sliders/reviews-slider';
import { initNewsTabs } from '../js/modules/tabs/init-news-tabs';
import { initNewsSlider } from '../js/modules/sliders/news-slider';
import { initFaqAccordions } from '../js/modules/accordions/faq-accordion';

window.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();
  initBurgerMenu();
  initHeroSlider();

  window.addEventListener('load', () => {
    removeFocusAfterClick();
    initProgramsSlider();
    initReviewsSlider();
    initNewsTabs();
    initNewsSlider();
    initFaqAccordions();
  });
});
