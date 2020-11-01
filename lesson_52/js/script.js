"use strict";

// Асинхронное выполнение AJAX
  // Первый способ
  const inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

  inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();                                          // Метод для создания запроса к JSON
    // request.open(method, url, async, login, pass);                              // .open - метод который собирает настройки для запроса на сервер
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8'); // Запрос на http заголовки
    request.send();                                                                // Если используется POST запрос, то в скобках нужно ввести содержимое запроса

    // request.addEventListener('readystatechange', () => {                        // Событие которое отслеживает статус готового запроса в текущий момент (срабатывет несколько раз)
    // if (request.readyState === 4 && request.status === 200) {                   

    request.addEventListener('load', () => {                                       // Событие которое срабатывает когда запрос готов
      if (request.status === 200) {
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / +data.current.usd).toFixed(2);
      } else {
        inputUsd.value = request.statusText;
      }
    });
    // status - Показывает статус запроса (200 - 500)
    // statusText - Текстовое описание ответа от сервера (ok, not found)
    // readyState - Содержит текущее состояние запроса (0 - 4)
    // response - Содержит ответ от сервера
  });
