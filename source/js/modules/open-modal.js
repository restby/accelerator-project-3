const openModalWindow = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const openModalBtn = document.querySelector('.about__link');
  const closeModalBtn = modal.querySelector('.modal__btn-close');

  const openModal = () => {
    modal.classList.add('modal--is-open');
    overlay.classList.add('is-visible');
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    modal.classList.remove('modal--is-open');
    overlay.classList.remove('is-visible');
    document.body.classList.remove('no-scroll');
  };

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  document.querySelectorAll('.modal form').forEach((form) => {
    form.addEventListener('submit', () => {
      if (form.checkValidity()) {
        closeModal();
      }
    });
  });
};

export { openModalWindow };
