/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising     = document.querySelector('.promo__adv'),
      comedyJanre     = document.querySelector('.promo__genre'),
      poster          = document.querySelector('.promo__bg'),
      promoList       = document.querySelector('.promo__interactive-list');

// advertising.remove(); // 1 

advertising.querySelectorAll('.promo__adv img').forEach(items => { // 1
  items.remove();
});

comedyJanre.textContent = 'ДРАМА'; // 2

poster.style.cssText = "background-image: url('./img/bg.jpg');"; // 3

movieDB.movies.sort();                          // 4
promoList.innerHTML = "";

// let i = 1;                                   // 4, 5
// for(let item of movieDB.movies) {
//   promoList.insertAdjacentHTML('beforeend',`
//     <li class="promo__interactive-item">
//     ${i}. ${item}
//       <div class="delete"></div>
//     </li>`
//   );
//   i++;
// }

// for(let i = 0; i < movieDB.movies.length; i++) { // 4, 5
//   promoList.insertAdjacentHTML('beforeend',`
//     <li class="promo__interactive-item">
//       ${i + 1}. ${movieDB.movies[i]}
//       <div class="delete"></div>
//     </li>`
//   );
// }

movieDB.movies.forEach((item, i) => {               // 4, 5
  promoList.innerHTML += `
  <li class="promo__interactive-item">
    ${i + 1}. ${item}
    <div class="delete"></div>
  </li>`;
});