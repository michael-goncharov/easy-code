// Присваивание.
// Записать в коротком виде:
// a = a + 10, b = b * 18, c = c - 10
a += 10, b *= 18, c -= 10;
// x = a + x, y = y * z, i = i * 5 * y
x += a, y *= z, i *= 5 * y
// Как возвести переменную в квадрат
let value = 2;
value *= value;
console.log(value);
//Арифметические операторы
//let a = 5; console.log(a++) ---> 5
//let a = 5; console.log(++a) ---> 6
//Как с помощью оператора % узнать четное ли число
if (value % 2 === 1) { console.log('Число нечетное') }
  else {console.log('Число четное') }
// Условные операторы
// Задача про 'hidden'
let status = 'hidden';
if (status === 'hidden') {
  status = 'visible';
} else if (status === 'visible') {
  status = 'hidden';
}
console.log(status);
// Задача про if
//let value3 = 0;
//let value3 = -4;
//let value3 = 5;
if (value3 === 0) { value3 = 1 }
else if (value3 < 0) { value3 = 'less than zero' }
else if (value3 > 0) { value3 *= 10 }
// То же через тернарный оператор:
//let value3 = 0;
//let value3 = -4;
//let value3 = 5;
value3 === 0 ? value3 = 1 : (value3 < 0 ? value3 = 'less than zero' : value3 *= 10)
//Конструкция switch/case
//let a = 'block';
//let a = 'none';
//let a = 'inline';
switch (a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other')
}
// Преобразования типов:
//let a = 0 || 'string' //---> 'string'
//let a = 1 && 'string' //---> 'string'
//let a = null || 25 //---> 25
//let a = null && 25 //---> null
//let a = null || 0 || 35 //---> 35
//let a = null && 0 && 35 //---> null
console.log(a);
//Что отобразится в консоли
//console.log(12 + 14 + '12') //2612
//console.log(3 + 2 - '1') //4
//console.log('3' + 2 - 1) //31
//console.log(true + 2) //3
//console.log(+'10' + 1) //11
//console.log(undefined + 2) // NaN
//console.log(null + 5) //5
//console.log(true + undefined) //NaN
//Задачи на циклы
//1) I am in the easycode
let string = "I am in the easycode";
let result = '';
for (let i = 0; i < string.length; i++) {
  if (string[i-1] === ' ') {
    result += string[i].toUpperCase()
  }
  else {
    result += string[i]
  }
}
console.log(result)
//2) tseb eht ma i
let initialString = "tseb eht ma i";
let reversedString = '';
for (let i = initialString.length - 1; i >= 0; i--) {
    reversedString += initialString[i]
  }
console.log(reversedString)
//3) факториал 10
let result = 1;
for (let i = 1; i <= 10; i++) {
  result *= i;
}
//4) Создать строку "Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
let result = 'Считаем до 10и: ';
for (let i = 1; i <= 10; i++) {
  result += i;
  if (i < 10) {
  result += ', ';
  }
}
console.log(result);
//5) Манипуляции с "JavaScript is a pretty good language"
let string = "JavaScript is a pretty good language";
let result = '';
for (let i = 0; i < string.length; i++) {
  if (string[i-1] === ' ') {
    result += string[i].toUpperCase()
  }
  else {
    if (string[i] === ' ') continue;
    result += string[i]
  }
}
console.log(result)
//6) Поиск нечетных чисел от 1 до 15
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 1) console.log(i)
}
