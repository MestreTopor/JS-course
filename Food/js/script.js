document.addEventListener('DOMContentLoaded', () => {
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

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
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
    clearTimeout(timerModal);
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

  const timerModal = setTimeout(() => {
    showModal();
  }, 8000);

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
        div.classList.addCLass('menu__item');
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

  const menu1 = new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню \"Фитнес\"",
    "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    12,
    28,
    '.menu .container',
    '.menu__item'
  );

  const menu2 = new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    15,
    28,
    '.menu .container',
    '.menu__item'
  );

  const menu3 = new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    15,
    28,
    '.menu .container',
    '.menu__item'
  );

  menu1.rendedr();
  menu2.rendedr();
  menu3.rendedr();
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
    postData(formItem);
  });
  
  function postData(form) {
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
      
      const formData = new FormData(form);                                  // Помогает сформировать все данные которые пришли с формы. form - это конкретная форма
      
      const object = {};
      formData.forEach(function (value, key) {                      // Преабразует в объект все данные что пришли из формы
        object[key] = value;
        // console.log(`Value - ${value}`);                                    // ???
        // console.log(`Key - ${key}`);                                        // ???
      });
      // console.log(formData.getAll('name'));                             // Получает содержимое всех инпутов с атрибутом name
      // console.log(formData);
      // const json = JSON.stringify(object);                              // Преабразует в JSON объект
      
      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');
      
      // request.setRequestHeader('Content-type', 'multipart/format-data'); // multipart/format-data формат для обычного POST запроса. ЕСЛИ ИСПОЛЬЗОВАТЬ .setRequestHeader() (format-data) вместе с new XMLHttpRequest(), ТО ЗАГОЛОВКИ УКАЗЫВАТЬ НЕ НУЖНО!      
      // request.setRequestHeader('Content-type', 'application/json');         // Формат для POST запроса в формате JSON
      
      // request.send(formData);                                        // Отправляет данные на сервер формата 'multipart/format-data' (php) (В скобках прописано тело формы)
      // request.send(json);                                               // Отправляет данные на сервер в формате 'application/json' (json)
      
      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();                                                 // Чистит форму от введеных данных (чистит value)
      //     // statusMessage.remove();
      //   } else {
      //     showThanksModal(message.failure);
      //     // statusMessage.remove();
      //   }
      //   statusMessage.remove();
      // });
      
      fetch('server.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(object)  
      })
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        form.reset();                                                 
        statusMessage.remove();
        
        // return new Promise((resolve, reject) => {
        //   if (data.ok) {
        //     resolve();
        // } else {
        //   return reject();
        // }                  
        // }).then(() => {
        //   showThanksModal(message.success);
        //   form.reset();                                                 
        //   statusMessage.remove();
        // }).catch(() => {
        //   console.log('Not found');
        //   console.log(data);
        //   showThanksModal(message.failure);
        //   statusMessage.remove();
        // });
        
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

});