document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer   = document.querySelector('.tabheader__items'),
        tabMenueItems   = tabsContainer.querySelectorAll('.tabheader__item'),
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
  // End Tabs

  const deadline = '2020-10-18';

  function getTimeRemaining(endTime) {
    const t        = Date.parse(endTime) - Date.parse(new Date()),
          days     = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours    = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes  = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
      'total'   : t,
      'days'    : days,
      'hours'   : hours,
      'minutes' : minutes,
      'seconds': seconds
    };     
  }

  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer        = document.querySelector(selector),
          days         = timer.querySelector('#days'),
          hours        = timer.querySelector('#hours'),
          minutes      = timer.querySelector('#minutes'),
          seconds      = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      if(t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = getZero(0);
        hours.textContent = getZero(0);
        minutes.textContent = getZero(0);
        seconds.textContent = getZero(0);
      } else {
        days.textContent = getZero(t.days);
        hours.textContent = getZero(t.hours);
        minutes.textContent = getZero(t.minutes);
        seconds.textContent = getZero(t.seconds);
      }
    }
  }

  setClock('.timer', deadline);
  // End timer

  // function modal() {
  //   const modalBtns   = document.querySelectorAll('[data-modal-btn]'),
  //         modalWindow = document.querySelector('.modal'),
  //         closeModal  = document.querySelector('[data-modal-close]');

  //   const btnsClose = e => {
  //     e.preventDefault();

  //     e = e.target;
  //     if(e && e == closeModal || e == modalWindow) {
  //       modalWindow.style.display = "";
  //       modalWindow.removeEventListener('click', btnsClose);
  //       console.log(e + ' end');
  //     } else {
  //       console.log(e);
  //     }
  //   };

  //   const escClose = e => {
  //     e = e.code;

  //     if (e == 'Escape') {
  //       modalWindow.style.display = "";
  //       console.log(e + ' end');
  //       document.removeEventListener('keydown', escClose);
  //     } else {
  //       console.log(e);
  //     }
  //   };

  //   modalBtns.forEach(element => {
  //     element.addEventListener('click', e => {
  //       e.preventDefault();

  //       modalWindow.style.display = "block";

  //       modalWindow.addEventListener('click', btnsClose);
  //       document.addEventListener('keydown', escClose);
  //     });
  //   });
  // }

  // modal();

  const modalBtns   = document.querySelectorAll('[data-modal-btn]'),
        modalWindow = document.querySelector('.modal'),
        closeModal  = document.querySelector('[data-modal-close]'),
        htmlElement = document.documentElement;

  function hideModal () {
    const btnsClose = e => {
      e.preventDefault();
  
      e = e.target;
      if(e && e == closeModal || e == modalWindow) {
        // console.log(e + ' end');
        dropEvents();
      } else {
        // console.log(e);
      }
    };
  
    const escClose = e => {
      e = e.code;
  
      if (e == 'Escape') {
        // console.log(e + ' end');
        dropEvents();
      } else {
        // console.log(e);
      }
    };  

    function dropEvents () {
      modalWindow.style.display = "";
      htmlElement.style.overflow = "";
      modalWindow.removeEventListener('click', btnsClose);
      document.removeEventListener('keydown', escClose);
    }

    modalWindow.addEventListener('click', btnsClose);
    document.addEventListener('keydown', escClose);
  }
  
  function showModal() {
    modalBtns.forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();

        modalWindow.style.display  = "block";
        htmlElement.style.overflow = "hidden";

        hideModal();
      });
    });
  }

  showModal();

  // End modal

});