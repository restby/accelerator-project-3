const initNewsTabs = () => {
  const tabsControls = document.querySelectorAll('[data-news="tabs-control"]');
  const tabsElements = document.querySelectorAll('[data-news="tabs-content"]');

  if (tabsControls.length && tabsElements.length) {

    tabsControls.forEach((tabsControl) => {
      tabsControl.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTabId = e.target.getAttribute('data-tab');

        tabsControls.forEach((otherTabControl) => {
          otherTabControl.classList.toggle('is-active', otherTabControl === tabsControl);
        });

        tabsElements.forEach((tabsElement) => {
          const contentId = tabsElement.getAttribute('data-tab-content');
          tabsElement.classList.toggle('is-active', contentId === activeTabId);
        });
      });
    });
  }
};

export { initNewsTabs };
