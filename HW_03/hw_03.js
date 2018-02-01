// 1) Функция для умножения произврольного числа аргументов
function multiply() {
  let result = 1;
  if (!arguments[0]) {
    return 0;
  }
  for (i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
// 3) Создать функцию reverseString
const reverseString = string => {
  let result = '';
  if (!string) return '';
  for (i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return(result);
}
// 4) Замена символов на юникод значения
const getCodeStringFromText = string => {
  let result = '';
  if (!string) return '';
  for (i = 0; i < string.length; i++) {
    result += (string.charCodeAt(i) + ' ');
  }
  return(result);
}
// 6) Создать две функции - первая принимает массив и callback, вторая обрабатывает каждый элемент массива.
function container(arr, iterFunc) {
  let result = '';
  for (i = 0; i < arr.length; i++) {
    result += iterFunc(arr[i]);
  }
  return('New value: ' + result);
}
const iterFuncCamel = value => value[0].toUpperCase() + value.slice(1);
const iterFuncX10 = value => ' ' + (value * 10) + ',';
const iterFuncAge = value => ' ' + value.name + ' is ' + value.age + ',';
function iterFuncInvert(iter) {
  let result = '';
  for (j = iter.length - 1; j >= 0; j--) {
    result += iter[j];
  }
  return(' ' + result + ',');
};
console.log(container(['my', 'name', 'is', 'Trinity'], iterFuncCamel));
console.log(container([10, 20, 30], iterFuncX10));
console.log(container([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], iterFuncAge));
console.log(container(['abc', '123'], iterFuncInvert));
// пример с every;
function every(arr, handler) {
  for (let i = 0; i < arr.length; i++) {
    if (!handler(arr[i])) return false;
  }
  return true;
}
let customEvery = every([1, 2, 3], element => typeof element === 'number');
console.log(customEvery);
