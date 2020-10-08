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
	
	
//Методы:	
	console.dir(objectName); // Позволяет увидеть все свойства объекта
	
	
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