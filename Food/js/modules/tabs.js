// Start Tabs
function tabs() {
  const tabsContainer = document.querySelector('.tabheader__items'),
  tabMenueItems = tabsContainer.querySelectorAll('.tabheader__item'),
  tabContentItems = document.querySelectorAll('.tabcontent');

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
  tabMenueItems[item].classList.add('tabheader__item_active');

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

  if (e && e.classList.contains('tabheader__item') && !e.classList.contains('tabheader__item_active')) {
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