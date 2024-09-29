export const initFaqAccordions = () => {
  const buttons = document.querySelectorAll('[data-faq="accordion-button"]');
  if (!buttons) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      const content = button.closest('.faq-item').querySelector('[data-faq="accordion-content"]');
      const isActive = button.classList.contains('is-active');

      if (isActive) {
        content.style.maxHeight = 0;
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }

      button.classList.toggle('is-active');
      content.classList.toggle('is-active');
      faqItem.classList.toggle('is-active');
    });
  });
};
