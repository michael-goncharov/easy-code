// Переменные.

// 1. Придумать названия переменных

// 1) цена - может меняться
let price;
// 2) максимальное число - постоянное
const maxValue;
// 3) имя пользователя - постоянное
const firstName;
// 4) информация о юзере - может меняться
let userInfo;

// 2. Что будет в консоли

/* console.log(test);
   var test = 'string'; Будет ---> undefined */

/* var x = 'string';
   var x = 'string № 2';
   console.log(x); Будет ---> string № 2 */

// 3. Что будет в консоли

/* console.log(test);
   let test = 'string'; Будет ---> Uncaught ReferenceError: test is not defined */

/* const x = 'string';
   x = 'string № 2';
   console.log(x); Будет ---> Uncaught TypeError: Assignment to constant variable. */

/* let someVariable = 15;
   let someVariable = 10; Будет ---> Uncaught SyntaxError: Identifier 'someVariable' has already been declared */

// 4. Строки. Задачи.

let string = 'some test string'
// 4.1. Получить первую и последнюю буквы строки
console.log('Первый и последний символы: ', string[0], string[string.length - 1])
// 4.2. Сделать первую и последнюю строчки в верхнем регистре
let string2 = ''
for (let i = 0; i < string.length; i++) {
  if (i === 0 || i === string.length-1) {
    string2 = string2 + string[i].toUpperCase()
  }
  else string2 = string2 + string[i];
}
console.log(string2);
// 4.3. Найти положение слова string в строке
console.log('Положение слова string: ', string.indexOf('string'));
// 4.4. Найти положение второго пробела
console.log('Второй пробел: ', string.lastIndexOf(' '));
// 4.5. Строка с 5 символа длиной 4 буквы
console.log('Строка с 5 символа длиной 4 буквы: ', string.substr(4, 4));
// 4.6. Получить строку с 5-го по 9-й символы
console.log('Получить строку с 5-го по 9-й символы: ', string.substring(4, 8));
// 4.7. Исходная строка без последних 6 символов
console.log('Исходная строка без последних 6 символов: ', string3 = string.slice(0, -7));
// 4.8. Из 20 и 16 получить 2016
let a = 20, b = 16;
console.log('Из 20 и 16 получить 2016: ', a.toString() + b.toString());

// 5. Числа. Задачи.
// Получить pi и округлить до 2 знаков.
console.log('pi ', Math.PI.toFixed(2));
// Найти максимум и минимум из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log('max ', Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log('min ', Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// Работа с Math.random
console.log('случайное число, с округлением до 2 знаков', Math.random().toFixed(2));
let x = 5;
console.log('случайное число от 0 до x (x = 5): ', Math.random()*x);
// Сложить 0.6 и 0.7 и привести к нормальному виду
console.log('Сложить 0.6 и 0.7 и привести к нормальному виду: ', (0.6 + 0.7).toFixed(1));
// Получить число из строки 100$
console.log('Получить число из строки 100$: ', parseInt('100$'));

// 6. Объекты

// Объект с полем product равным  iphone
const firstObject = {
  product: 'iphone',
}
console.log(firstObject);

// Добавляем поля:

firstObject.price = 1000;
firstObject['currency'] = 'dollar';
console.log(firstObject);

// Добавляем вложенный Объект
firstObject.details = {};
firstObject.details.model = '7';
firstObject.details.color = 'white';
console.log(firstObject);
