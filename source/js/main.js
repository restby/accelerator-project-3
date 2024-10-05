import { lazyLoadImages, removeFocusAfterClick, stylengSelectArrows } from '../js/modules/utils/utils';
import { openMenu } from '../js/modules/burger-menu';
import { validateForms } from './modules/validate-forms';
import { initHeroSlider } from '../js/modules/sliders/hero-slider';
import { openModalWindow } from '../js/modules/open-modal';
import { initProgramsSlider } from '../js/modules/sliders/programs-slider';
import { initReviewsSlider } from '../js/modules/sliders/reviews-slider';
import { initNewsTabs } from '../js/modules/tabs/init-news-tabs';
import { initNewsSlider } from '../js/modules/sliders/news-slider';
import { initFaqAccordions } from '../js/modules/accordions/faq-accordion';

window.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();
  openMenu();
  initHeroSlider();

  window.addEventListener('load', () => {
    validateForms();
    openModalWindow();
    stylengSelectArrows();
    removeFocusAfterClick();
    initProgramsSlider();
    initReviewsSlider();
    initNewsTabs();
    initNewsSlider();
    initFaqAccordions();
  });
});
