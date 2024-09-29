document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const openModalBtn = document.querySelector('.about__link');
  const closeModalBtn = document.getElementById('modal-close');
  const modalForm = document.getElementById('modal-form');

  const openModal = () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
  };

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
  });
});
