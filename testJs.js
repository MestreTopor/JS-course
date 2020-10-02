"use strict";

// const box     = document.getElementById('box'),
//       circles = document.querySelectorAll('.circles'),
//       hearts  = document.querySelectorAll('.hearts'),
//       wrapper = document.querySelector('.hearts');

// box.style.backgroundColor = 'orange';                   // Добавление инлайновых стилей
// box.style.cssText = "width: 250px; border-radius: 5px"; // Добавление стилей в виде строки

// const div  = document.createElement('div');             // Создание блока
// const text = document.createTextNode('Hello World');    // Создание теката (без контейнера)
// div.classList.add('black');                             // Добавляет класс 'black'
// div.className('container div');                         // Добавляет класс 'container' и 'div' (старый способ)

// wrapper.append(div);                                    // Добавляет созданный div в начало wrapper
// wrapper.appendChild(div);                               // Добавляет созданный div в начало wrapper (старый способ)
// wrapper.prepend(div);                                   // Добавляет созданный div в конец wrapper
// wrapper.prependChild(div);                              // Добавляет созданный div в конец wrapper (старый способ)

// hearts[1].before(div);                                  // Добавляет созданный div перед вторым елементом hearts
// hearts[1].after(div);                                   // Добавляет созданный div после второго елемента hearts
// wrapper.insertBefore(div, hearts[1]);                   // Добавляет созданный div перед вторым елементом hearts (старый способ)

// hearts[2].remove();                                     // Удаляет узел hearts[2] из дерева DOM
// wrapper.removeChild(hearts[2]);                         // Удаляет узел hearts[2] из дерева DOM (старый способ)

// hearts[3].replaceWith(circles[0]);                      // Заменяет второй элемент hearts на первый элемент circles
// wrapper.replaceChild(circles[0], hearts[3]);            // Заменяет второй элемент hearts на первый элемент circles (старый способ)

// div.textContent = "Hello";                              // Добавляет текст в div

// div.insertAdjacentHTML('beforebegin', '<div><h2>Hello</h2></div'); // Добавляет html структуру перед div 
// div.insertAdjacentHTML('afterbegin', '<div><h2>Hello</h2></div');  // Добавляет html структуру в начало div
// div.insertAdjacentHTML('beforeend', '<div><h2>Hello</h2></div');   // Добавляет html структуру в конец div
// div.insertAdjacentHTML('afterend', '<div><h2>Hello</h2></div');    // Добавляет html структуру после div