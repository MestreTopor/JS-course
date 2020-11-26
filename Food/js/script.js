document.addEventListener('DOMContentLoaded', () => {
  function getZero(num) {
    return num <= 9 ? `0${num}` : num;
  }

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
  // End Tabs

  // Timer
  const deadline = '2020-12-18';

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      if (t.total <= 0) {
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

  // modal();

  const modalBtns = document.querySelectorAll('[data-modal-btn]'),
        modalWindow = document.querySelector('.modal'),
        htmlElement = document.documentElement;

  function eventModal() {
    const btnsClose = e => {
      e = e.target;
      if (e && e.getAttribute('data-modal-close') == "" || e == modalWindow) {
        dropEvents();
      }
    };

    const escClose = e => {
      e = e.code;
      if (e == 'Escape') {
        dropEvents();
      }
    };

    function dropEvents() {
      hideModal();
      modalWindow.removeEventListener('click', btnsClose);
      document.removeEventListener('keydown', escClose);
    }

    modalWindow.addEventListener('click', btnsClose);
    document.addEventListener('keydown', escClose);
  }

  function showModal() {
    // clearTimeout(timerModal);
    // window.removeEventListener('scroll', scrollModal);
    modalWindow.style.display = "block";
    htmlElement.style.overflow = "hidden";
    
    eventModal();
  }
  
  function hideModal() {
    modalWindow.style.display = "";
    htmlElement.style.overflow = "";
  }

  function addEventModal() {
    modalBtns.forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        showModal();
      });
    });
  }

  addEventModal();

  // const timerModal = setTimeout(() => {
  //   showModal();
  // }, 8000);

  const scrollModal = e => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal();
      window.removeEventListener('scroll', scrollModal);
    }
  };

  window.addEventListener('scroll', scrollModal);
  // End modal

  // Class for cards menue
  class MenuCard {
    constructor(src, alt, title, descr, price, transfer, selector, ...addCLass) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.transfer = transfer;
      this.selector = document.querySelector(selector);
      this.addCLass = addCLass;
      this.changeToUAH();
    }

    getArr() {
      const arr = [
        this.src,
        this.alt,
        this.title,
        this.descr,
        this.price,
        this.transfer,
        this.selector,
        this.addCLass
      ];

      return console.log(arr);
    }

    changeToUAH() {
      this.price = +this.price * +this.transfer;
    }

    rendedr() {
      const div = document.createElement('div');
      if (this.addCLass.length == 0) {
        div.classList.add('menu__item');
      } else {
        this.addCLass.forEach(addClass => div.classList.add(addClass.slice(1)));
      }
      div.innerHTML = `
        <img src="${this.src}" alt="${this.alt}">
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      // console.log(div);
      this.selector.append(div);
    }
  }

  const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  // getResource('http://localhost:3000/menu')
  // .then(data => {
  //   data.forEach(({ img, altimg, title, descr, price, transfer }) => { // Деструкторизация объекта ????????????????
  //     new MenuCard(img, altimg, title, descr, price, transfer, ".menu .container", ".menu__item").rendedr();
  //   });
  // });

  getResource('http://localhost:3000/menu')
    .then(data => createCard(data));

  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price, transfer = 26}) => {
      const div = document.createElement('div');
      div.classList.add('menu__item');
      div.innerHTML = `
      <img src="${img}" alt="${altimg}">
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price * transfer}</span> грн/день</div>
      </div>
    `;
      document.querySelector(".menu .container").append(div);
    });
  }

  // const menu1 = new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   "Меню \"Фитнес\"",
  //   "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  //   12,
  //   28,
  //   '.menu .container',
  //   '.menu__item'
  // );

  // const menu2 = new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   'Меню “Премиум”',
  //   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //   15,
  //   28,
  //   '.menu .container',
  //   '.menu__item'
  // );

  // const menu3 = new MenuCard(
  //   "img/tabs/post.jpg",
  //   "post",
  //   'Меню "Постное"',
  //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  //   15,
  //   28,
  //   '.menu .container',
  //   '.menu__item'
  // );

  // menu1.rendedr();
  // menu2.rendedr();
  // menu3.rendedr();
  // End class for cards menue

  // Start form   
  // POST Запрос
  const forms   = document.querySelectorAll('form'),
        message = {
          loading: 'icons/spinner.svg',
          success: 'Спасибо! Скоро мы с вами свяжемся',
          failure: 'Что-то пошло не так...'
        };

  forms.forEach(formItem => {
    bindPostData(formItem);
  });

  const postData = async (url, data) => {
    const rest = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await rest;
  };
  
  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.alt = 'Loading';
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);
      
      const formData = new FormData(form);
      
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        form.reset();                                                 
        statusMessage.remove();        
      })
      .catch((data) => {
        console.log('Not found');
        console.log(data);
        showThanksModal(message.failure);
        statusMessage.remove();
      })
      .finally(() => console.log('Finish!'));
      
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    
    prevModalDialog.classList.toggle('hide');
    
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.insertAdjacentHTML('beforeend', `
      <div class="modal__content">
        <div data-modal-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `);
    modalWindow.append(thanksModal);
    showModal();
    
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.toggle('hide');
      hideModal();
    }, 5000);
  }
  // End form		
  
  // Start slider
  const sliderContainer = document.querySelector('.offer__slider'),
        prevBtn         = sliderContainer.querySelector('.offer__slider-prev'),
        nextBtn         = sliderContainer.querySelector('.offer__slider-next'),
        currentNum      = sliderContainer.querySelector('#current'),
        totalNum        = sliderContainer.querySelector('#total'),
        sliderWrapper   = sliderContainer.querySelector('.offer__slider-wrapper'),
        slides          = sliderContainer.querySelectorAll('.offer__slide');
        
  function setSliderWindow() {
    let getWidth = 0,
        currentN = slides.length > 0 ? 1 : 0,
        totalN   = 0,
        slidePos = currentN;
        
    if (!currentN) {
      return false;
    }
      
    slides.forEach((item) => {
      getWidth += item.offsetWidth;
      totalN++;
    });

    function setPosition(num) {
      currentNum.textContent = getZero(num);
      totalNum.textContent = getZero(totalN);
    }
    setPosition(currentN);
    
    //Added css and animation for slider
    const slideWrapperCss = `
            display: flex;
            position: relative;
            width: ${getWidth}px;
            transition: all .3s ease-in-out;
          `,
          slideW = slides[0].offsetWidth;

    sliderContainer.style.cssText = `
      overflow: hidden;
    `;
    //--------------------

    function setSlide(position) {
      sliderWrapper.style.cssText = `
      ${slideWrapperCss}
      left: ${position}px
    `;
    }
    setSlide(getWidth-slideW);

    nextBtn.addEventListener('click', e => {
      e.preventDefault();

      if (slidePos >= totalN) {
        slidePos = 1;
        setPosition(slidePos);
        setSlide(getWidth - slideW);
      } else {
        slidePos++;
        setPosition(slidePos);
        setSlide(getWidth - (slideW * slidePos));
      }
    });

    prevBtn.addEventListener('click', e => {      
      e.preventDefault();

      if (slidePos <= 1) {
        slidePos = totalN;
        setPosition(totalN);
        setSlide(0);
      } else {
        slidePos--;
        setPosition(slidePos);
        const pos = getWidth / slidePos;
        setSlide(pos == getWidth ? getWidth - slideW : pos);
      }    
    });
  }

  setSliderWindow();

  // End slider																		

});