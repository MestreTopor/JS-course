"use strict";

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
