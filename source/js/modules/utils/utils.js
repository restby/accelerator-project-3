const lazyLoadImages = () => {
  if (document.querySelectorAll('img')) {
    const images = document.querySelectorAll('img');
    images.forEach((image, index) => {
      if (index !== 0) {
        image.setAttribute('loading', 'lazy');
      }
    });
  }
};

const setTopheroPagination = () => {
  const heroContainer = document.querySelector('.hero__container');
  const heroSlideContent = document.querySelector('.hero-slide__content');

  if (heroContainer && heroSlideContent) {
    const heroSlideContentRect = heroSlideContent.getBoundingClientRect();
    const heroContainerRect = heroContainer.getBoundingClientRect();

    const offset = heroSlideContentRect.top - heroContainerRect.bottom;

    heroContainer.style.position = 'relative';
    heroContainer.style.top = `${offset + 58}px`;
  }
};

const removeFocusAfterClick = () => {
  const buttons = document.querySelectorAll('button');

  if (buttons.length) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setTimeout(() => {
          button.blur();
        }, 100);
      });
    });
  }
};

const stylengSelectArrows = () => {
  const selects = document.querySelectorAll('select');
  if (!selects) {
    return;
  }

  selects.forEach((select) => {
    const parent = select.parentElement;

    select.addEventListener('focus', () => {
      parent.classList.add('is-open');
    });

    select.addEventListener('blur', () => {
      parent.classList.remove('is-open');
    });

    select.addEventListener('change', () => {
      parent.classList.remove('is-open');
    });
  });
};


export { lazyLoadImages, setTopheroPagination, removeFocusAfterClick, stylengSelectArrows };
