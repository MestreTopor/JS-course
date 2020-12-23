// Start Tabs
function tabs(containerSelector, menuItemSelector, contentItemsSelector, itemActiveSelector) {
  const tabsContainer = document.querySelector(containerSelector),
  tabMenueItems = tabsContainer.querySelectorAll(menuItemSelector),
  tabContentItems = document.querySelectorAll(contentItemsSelector);

  function addAnimation() {
  tabContentItems.forEach(item => {
    item.classList.add('fade-animation');
  });
  }

  function hideContentTabs() {
  tabMenueItems.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });

  tabContentItems.forEach(item => {
    item.classList.remove('fade-in');
    item.classList.add('fade-out');
    setTimeout(() => {
      item.classList.add('hide');
    }, 300);
  });
  }

  function showContentTabs(item = 0) {
  tabMenueItems[item].classList.add(itemActiveSelector.slice(1));

  setTimeout(() => {
    tabContentItems[item].classList.add('fade-in');
    tabContentItems[item].classList.remove('hide');
    setTimeout(() => {
      tabContentItems[item].classList.remove('fade-out');
    }, 300);
  }, 300);
  }

  addAnimation();
  hideContentTabs();
  showContentTabs();

  tabsContainer.addEventListener('click', e => {
  e = e.target;

  if (e && e.classList.contains(menuItemSelector.slice(1)) && !e.classList.contains(itemActiveSelector.slice(1))) {
    for (let i = 0; i < tabContentItems.length; i++) {
      if (tabMenueItems[i] == e) {
        hideContentTabs();
        showContentTabs(i);
      }
    }
  }
  });
}
export default tabs;
// End Tabs