function cards() {
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
}
export default cards;