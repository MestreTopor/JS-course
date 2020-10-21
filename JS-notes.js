//Математические операции
	console.log(2 ** 3); // 2 в 3-ий степени (8). Доступно с версии es7

//Строчные методы:	
	const text = "13.3";
	
	console.log(parseInt(text));   // Вернет 13 (превратиться number)	
	console.log(parseFloat(text)); // Вернет 13.3 (превратиться number)
	
	
//Свойства объектов:	
	const objectName = {
		name: "Alex",
		age:  13
	};
	
	console.log(Object.keys(objectName)); // Вернет массив ['Alex', 13] для тогла чтобы можно было подсчитать колличество свойств в объекте с помощью .length
	
	
	const cloneObjectName = Object.assign(objectName, {country: "USA"}); // Создает ссылку на объект objectName и добавляет свойство country: "USA" 
                                                                       // можно записать Object.assign({}, objectName) для того чтобы создать поверхносную копию.
	
	console.log(cloneObjectName); // Выведет {name: "Alex", "age": 13, "country": "USA"}

//Свойства:
	console.log(document.documentElement.clientWidth);             // Возврашает ширину элемента (с padding, без полосы прокрутки)
	console.log(document.documentElement.clientHeight);            // Возврашает высоту элемента (с padding, без полосы прокрутки)

	console.log(document.documentElement.offsetWidth);             // Возврашает ширину элемента c учетом всех отступов и полосы прокрутки
	console.log(document.documentElement.offsetHeight);            // Возврашает высоту элемента c учетом всех отступов и полосы прокрутки

	console.log(document.documentElement.scrollLeft);              // Возвращает сколько было проскролено по горизонтали в пикселях
	console.log(document.documentElement.scrollTop);               // Возвращает сколько было проскролено по вертикали в пикселях
	console.log(window.pageXOffset);              								 // Аналог scrollLeft существует для старых версий хрома (работает только с window)
	console.log(window.pageYOffset);               								 // Аналог scrollTop существует для старых версий хрома (работает только с window)

	console.log(document.documentElement.getBoundingClientRect()); // Возвращает объект со всеми координатами

	window.scrollBy(10, 400); 																		 // Скролит от текущего положения по оси X на 10px и по оси Y 400px 
	window.scrollTo(10, 400); 																		 // Скролит от положения текущей страницы, а не положения по оси X на 10px и по оси Y 400px 
	
//Методы:	
	console.dir(objectName); 																			 // Позволяет увидеть все свойства объекта
	console.log(document.querySelector('.btn').matches('.black')); // Проверяет есть ли у элемента .btn класс .black

	console.log(window.getComputedStyle(document.body));           // Получение всех стилей элемента (стили идут из css не учитиывает инлайновые)
	console.log(window.getComputedStyle(document.body, ":after")); // Получение всех стилей псевдо элемента
	
	let iSec = 1;
	function timeOutFunc () {
		if(iSec <= 5) {
			console.log(`Time out text is worked ${iSec} times`);
			iSec++;
		} else {
			console.log(`Timer stopped after ${iSec} second`);
			clearInterval (timeInterval);															// Прекращение вункции с интервалом
		}	
	}
	const timeInterval = setInterval(timeOutFunc, 1000);					// Запуск функции с интервалом

	const timeOutStart = setTimeout(() => {												// Старт таймера
		console.log('Timer has worked');			
	}, 3000);
	clearTimeout(timeOutStart);																		// Прекращение таймаута

//Циклы: 	
	for (let key in objectName) {					   			             // "in" - перебирает объекты, а "of" - массивы	
		console.log(`Ключь ${key} значение ${objectName[key]}`); // Вернет: "Ключь name значение Alex"																                             
	}
	
	const numbers = [2,3,4,8];
	
	numbers.forEach(function(item, key, arr) {                 // Принемает 3 аргумента: 1 - значение, 2 - ключ, содержимое массива (не работает с объектами)
	
		console.log(`${item} : ${key} внутри массива ${arr}`);
		
	});
	
	
//Операторы:	
	const nameObject = {
		name1: "Vanya",
		name2: "Sanya",
		name3: "Vovka"
	};
	
	console.log(nameObject); // { name1: 'Vanya', name2: 'Sanya', name3: 'Vovka' }
	
	delete nameObject.name3; // Удалит name3 у объекта nameOgject
	
	console.log(nameObject); // { name1: 'Vanya', name2: 'Sanya' }
	
	//------------
	
	console.log(2 && 1 && null && 0 && undefined); // && - останавливается на false, а || останавливается на true
	
	//------------
	
	let a = 1;
	
	a = a + 1; // 2
	a += 1; 	 // 3
	
	//------------
	
	
//Новые фишкa JS es6 и выше
	
	const arrowsFunction = () => { 	// Стрелочная функция
		return "Hello World!";
	};

	console.log(arrowsFunction());
	
	//--------------------
	
	const video = ['youtube', 'vimeo', 'pornhub'],
		blogs = ['wordpress', 'livejournal', 'blogger'],
		internet = [...video, ...blogs, 'instagram']; // ... раскрывает массивы и объекты

	console.log(internet); // Вернет [ 'youtube', 'vimeo', 'pornhub', 'wordpress', 'livejournal', 'blogger', 'instagram' ]
	
	//--------------------
	
  	a = 1;
		let b = 1;

		console.log(!!(a && b)); // !! - превращает в булевый тип данных
		console.log((a && b));	 
	
	//--------------------
	
	
	//Прототипирование

	const soldier = {
	  health: 400,
	  armor: 100,
	  sayHello: () => {
		  console.log("Hello!");
	  }
	};

	// const john = {
	//   helth: 100,
	//   lifes: 3
	// };
	// john.__proto__ = soldier; // Старый способ установки прототипа к существующему объекту

	// Object.setPrototypeOf(john, soldier); // Новый способ установки прототипа к существующему объекту

	const john = Object.create(soldier); // Создание и добавление прототипа к новому объекту

	john.helth = 100;
	john.lifes = 3;

	console.log(Object.getPrototypeOf(john)); // Вернет ссылку на прототип soldier

	console.log(john.armor);
	
	//--------------------
	
	//Действия с элементами на странице
	
	const box     = document.getElementById('box'),
        circles = document.querySelectorAll('.circles'),
        hearts  = document.querySelectorAll('.hearts'),
        wrapper = document.querySelector('.hearts');

	box.style.backgroundColor = 'orange';                     // Добавление инлайновых стилей
	box.style.cssText = "width: 250px; border-radius: 5px";   // Добавление стилей в виде строки

	const div  = document.createElement('div');               // Создание блока
	const textHello = document.createTextNode('Hello World'); // Создание теката (без контейнера)
	div.classList.add('black');                               // Добавляет класс 'black'
	div.className('container div');                           // Добавляет класс 'container' и 'div' (старый способ)

	wrapper.append(div);                                      // Добавляет созданный div в начало wrapper
	wrapper.appendChild(div);                                 // Добавляет созданный div в начало wrapper (старый способ)
	wrapper.prepend(div);                                     // Добавляет созданный div в конец wrapper
	wrapper.prependChild(div);                                // Добавляет созданный div в конец wrapper (старый способ)

	hearts[1].before(div);                                    // Добавляет созданный div перед вторым елементом hearts
	hearts[1].after(div);                                     // Добавляет созданный div после второго елемента hearts
	wrapper.insertBefore(div, hearts[1]);                     // Добавляет созданный div перед вторым елементом hearts (старый способ)

	hearts[2].remove();                                       // Удаляет узел hearts[2] из дерева DOM
	wrapper.removeChild(hearts[2]);                           // Удаляет узел hearts[2] из дерева DOM (старый способ)

	hearts[3].replaceWith(circles[0]);                      // Заменяет второй элемент hearts на первый элемент circles
	wrapper.replaceChild(circles[0], hearts[3]);            // Заменяет второй элемент hearts на первый элемент circles (старый способ)

	div.textContent = "Hello";                              // Добавляет текст в div

	div.insertAdjacentHTML('beforebegin', '<div><h2>Hello</h2></div'); // Добавляет html структуру перед div 
	div.insertAdjacentHTML('afterbegin', '<div><h2>Hello</h2></div');  // Добавляет html структуру в начало div
	div.insertAdjacentHTML('beforeend', '<div><h2>Hello</h2></div');   // Добавляет html структуру в конец div
	div.insertAdjacentHTML('afterend', '<div><h2>Hello</h2></div');    // Добавляет html структуру после div
	
	//--------------------
  
  console.log(document.head);                                                   // Обращение к head
  console.log(document.documentElement);                                        // Обращение к html 
  console.log(document.body.childNodes);                                        // Обращается ко всем узлам body (родитель) (.childElements не существует в js) 
  console.log(document.body.firstChild);                                        // Обращение к первому ребенку (может быть текстовым узлом)
  console.log(document.body.firstElementChild);                                 // Обращение к первому элементу
  console.log(document.body.lastChild);                                         // Обращение к последнему ребенку (может быть текстовым узлом)
  console.log(document.body.lastElementChild);                                  // Обращение к последнему элементу

  console.log(document.querySelector('p').parentNode.parentNode);               // Обращение к родителю и его родителю (может быть текстовым узлом)
  console.log(document.querySelector('p').parentElement);                       // Обращение к родитительскому элементу

  console.log(document.querySelector('[data-current="3"]'));                    // Обращение к атрибуту
  console.log(document.querySelector('[data-current="3"]').nextSibling);        // Обращение к следующему соседу (может быть текстовым узлом)
  console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Обращение к следующему соседнему элементу

  let childElements = [];

  for (let key of document.body.childNodes) {                                   // Выборка для елементов вместо не существующегося метода .childElements
    if (key.nodeName == "#text") {
        continue;
    }
    
    childElements.push(key);
  }

  console.log(childElements);

	//--------------------

	//События
	document.addEventListener('DOMContentLoaded', (e) => { // Запускает код, когда загрузился DOM
		console.log('Hello World!');
		console.log(e.touches);				// Свойство которое выдает список всех пальцев,
																	// которые взаимодействуют с экраном (в независимость где они находятся).
																	// (пальцы которые в данный момент лежат на сенсерном дисплее)
		
		console.log(e.targetTouches); // Свойство которое выдает список всех пальцев,
																	// взяимодействуют с конкретным элементом.  														

		console.log(e.changedTouches);// Свойство которое выдает список всех пальцев (и вроде действий),
																	// которые учавствуют и учавствовали во время события
	});

	let i = 0;
	const showHello = e => {
		if (i >= 2) {
			document.body.removeEventListener('click', showHello); // Удаляет событие клика
		} else {
			console.log(`Hello ${i}`);
		}
		i++;
	};

	document.body.addEventListener('click', showHello); // Назначает событие клика на элемент body

	//Мобильные события
	const testBtn = document.createElement("<button type='button'>Test btn</button>");

	testBtn.addEventListener('touchstart', () => {	// Тап по элементу
		console.log('touchstart');			
	});

	testBtn.addEventListener('touchend', () => {		// Срабатывает сразу же после окончание тапа
		console.log('touchend');
	});

	testBtn.addEventListener('touchmove', () => {		// Движение пальца по элементу
		console.log('touchmove');
	});

	testBtn.addEventListener('touchenter', () => {	// Срабатывает как только палец проскользит на элемент 
		console.log('touchenter');
	});

	testBtn.addEventListener('touchleave', () => {  // Срабатывает когда палец сошел с элемента 
		console.log('touchleave');
	});

	testBtn.addEventListener('touchcancel', () => { // Срабатывает тогда, когда палец вышел запредел дисплея
		console.log('touchcancel');
	});
	
	//--------------------
	// Параметры document, window b screen

	console.log(window.clientWidth);
	console.log(window.clientHeight);
	//--------------------

	//JS атрибуты
	/*
		<script defer src="script"></script> <!-- defer - загружает js фаил в фоне и говорит DOM 
																					чтобы она его запустил после полной загрузки страницы.
																					(срабатывает до события 'DOMContentLoaded')
																					Скритпы с атрибутом defer будут загружаться последовательно -->

		<script async src="script"></script> <!-- async - загружает в фоне фаил, отдельно от DOM.
																					выполняется сразу после загрузки -->
	*/