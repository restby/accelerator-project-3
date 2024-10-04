// const initBurgerMenu = () => {
//   const burgerButton = document.querySelector('[data-element="nav__button"]');
//   const menu = document.querySelector('[data-element="menu"]');
//   // const body = document.body;
//   // const overlay = document.querySelector('.overlay');

//   // const setMenuTabIndex = (index) => {
//   //   const menuLinks = menu.querySelectorAll('a');
//   //   menuLinks.forEach((link) => {
//   //     link.tabIndex = index;
//   //   });
//   // };

//   const toggleMenu = () => {
//     burgerButton.classList.toggle('is-open');
//     // const isOpen = burgerButton.classList.toggle('is-open');
//     menu.classList.toggle('is-open');
//     // body.classList.toggle('no-scroll');
//     // overlay.classList.toggle('is-visible');
//     // setMenuTabIndex(isOpen ? 0 : -1);
//   };

//   const closeMenu = () => {
//     burgerButton.classList.remove('is-open');
//     menu.classList.remove('is-open');
//     // body.classList.remove('no-scroll');
//     // overlay.classList.remove('is-visible');
//     // setMenuTabIndex(-1);
//   };

//   burgerButton.addEventListener('click', () => {
//     toggleMenu();
//   });

//   menu.addEventListener('click', (event) => {
//     const target = event.target;
//     const submenu = target.nextElementSibling;

//     if (target.tagName === 'A' && submenu && submenu.classList.contains('nav__submenu-list')) {
//       target.classList.toggle('is-open');
//       // const isOpen = target.classList.toggle('is-open');
//       event.preventDefault();
//       submenu.classList.toggle('is-open');
//       // setMenuTabIndex(isOpen ? 0 : -1);
//     } else if (target.tagName === 'A') {
//       closeMenu();
//     }
//   });

//   // overlay.addEventListener('click', closeMenu);

//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       closeMenu();
//     }
//   });

//   // setMenuTabIndex(-1);
// };

// const openMenu = () => {
//   const button = document.querySelector('.nav__button');
//   const menu = document.querySelector('.nav__menu-list');
//   const subMenu = menu.querySelector('.nav__submenu-list');
//   const menuLinks = document.querySelectorAll('.nav__menu-link');
//   const subMenuLinks = subMenu.querySelectorAll('.nav__submenu-link');
//   const overlay = document.querySelector('.overlay');
//   const body = document.querySelector('body');

//   button.addEventListener('click', (e) => {
//     button.classList.toggle('is-open')

//     if (button.classList.contains('is-open')) {
//       button.setAttribute('aria-expanded', 'true')
//       menu.setAttribute('aria-hidden', 'false')
//       menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
//     } else {
//       button.setAttribute('aria-expanded', 'false')
//       menu.setAttribute('aria-hidden', 'true')
//       menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
//     }
//   })
// };

// export { openMenu };

const openMenu = () => {
  const button = document.querySelector('.nav__button');
  const menu = document.querySelector('.nav__menu-list');
  const menuLinks = document.querySelectorAll('.nav__menu-link');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  const toggleMenu = () => {
    button.classList.toggle('is-open');
    const isOpen = button.classList.contains('is-open');
    button.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    overlay.classList.toggle('is-visible', isOpen);
    body.classList.toggle('no-scroll', isOpen);
    menuLinks.forEach(link => link.setAttribute('tabindex', isOpen ? '0' : '-1'));
  };

  const closeMenu = () => {
    button.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-visible');
    body.classList.remove('no-scroll');
    menuLinks.forEach(link => link.setAttribute('tabindex', '-1'));
  };

  button.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && button.classList.contains('is-open')) {
      closeMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!link.classList.contains('has-submenu')) {
        closeMenu();
      }
    });
  });

  // Подменю
  const subMenuLinks = document.querySelectorAll('.nav__menu-link.has-submenu');
  subMenuLinks.forEach(link => {
    const subMenu = link.nextElementSibling;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = link.getAttribute('aria-expanded') === 'true';
      link.setAttribute('aria-expanded', !isOpen);
      subMenu.setAttribute('aria-hidden', isOpen);
    });

    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', !isOpen);
        subMenu.setAttribute('aria-hidden', isOpen);
      }
    });
  });
};

export { openMenu };
