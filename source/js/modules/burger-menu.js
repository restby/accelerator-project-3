const openMenu = () => {
  const button = document.querySelector('.nav__button');
  const menu = document.querySelector('.nav__menu-list');
  const menuLinks = document.querySelectorAll('.nav__menu-link');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  const logo = document.querySelector('.page-header__logo');

  if (!button || !menu || !overlay || !logo) {
    return;
  }

  const toggleMenu = () => {
    button.classList.toggle('is-open');
    const isOpen = button.classList.contains('is-open');
    button.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    overlay.classList.toggle('is-visible', isOpen);
    body.classList.toggle('no-scroll', isOpen);
    menu.classList.toggle('is-open', isOpen);
    logo.classList.toggle('is-hidden', isOpen);
    menuLinks.forEach((link) => link.setAttribute('tabindex', isOpen ? '0' : '-1'));
  };

  const closeMenu = () => {
    button.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-visible');
    body.classList.remove('no-scroll');
    menu.classList.remove('is-open');
    logo.classList.remove('is-hidden');
    menuLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
  };

  button.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && button.classList.contains('is-open')) {
      closeMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('has-submenu')) {
        closeMenu();
      }
    });
  });

  const subMenuLinks = document.querySelectorAll('.nav__menu-link.has-submenu');
  subMenuLinks.forEach((link) => {
    const subMenu = link.nextElementSibling;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = link.getAttribute('aria-expanded') === 'true';
      link.setAttribute('aria-expanded', !isOpen);
      subMenu.setAttribute('aria-hidden', isOpen);
      link.classList.toggle('is-open', !isOpen);
      subMenu.classList.toggle('is-open', !isOpen);
    });

    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', !isOpen);
        subMenu.setAttribute('aria-hidden', isOpen);
        link.classList.toggle('is-open', !isOpen);
        subMenu.classList.toggle('is-open', !isOpen);
      }
    });
  });

  const subMenuItems = document.querySelectorAll('.nav__submenu-link');
  subMenuItems.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
};

export { openMenu };
