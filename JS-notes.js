// Строчные методы:	
	const text = "13.3";
	
	console.log(parseInt(text));   // Вернет 13 (превратиться number)	
	console.log(parseFloat(text)); // Вернет 13.3 (превратиться number)
// ------------	
	
// Свойства объектов:	
	const objectName = {
		name: "Alex",
    age:  13,
            
    // Свойства акцессоры
    get userName() {      // У get и set должны быть одинковые имена методов
      return this.name;   // Получение имени
    },
    set userName(name) {
      this.name = name;   // Перезаписывает имя
    }
  };
  objectName.userName = 'Bulochka'; // Перезаписывает
  console.log(objectName.userName); // Показывает
  
	console.log(Object.keys(objectName)); // Вернет массив ['Alex', 13] для тогла чтобы можно было подсчитать колличество свойств в объекте с помощью .length
	
	
	const cloneObjectName = Object.assign(objectName, {country: "USA"}); // Создает ссылку на объект objectName и добавляет свойство country: "USA" 
                                                                       // можно записать Object.assign({}, objectName) для того чтобы создать поверхносную копию.
  const videoElement = document.createElement('div');
  const subject = {
    styleForElement: {
      width: '100%',
      background: 'red',
      height: '500px'
    }
  };
  Object.assign(videoElement.style, subject.styleForElement);          // Можно использовать для записи стилей к элементу
  document.body.append(videoElement);                                                                       

  console.log(cloneObjectName); // Выведет {name: "Alex", "age": 13, "country": "USA"}

	const globalCloneObjectName = JSON.parse(JSON.stringify(objectName));// Создает глубокую копию объекта objectName
	globalCloneObjectName.age = 55;	
	console.log(globalCloneObjectName);
  console.log(objectName);
  

// ------------

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
// ------------

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
// ------------

// Методы перебора массивов
	const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
	const shortNames = names.filter(name => {											// .filter() - метод который перебирает массив и возвращает те элементы которые поподают под выборку
		return name.length < 5;																			// Возвращаем те значения с массива, у которых длина меньше 5 символов
		});
	console.log(shortNames);
	// ------------

	let asnwer = ['HeLLow', 'gOOd', 'oK'];
	asnwer = asnwer.map(item => {																	// .map() - метод который позволяет изменять значения в масиве не создавая копию    	
		return item.toLowerCase();												
	});
	console.log(asnwer);
	// ------------

	const some = [4, 'string', false];
	console.log(some.some(item => typeof(item) === 'number'));		// .some() - метод который перебирает значения в массиве и возвращает true если хоть какой-то элемент попадет под условие
	console.log(some.every(item => typeof(item) === 'number'));		// .every() - метод который перебирает значения в массиве и возвращает true если все элементы попадают под условие
	// ------------

	const arr = [4, 5, 1, 3, 2, 6];
	const res = arr.reduce((sum, current) => {										// .reduce((sum, current) => {return sum + current}) - метод у которого есть 2 аргумента. Используется для сложения (и вычитания если это числовыые значения) значений в массиве
		console.log(`${sum} - ${current}`);													// sum - это первый элемент, который можно перезаписывать, 
		return sum + current;
	}, 3);																												// В reduce можно добавить начально значение после скобки arr.reduce(sum => sum, 10) Вернет 10
	console.log(res);
	// ------------

	const individuals = {
		ivan: 'persone',
		ann: 	'persone',
		dog: 	'anumal',
		cat: 	'animal'
	};
	
	const arrIndividuals = Object.entries(individuals)	// Преобразует объект в массив
	.filter(arr => arr[1] == 'persone')									// Выбираем те свойства у которых значение 'persone'
	.map(arr => arr[0]);																// Перезаписываем массив и записывает только имена что находятся в объекте individuals
	console.log(arrIndividuals);												// [ 'ivan', 'ann' ]
  
  const changeArray = [['Goole', 'Company'], arrIndividuals];
	console.log(Object.fromEntries(changeArray));       // Преобразует массив в объект. Не работает в стрых браузерах и консоли!!!
																											// {ivan: 'ann'}																													
// ------------


// Функция конструктор (тоже самое что и классы но постарому)
	function User(name, id) {                          				// Создание функции конструктора
		this.name  = name;
		this.id    = id;
		this.human = true;
		this.hello = () => {
			console.log(`${this.name} says "Hello!"`);
		};
	}

	User.prototype.exit = function() {												// Добавление нового свойства в конструктор
		console.log(`Пользователь: ${this.name} вышел`); 				
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

  /*// Инкапсуляция в классах
    class Persone {
      constructor(name, age) {
        this.name = name;
        this._age  = age;                               // Нижнее подчеркивание среди программистов означает что такие свойства нельзя изменять
      }
                                                        // 👇👇👇 Новый стандарт который еще не стал глобальным
        secondName = 'Brown'                              // Создание свойства вне конструктора
        #sex = 'Male';                                    // Создание скрытого (не изменяемого) от пользователя свойства  

        returnP = () => {                                 // Такой метод позволяет обратиться к родительскому экземпляру объекта
          console.log(`Name: ${this.name}`);
          console.log(`Second name: ${this.secondName}`);
          console.log(`Age: ${this._age}`);
          console.log(`Sex: ${this.#sex}`);
          console.log(`-----------------`);
        }

      get age() {                                       // Метод для получения значения свойства _age
        return this._age;                                 
      }

      set age(age) {                                    // Правильный метод для изменения свойства _age
        if(typeof age === 'number' && age > 5 && age < 100) {
          this._age = age;                              
        } else {
          this._age = 'Error age';
        }
      }

      get sex() {                                        // Метод для вывода свойства от
        return this.#sex;
      }

      set sex(sex) {
        this.#sex = sex;
      }
    }

    const volodya = new Persone('Volodya', 15);
    volodya.returnP();
    volodya.age = 4;
    volodya.sex = "tree";
    volodya.returnP();
    // ------------
  */
  
// Контекст вызова this
	function showThis1() {
		console.log(this);      // Такой способ this вернет объект window, а при "use strict" вернет undefined
	}
	showThis1();

	const obj = {
		a: 20,
		b: 15,
		sum: function() {
			console.log(this);    // Вызов контекста (this) внутри метода объекта, будет ссылаться на сам объект в котором он находится

			function shout() {
				console.log(this);  // Вернет udefined или объект window, потому что функция внутри метода не является методом объекта, это просто функция
			}
			shout();

			const boom = () => console.log(this); // Стрелочная функция не имеет своего контектса вызова,
																						// она будет брать его у своего родителя (в данном случае "obj") и будет ссылаться на него (вернет window или ошибку)
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
			console.log(`${this.name} says "Hello!"`); // this в конструкторах и классах это новый экземпляр объекта (будет ссылкаться на объект)
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

	// Деструкторизация
    // Arraya
    function calcValues(a, b) {
      return [
        a + b,
        a - b,
        a * b,
        a / b
      ];
    }																																				// Деструкторизация массива
    const [,, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10);  // ,, - пропускает создание переменной с тем элементом который совподает по счету в массиве
    console.log(sub, mult, other);
      
    // Objects
    const person = {
      name: 'Max',
      age: 20,
      address: {
        country: 'Russia',
        city: 'Moscow'
      }
    };
    const {																																	 // Деструкторизация объекта
      name: firstName = 'Без имени',																				 // Создает переменную firstName и помещает содержимое name во внутрь, с установкой дефолтного параметра - 'Без имени'
      age,
      car = 'Машины нет',
      address: {																														 // Еще одна дестриктуризация	(не создает переменную address, а заходит вовнутрь оригинальной и уже потом создает переменные homeTown и country)
        city: homeTown,																											  
        country 
      }
    } = person;
    // const {name, ...info} = person																				 // Создает первую переменную, а все остальное содержимое помещает в переменную info в качестве объекта
    console.log(firstName, age, car, homeTown, country);
    
    function logPerson({name: firstName = '111', age}) {
      console.log(firstName + ' ' + age);
    }
    logPerson(person);
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

	const miniFunc1 = () => console.log("Mini function 2 doesn't have an argument"); // Короткая запись стрелочной функции, при отсутствии аргументов
	const miniFunc2 = a => console.log(`Mini function 1 has an argument ${a}`); 		 // Короткая запись стрелочной функции, при условии что есть 1 аргумент
	miniFunc1();
	miniFunc2('Puppy');
  //--------------------
  
	function plus(string) { // Обычная функция
    console.log(string);
  }
  plus('Привет!');
  //--------------------
  
  (function(){                // Анонимная самовызывающаяся функция (Для создания модулей)
    const persone = "Peter";  
    console.log(person);
  }());
  //--------------------

  // Модули
    // Импорт/Экспорт
      // Предположим что функция находится в файле some.js
      function someFunc() {   
        return "Hello world";
      }
      module.exports = someFunc; // Экспортирование функции someFunc()
      // Конец some.js

      // Предположим что это фаил custom.js
      const someFunction = require('./some'); // Импортирует someFunc() из some.js
      someFunction();                         // Запускает someFunc()
      // Конец custom.js
    //--------------------

    // Импорт/Экспорт es6
      // Предположим что функция находится в файле some2.js
        // Можно экспортировать все у чего есть имя
        export let one = 1;
        let two = 2;
        export {two};             // Экспортировать уже созданную функцию или переменную нужно в фигурных скобках

        export default function sayHi() { // default - может быть только один (используется для того чтобы было удобно импортировать)
          console.log('Hello!');
        }
        // 👆Можно экспортировать несколько фаилов👆
      // Конец some2.js

      // Предположим что это фаил custom2.js
        import {one1, two2} from './some2'; // Нужно обязательно писать имена экспортированных файлов в фигурных скобках {}
        console.log(one1 + ' and ' + two2); // Можно сразу выводить экспортированные переменные и функции
        // Дописал 👆цифры👆 чтобы jshint не выпендривался

        import {one1 as first} from './some2'; // Импортирует one1 и говорим что ее имя будет first
        console.log(first);

        import * as data from './some2';       // Импортирует все что находится в custom2 в объект data
        console.log(data.one + ' and ' + data.two);

        import sayHello from './some2';        // Импорт дефолтного экспорта (sayHi()) из some2.js
      // Конец custom2.js
    //--------------------
    // ВНИМАНИЕ! 
    // Браузер не понимает как правильно собирать модули,
    // и выше указанные варианты не сработают, 
    // поэтому для этого нужно использовать npm пакет webpack

    // Запись которую поймет браузер (не удобен для большого колличества модулей)
      // Предположим что функция находится в файле some3.js
      export default function sayBye() {
        console.log('Bye!');
      }
    // Конец some2.js

    // Предположим что это фаил custom3.js
      import bye from './some3.js'; // Обязательно нужно прописать тип файла .js
    // Конец custom3.js

    /*
    <html>
      <body>
        <script src="./some.js" type="module"></script>    <!-- Доавляем тип "module" -->
        <script src="./custom3.js" type="module"></script> <!-- Скрипты с этим типом буду загружаться как defer -->
      </body>
    </html>
    */
  //--------------------

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

	div.insertAdjacentElement('afterend', textHello); 								 // Добавляет элемент после div, так же работает с 'beforebegin', 'afterbegin', 'beforeend'
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
  // GET Запрос. Первый способ (устаревший)
  const inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

  inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();                                          // Метод для создания запроса к JSON
    // request.open(method, url, async, login, pass);                              // .open - метод который собирает настройки для запроса на сервер
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8'); // Запрос на http заголовки (для GET запроса)
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
	//--------------------

	// POST Запрос. Первый способ (устаревший)
	const forms = document.querySelectorAll('form');
  forms.forEach(formItem => {
    postData(formItem);
  });
  
  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      
      // request.setRequestHeader('Content-type', 'multipart/format-data'); // multipart/format-data формат для обычного POST запроса. ЕСЛИ ИСПОЛЬЗОВАТЬ .setRequestHeader() (format-data) вместе с new XMLHttpRequest() ТО ЗАГОЛОВКИ УКАЗЫВАТЬ НЕ НУЖНО!
      request.setRequestHeader('Content-type', 'application/json');         // Формат для POST запроса в формате JSON
      const formData = new FormData(form);                                  // Помогает сформировать все данные которые пришли с формы. form - это конкретная форма
      
      const object = {};
      formData.forEach(function (value, key) {                          // Преобразует в объект все данные что пришли из формы
        object[key] = value;
      });
			console.log(formData.getAll('name'));                             // Получает содержимое всех инпутов с атрибутом name
			const json = JSON.stringify(object);                              // Преобразует в JSON объект
      
      // request.send(formData);                                        // Отправляет данные на сервер формата 'multipart/format-data' (php) (В скобках прописано тело формы)
      request.send(json);                                               // Отправляет данные на сервер в формате 'application/json' (json)

      request.addEventListener('load', () => {
        if (request.status === 200) {
          alert(request.response);
          form.reset();                                                 // Чистит форму от введеных данных (чистит value)
        } else {
					alert(request.statusText);
        }
      });
    });
	}
	//--------------------

	// Настройка AJAX POST запросов для php server (для php файла)
	// $_POST = json_decode(file_get_contents("php://input"), true); // Декодирует для JSON запросов
	// echo var_dump($_POST);

	// GET Запрос. Второй способ (современный)
		fetch('https://jsonplaceholder.typicode.com/todos/1')	// GET запрос на фэйковый сервер
    .then(response => response.json())										// response - это ответ от сервера, response.json() - парсит JSON объетк в JS (работает как JSON.parse()). Здесь возвращается Promise
		.then(json => console.log(json));											// Вывод
	//--------------------

	// POST Запрос. Второй способ (современный)
		fetch('https://jsonplaceholder.typicode.com/posts', { // POST запрос на отправку данных на сервер
    method: 'POST',																				// Прописывается метод
    headers: {																						// Заголовки
      'Content-type': 'application/json'									
		},	
		body: JSON.stringify({ name: "Alona", age: 25 })			// Данные которые отправляются на сервер в формате JSON)
  	})
    .then(response => response.json())
		.then(json => console.log(json))
		.catch(() => console.log('Not found'));								// Сработает только при выключенном интернете или при другом сбое
	//--------------------

	// Асинхронный операторы
	const posting = async (url, data) => { 									// async говорит о том что внутри функции будет асинхронный 
    const res = await fetch(url, {												// await говорит что нужно получить какой-то ответ от сервера, прежде чем выполнить остальной код
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
		});
		
		if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`); // throw - оператор ошибки (возвращает в catch) работает как return. new Error() - объект ошибки которая пояаляется в консоли
    }

    return await res;
	};
	
	posting('https://jsonplaceholder.typicode.com/posts', {name: "Oleg"})
  .then(post => {
    console.log(post.status);
  });
	//--------------------
// Promise (метод для синхронного запуска кода)
	const req = new Promise((resolve, reject) => {	// Promise - это объект благодаря которому можно писать асинхронный код
		console.log('Проверка данных...');				 		// Параметры (resolve, reject) resolve - нужно использовать если все прошло успешно (пример: данные с сервера пришли). reject - Если произошла ошибка
		setTimeout(() => {											
			if(false) {
				resolve();														 		// Запуск функцию resolve	(можно передовать параметры в скобках)
			} else {
				reject();															 		// Запуск функцию reject (можно передовать параметры в скобках)
			}
		}, 2000);
	});

	req.then(() => {														// В then пишется то, что будет исполнятся в resolve
		return new Promise((resolve, reject) => { // В then так же можно создавать Promise
			console.log('Подготовка данных...');
			setTimeout(() => {
				const product = {
					name: 'TV',
					price: 2000
				};
				
				resolve(product);											// Добавление параметра в resolve
			}, 2000);
		});
	}).then(product => {												// Передача параметра в then	
		return new Promise((resolve, reject) => {		
			console.log('Финальная подготовка...');
			setTimeout(() => {													
				product.status = 'order';
				resolve(product);
			}, 2000);	
		});
	}).then(product => {
		console.log(product);
	}).catch(text => {													// В catch пишется то, что будет исполнятся в reject
		setTimeout(() => {
			text = "Not Found!";
			console.error(text);
		}, 2000);
	}).finally(() => {													// Выполняется после окончания обработки (всегда пишется в конце)
		console.log('Конец запроса');						  
	});
//--------------------

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);				
	});
};

Promise.all([test(1000), test(2000)]).then(() => {	// Запускается после того как все промисы загрузились
	console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => { // Запускается после того как хотябы один промисы загрузится
	console.log('Race');
});
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
//--------------------

// Запуск json-server
// json-server name_of_file.json
//--------------------

// Работа с Кэшем
	// Local Storage
	localStorage.setItem('i', 1); // Записывает в local Storage переменную i со значение 1
  localStorage.getItem('i');    // Возвращает значение переменной записанной в local Storage = 1
  localStorage.removeItem('i'); // Удаляет переменную i из local Storage
	localStorage.clear();         // Полностью чистит localStorage
	
	const cities = {
		one: "Odessa",
		two: "Kiev",
		three: "Lvov"
  };
  
  localStorage.setItem('cities', JSON.stringify(cities)); // Правилтная запись объекта в Local Storage
  console.log(JSON.parse(localStorage.getItem('cities'))); 
//--------------------
  
// Регулярные выражения
  const ans = 'ANNa';
  const reg = /n/i;
  
  console.log(ans.search(reg)); // .search() делает поиск по выражению в reg вернет 1 или -1
  console.log(ans.match(reg));  // .match() делает поиск по выражению в reg вернет массив [ 'N', index: 1, input: 'ANNa', groups: undefined ]

  const pass = "1234";
  console.log(pass.replace(/./g, "*")); // .replace() делает замену в строке pass на *
  console.log(/3/g.test(pass));         // .test() проверяет на совпадения и возвращает true/false

  console.log(pass.match(/\d/));

  // Флаги
  // i - ищет в независимость от регистра
  // g - ищет несколько вхождений (в .search() ищет только первое вхождение)
  // m - включает многострочный режим

  // Правила
  // . - ищет все элементы в строке

  // Классы
  // \d - ишет цифры
  // \w - ищет слова
  // \s - ищет пробелы

  // \D - ишет не цифры
  // \W - ищет не слова
  // \S - ищет не пробелы
//--------------------

// Обработка ошибок
  try {                         // Оператор 'try' будет работать пока внутри не возникнет ошибка
    console.log('Normal');
    //console.log(a1);          // Здесь код остановится и вернет 'catch'
    console.log('Result');
  } catch(error) {              // Оператор 'catch' сработает если в 'try' произойдет ошибка
    console.log(error);         // Объект ошибки
    console.log(error.name);    // Название ошибки
    console.log(error.message); // Сообщение ошибки
    console.log(error.stack);   // Стак ошибки
  } finally {                   // Как и в promise код в операторе 'finally' будет выполняться всегда
    console.log('Continue');
  }
  // Все что будет написано ниже оператора 'try catch' продолжит работать даже если в 'try' будет ошибка.
//--------------------