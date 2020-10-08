/* 
Задания на урок: №30
  1) Удалить все рекламные блоки со страницы (правая часть сайта)

  2) Изменить жанр фильма, поменять "комедия" на "драма"

  3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
  Реализовать только при помощи JS

  4) Список фильмов на странице сформировать на основании данных из этого JS файла.
  Отсортировать их по алфавиту 

  5) Добавить нумерацию выведенных фильмов 
  
 Задания на урок: №33
  1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
  новый фильм добавляется в список. Страница не должна перезагружаться.
  Новый фильм должен добавляться в movieDB.movies.
  Для получения доступа к значению input - обращаемся к нему как input.value;
  P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

  2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

  3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

  4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
  "Добавляем любимый фильм"

  5) Фильмы должны быть отсортированы по алфавиту 
*/

'use strict';

const movieDB = {
  movies: [
  "Логан",
  "Лига справедливости",
  "Ла-ла лэнд",
  "Одержимость",
  "Скотт Пилигрим против"
  ]
};

const advertising     = document.querySelector('.promo__adv'),
      comedyJanre     = document.querySelector('.promo__genre'),
      poster          = document.querySelector('.promo__bg'),
      promoList       = document.querySelector('.promo__interactive-list'),
      filmInput       = document.querySelector('.adding__input'),
      checkbox        = document.querySelector('.add input[type="checkbox"]'),
      addBtn          = document.querySelector('.add button');
    

// Удаляет рекламму
advertising.querySelectorAll('.promo__adv img').forEach(items => { // 1
  items.remove();
});
// ---------------

// Меняет название жанра
comedyJanre.textContent = 'ДРАМА'; // 2
// ---------------

// Меняет постер
poster.style.cssText = "background-image: url('./img/bg.jpg');"; // 3
// ---------------

// Событие удаления фильма из списка по клику на иконку мусорного ведра
function deletEventFunc () {
  const deleteButtons = promoList.querySelectorAll('.delete');

  for (let item of deleteButtons) {
    item.addEventListener('click', deleteMovie);
  }    
}
// ---------------

// Добавляет фильмы из массива и сортирует их по имени
function addMovies() {
  const arr = movieDB.movies.sort();       // 4
  promoList.innerHTML = "";

  arr.forEach((item, i) => {               // 4, 5
    promoList.innerHTML += `
    <li class="promo__interactive-item">
      ${i + 1}. ${item.length > 21 ? item.substr(0, 21) + '...' : item}
      <div class="delete"></div>
    </li>`;
  });

  deletEventFunc();
}
// ---------------

// Добавляет название фильма из инпута
function addMovie (e) {
  e.preventDefault();

  if (filmInput.value == "" || filmInput.value == " " || filmInput.value == null || filmInput.value == undefined) {

    alert("Произошла ошибка, пожалуйста повторите попытку");

  } else {
      movieDB.movies.push(filmInput.value.toUpperCase());
      addMovies();
      filmInput.value = "";

      if (checkbox.checked) {
        console.log("Добавляем любимый фильм");
        checkbox.checked = false;
      }
  }
}

addBtn.addEventListener('click', addMovie);
// ---------------

// Удаляет название фильма из списка
function deleteMovie (e) {
  e = e.currentTarget;

  const keyOfArray = +e.parentElement.innerText.split(".")[0] - 1;
  delete movieDB.movies[keyOfArray];

  addMovies();
  e.parentElement.remove();
}
// ---------------

addMovies();