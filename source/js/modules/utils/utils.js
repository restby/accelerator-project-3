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


export { lazyLoadImages, removeFocusAfterClick, stylengSelectArrows };
