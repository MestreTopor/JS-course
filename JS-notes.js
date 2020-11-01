// Строчные методы:	
	const text = "13.3";
	
	console.log(parseInt(text));   // Вернет 13 (превратиться number)	
	console.log(parseFloat(text)); // Вернет 13.3 (превратиться number)
	
	
// Свойства объектов:	
	const objectName = {
		name: "Alex",
		age:  13
	};
	
	console.log(Object.keys(objectName)); // Вернет массив ['Alex', 13] для тогла чтобы можно было подсчитать колличество свойств в объекте с помощью .length
	
	
	const cloneObjectName = Object.assign(objectName, {country: "USA"}); // Создает ссылку на объект objectName и добавляет свойство country: "USA" 
                                                                       // можно записать Object.assign({}, objectName) для того чтобы создать поверхносную копию.
	console.log(cloneObjectName); // Выведет {name: "Alex", "age": 13, "country": "USA"}

	const globalCloneObjectName = JSON.parse(JSON.stringify(objectName));// Создает глубокую копию объекта objectName
	globalCloneObjectName.age = 55;	
	console.log(globalCloneObjectName);
	console.log(objectName);


// Свойства:

	// Свойства document, window и screen
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
	

// Методы:	
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


// Функция конструктор (тоже самое что и классы но постарому)
	function User(name, id) {                          				// Создание функции конструктора
		this.name  = name;
		this.id    = id;
		this.human = true;
		this.hello = () => {
			console.log(`${this.name} says "Hello!"`);
		};
	}

	User.prototype.exit = function() {
		console.log(`Пользователь: ${this.name} вышел`); 				// Добавление нового свойства в конструктор
	};

	const alex = new User('Alex', 1);                  			  // Создание объекта с помощь функции конструктора
	const kristina = new User('Kristina', 2);

	console.log(alex);
	console.log(kristina);

	alex.exit();                                       			  // Вывод добавленного свойства
	alex.open();


// Классы
	class Rectangle {               // Создание класса (концепция)
		constructor(height, width) {  // Создание конструктора 
			this.height = height;
			this.width = width;
		}                             

		calcArea() {                  // Создание функции/метода (не нужно писать слово function)
			return this.height * this.width;
		}
	}

	class ColoredRectangleWithText extends Rectangle { // Создание класса который наследует все методы и свойства класса Rectangle
		constructor(height, width, text, bgColor) {      // Обязательно добавлять в конструктор аргументы наследуемого
			super(height, width);                          // Вызывает конструктор наследуемого родителя (Rectangle), внутри можно написать только те свойства которые нужно использовать. super() всегда должен быть на первом месте внутри конструктора
			this.text = text;
			this.bgColor = bgColor;
		}

		showMyProps() {
			console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
		}
	}
	const square = new Rectangle(10, 10); // (экземпляр)
	console.log(square.calcArea());

	const block = new ColoredRectangleWithText(10, 10, 'Hi', 'red');
	block.showMyProps();
	console.log(block.calcArea());


// Контекст вызова this
	function showThis1() {
		console.log(this);      // Такой способ this вернет объект window, а при "use strict" вернет undefined
	}
	showThis1();
	// ------------

	const obj = {
		a: 20,
		b: 15,
		sum: function() {
			console.log(this);    // Вызов контекста (this) внутри метода объекта, будет ссылаться на сам объект в котором он находится

			function shout() {
				console.log(this);  // Вернет udefined или объект window, потому что функция внутри метода не является методом объекта, это просто функция
			}
			shout();

			const boom = () => console.log(this); // Ссылочная функция не имеет своего контектса вызова,
																						// она будет брать его у своего родителя (в данном случае "obj") и будет ссылаться на него
			boom();
		}
	};  
	obj.sum();            
	// ------------

	function User(name, id) {                         
		this.name  = name;
		this.id    = id;
		this.human = true;
		this.hello = function() {
			console.log(`${this.name} says "Hello!"`); // this в конструкторах и классах это новый экземпляр объекта
		};
	}
	const bill = new User('Bill', 26);
	bill.hello();
	// ------------

	function sayName (surname, age) {
		console.log(this);
		console.log(`${this.name} ${surname}, ему ${age} лет`);
	}
	const user = {
		name: 'Paul'
	};
	sayName.call(user, 'Smith', 34);              // Присваевает функцию с контекстом к уже существующему объекту
	sayName.apply(user, ['Robenson', '52']);      // Присваевает функцию с контекстом к уже существующему объекту
	// 👆Работают одинаково, разница только в синтаксисах
	// ------------

	function count(num, a, b) {
		const result = a + b;
		return `${this*num} || result = ${result}`;
	}
																								// bind создает новую функцию и под нее подвязывает контектс
	const bindingFunc1 = count.bind(2, 5, 10, 2); // Первый аргумент становится this и байндиться навсегда
																								// this = 2, num = 5, a = 10, b = 2
																								
	console.log(bindingFunc1());                  // Вернет "10 || result = 12"                     

	const bindingFunc2 = count.bind(3);
	console.log(bindingFunc2(1, 2, 3));           // Вернет "3 || result = 5"
	console.log(bindingFunc2(3));                 // Вернет "3 || result = NaN"
// ------------		


// Циклы: 	
	for (let key in objectName) {					   			             // "in" - перебирает объекты, а "of" - массивы	
		console.log(`Ключь ${key} значение ${objectName[key]}`); // Вернет: "Ключь name значение Alex"																                             
	}
	
	const numbers = [2,3,4,8];	
	numbers.forEach(function(item, key, arr) {                 // Принемает 3 аргумента: 1 - значение, 2 - ключ, содержимое массива (не работает с объектами)
		console.log(`${item} : ${key} внутри массива ${arr}`);
	});
	
	
// Операторы:	
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
	
	
// Новые фишки JS es6 и выше
	// Операторы
	const video = ['youtube', 'vimeo', 'pornhub'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'instagram']; // ... - spret оператор раскрывает массивы и объекты
	console.log(internet); // Вернет [ 'youtube', 'vimeo', 'pornhub', 'wordpress', 'livejournal', 'blogger', 'instagram' ]
	//--------------------
	const picture = (a, b, ...rest) => { // ... - rest оператор помещает все параметры в массив, даже если параметр не указан, будет создан пустой массив (в функциях rest параметр не поддерживает дефолтные значения)
		return console.log(a, b, rest);
	};
	picture('paint', 'photoshop', 'illustrator', 'bulocka', 'cruasanchik'); // При spret операторе можно добавлять сколько угодно параметров так как они будут добавляться в массив
	//--------------------

	// Математические операции
	console.log(2 ** 3); // 2 в 3-ий степени (8). Доступно с версии es7
	
	a = 1;
	let b = 1;

	console.log(!!(a && b)); // !! - превращает в булевый тип данных
	console.log((a && b));	 
	//--------------------

	console.log(typeof +"12"); // + превращает строку в числовой тип данных
	//--------------------

	// Функции
	const arrowsFunction = () => { 	// Стрелочная функция
		return "Hello World!";
	};
	console.log(arrowsFunction());

	const miniFunc1 = a => console.log(`Mini function 1 has an argument ${a}`); 		 // Короткая запись стрелочной функции, при условии что есть 1 аргумент
	const miniFunc2 = () => console.log("Mini function 2 doesn't have an argument"); // Короткая запись стрелочной функции, при отсутствии аргументов
	miniFunc1('Puppy');
	miniFunc2();
	//--------------------
	function plus () {

	}
	//--------------------
		
	// Прототипирование
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
	
// Действия с элементами на странице	
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


// AJAX методы
const objForAjax = {
	name: "Cris",
	age: 18
};
const jsonObj = JSON.stringify(objForAjax);

console.log(jsonObj); // Преабразует объект в JSON объект
console.log(JSON.parse(jsonObj)); // Преабразует JSON объект в объект javascript
//--------------------

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


//JS атрибуты
/*
	<script defer src="script"></script> <!-- defer - загружает js фаил в фоне и говорит DOM 
																				чтобы она его запустил после полной загрузки страницы.
																				(срабатывает до события 'DOMContentLoaded')
																				Скритпы с атрибутом defer будут загружаться последовательно -->

	<script async src="script"></script> <!-- async - загружает в фоне фаил, отдельно от DOM.
																				выполняется сразу после загрузки -->
*/