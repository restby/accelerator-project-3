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
        // setTimeout(() => {
        //   button.classList.add('is-active');
        // }, 400);
      });
    });
  }
};



export { lazyLoadImages, removeFocusAfterClick };
