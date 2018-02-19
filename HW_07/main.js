// this Задачи (слайды 16-18)
// Объект описывает высоту и ширину прямоугольника и можетпосчитать площадь
const rectangle = {
  width: 10,
  height: 5,
  getSquare: function () { return (this.width * this.height) }
}
rectangle.getSquare();

// Объект с ценой товара и скидкой + 2 метода
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () { return (this.price) },
  getPriceWithDiscount: function () {
    return (this.price -= (this.price * parseFloat(this.discount) / 100))
  }
}
price.getPrice();
price.getPriceWithDiscount();

// Объект и функция
const user = {
  name: 'Abraham'
}
user.getUserName = function () {
  return this.name
}
user.getUserName();

// Объект с высотой и методом по ее увеличению
const testObject = {
  height: 10,
  getAddedHeight: function () {
    return ++this.height
  }
}
testObject.getAddedHeight();
console.log(testObject.height);
testObject.getAddedHeight();
console.log(testObject.height);
testObject.getAddedHeight();
console.log(testObject.height);

//Объект вычислитель
const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this
    },
  plusOne: function () {
    this.value += 1;
    return this
    },
  minusOne: function () {
    this.value -= 1;
    return this
    }
}
numerator.double();
console.log(numerator.value);
numerator.double().minusOne().plusOne();
console.log(numerator.value);

// Разобраться и объянить что происходит
const user2 = {
  name: 'Abraham'
},
otherUser = {
  name: 'John',
  getName: function () {
    return this.name;
  }
}
user2.getName; // undefined - метод getName отсутствует в объекте user2
user2.getName = otherUser.getName; // Одалживаем метод getNAme из otherUser в user2
user2.getName(); // 'Abraham' - работает одолженный метод
otherUser.getName(); // "John" - работает метод объекта

// this Задачи (слайды 36-40)
// Что выведет код, почему
function getList() { return this.list };
let users = {
  length: 4,
  list: ['Abraham', 'James', 'John', 'Steven']
}
console.log(getList()); // undefined - list не определен в глобальной зоне видимости
users.getList = getList; // Занимаем метод getList у глобального объекта
console.log(users.getList()); // ['Abraham', 'James', 'John', 'Steven']
console.log(getList.call(users)); // Запускаем getList в контексте users ['Abraham', 'James', 'John', 'Steven']

//объект с розничной ценой и количеством продуктов
const items = {
  price: 10,
  number: 20,
  getTotalPrice: function () {
    return this.price * this.number
  }
}
items.getTotalPrice();

// Заимствуем метод из предыдущей задачи
const details = {
  price: 5,
  number: 200,
}
details.getTotalPrice = items.getTotalPrice;
details.getTotalPrice();

// Даны объект и функция - вызвать функцию в контексте объекта
let sizes = {
  width: 5,
  height: 10
},
getSquare = function () {
  return this.width * this.height
}
getSquare.call(sizes);

// Найти минимум в массиве
let numbers = [4, 12, 0, 10, -2, 4];
Math.min.apply(null, numbers);

// Исправить метод getFullHeight
const element = {
  height: '15px',
  marginTop: '5px',
  marginBottom: '5px',
  getFullHeight: function () {
    return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom)
  }
};
element.getFullHeight();
const block = {
  height: '5px',
  marginTop: '3px',
  marginBottom: '3px'
};
element.getFullHeight.call(block);

// Изменить функцию getElement
let element = {
  height: 25,
  getHeight: function () {
    return this.height
  }
};
let getElementHeight = element.getHeight.bind(element);
getElementHeight();

// Лексическое окружение. Задачи
// Что выведет следующий код, почему
getBigName(userName);
function getBigName(name) {
  name = name + '';
  return name.toUpperCase();
}
var userName = 'Ivan'
// Код выведет 'UNDEFINED' - т.к. userName === undefined на момент выполнения функции

// Какое значение вернет функция test, Почему
function test() {
  var name = 'Vasiliy';
  return getBigName(userName);
}
getBigName(userName);
function getBigName(name) {
  name = name + '';
  return name.toUpperCase();
}
var userName = 'Ivan';
test()
// Функция вернет 'IVAN' - getBigName отработает с аргументом userName === Ivan,
// которая объявлена в глобальной области видимости

// Что выведет функция getFood, почему
var food = 'cucumber'; //объявление глобальной переменной
(function () {
  var food = 'bread'; //локальная переменная ограниченная функцией
  getFood()
})();
function getFood() {
  console.log(food); //ищет переменную food у себя, затем в глобальной области
}
// Функция выведет 'cucumber'

// Замыкание. задачи
// 1) Какое значение вернет функция getDollar
var dollar, getDollar;
(function () {
  var dollar = 0;
  getDollar = function () {
    return dollar;
  }
}());
dollar = 30;
getDollar(); // 0
// 2) Что будет выведено в консоль, почему?
var greet = 'Hello';
(function () {
  var text = ' World';
  console.log(greet + text); // 'Hello World'
}());
console.log(greet + text); // ReferenceError text is not defined
// переменная text не определена в глобальной области видимости
// 3) Создать функцю, которая сможет сделать
const minus = (a = 0) => (b = 0) => a - b;
console.log(minus(10)(6)); // 4
console.log(minus(5)(6));  // -1
console.log(minus(10)());  // 10
console.log(minus()(6));   // -6
console.log(minus()());    // 0
// 4) Реализвоать функцию которая перемножает и запоминает результат между вызовами
function MultiplyMaker(startNum) {
  let result = startNum;
  return function (num) {
    result *= num;
    return result;
  }
};
let multiply = MultiplyMaker(2);
console.log(multiply(2)); // 4
console.log(multiply(1)); // 4
console.log(multiply(3)); // 12
console.log(multiply(10)); // 120

// 5) Реализовать модуль который работает со строкой
const textModule = (function () {
  let text = '';
  function setString(string) {
    text += string;
  }
  function getString() {
    return text;
  }
  function getStringLength() {
    return text.length
  }
  function getReversedString() {
    return text.split('').reverse().join('');
  }
  return {
    setString: setString,
    getString: getString,
    getStringLength: getStringLength,
    getReversedString: getReversedString
  }
})();
textModule.setString('qwerty');
console.log(textModule.getString());
console.log(textModule.getStringLength());
console.log(textModule.getReversedString());

// 6) Создать модуль калькулятор
const calculator = (function () {
  let num;
  function setNumber(number) {
    num = number || 0;
  }
  function getNumber() {
    return ( Math.round(num * 100) / 100 );
  }
  function addNumber(number) {
    num += number;
    return this;
  }
  function substrNumber(number) {
    num -= number;
    return this;
  }
  function multNumber(number) {
    num *= number;
    return this;
  }
  function divNumber(number) {
    num /= number;
    return this;
  }
  function powNumber(number) {
    num = Math.pow(num, number);
    return this;
  }
  return {
    setNumber: setNumber,
    addNumber: addNumber,
    substrNumber: substrNumber,
    multNumber: multNumber,
    divNumber: divNumber,
    powNumber: powNumber,
    getNumber: getNumber
  }
})();

calculator.setNumber(2.928736);
console.log('start', calculator.getNumber());
calculator.addNumber(4);
console.log(calculator.getNumber());
calculator.substrNumber(2);
console.log(calculator.getNumber());
calculator.multNumber(3);
console.log(calculator.getNumber());
calculator.divNumber(2);
console.log(calculator.getNumber());
calculator.powNumber(2);
console.log('end', calculator.getNumber());

calculator.setNumber(2.928736);
console.log('start', calculator.getNumber());
calculator.addNumber(4).substrNumber(2).multNumber(3).divNumber(2).powNumber(2);
console.log('end', calculator.getNumber());
