//Массивы
//Функция удваивающая содержимое массива
const doubleArray = arr => arr.concat(arr);
doubleArray([1, 2, 3]);
//Получить последний элемент массива - использовать функецию, массив не менять
const lastEl = arr => arr[arr.length-1];
lastEl([1, 2, 3, 5]);
//Функция принимает число N и наполняет массив числами от 1 до N
const getArray = num => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
getArray(10);
//Удаление первых символов из коллекции массивов
function changeCollection() {
  const result = [];
  for (let i = 0; i < arguments.length; i++) {
    result.push(arguments[i].slice(1));
  }
  return result;
}
console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'], [8, 9, 0]));
console.log(changeCollection([1, 2, 3]));
//Упорядочение строки
const sortString = string => string.split('').sort().reverse().join('');
sortString('fhansudmkaye');
//Отсортировать массив в обратном порядке
const arrSort = arr => arr.sort((a, b) => b - a);
console.log(arrSort([2, 4, 7, 1, -2, 10, -9]));
//Обрезка массива нужной величины
const getNewArray = (arr, start, end) => arr.slice(start, end + 1);
console.log(getNewArray([2, 4, 7, 1, -2, 10, -9], 2, 4));
//Удвоить элементы массива, не используя циклы
const doubleArray2 = arr => arr.concat(arr);
doubleArray2([1, 2, 3, 'a', 'b', 'c']);
//Удалить из [1, 2, 3, 4, 5] 2 и 3 элементы
const newArray = arr => {
  arr.splice(2, 2);
  return arr;
}
newArray([1, 2, 3, 4, 5]);
//Удалить из [1, 2, 3, 4, 5] 2 и 3 элементы и вставить чместо них 'three' и 'four'
const newArray2 = arr => {
  arr.splice(2, 2, 'three', 'four');
  return arr;
}
newArray2([1, 2, 3, 4, 5]);
//Вставить в произвольный массив после 3-го элемента любое значение
const newArray3 = arr => {
  arr.splice(3, 0, 'bonus');
  return arr;
}
newArray3([1, 2, 3, 4, 5]);
//Отсортировать массив массивов по длине
const sortArrays = arr => arr.sort((a, b) => a.length - b.length);
console.log(sortArrays([[1, 2, 3, 4, 5], ['a', 'b', 'c'], [8, 9]]));
//Создать копию произвольного массива (slice, concat) - я так понял двумя способами
const initialArray = [1, 2, 3, 4, 5];
const copyArray = initialArray.slice();
const copyArray2 = initialArray.concat([]);
console.log(copyArray, copyArray2);
//Отсортировать массив объектов по полю cores
const myObject = [
  {cpu: 'intel', info: {cores: 2, cash: 3}},
  {cpu: 'intel', info: {cores: 4, cash: 4}},
  {cpu: 'amd', info: {cores: 1, cash: 1}},
  {cpu: 'intel', info: {cores: 3, cash: 2}},
  {cpu: 'amd', info: {cores: 4, cash: 2}},
];
const sortObject = arr => arr.sort((a, b) => a.info.cores - b.info.cores);
console.log(sortObject(myObject));
//Фильтрация и сортировка массива объектов по полю цена
const products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
const filterCollection = (arr, minPrice, maxPrice) => arr.filter(element => element.price >= minPrice && element.price <= maxPrice).sort((a, b) => a.price - b.price);
console.log(filterCollection(products, 5, 20));

// DOM
// <!DOCTYPE html>
// <html>
//   <head></head>
//   <body>
//     <div>
//       <p>Text</p>
//       <p>Other</p>
//       <p>Next</p>
//       <p>Last</p>
//     </div>
//     <div></div>
//     <div></div>
//   </body>
// </html>
//вывести в консоль head
let head = document.getElementsByTagName('head')[0];
console.log(head);
//вывести в консоль body
let body = document.getElementsByTagName('body')[0];
console.log(body);
//вывести в консоль все дочерние элементы body
console.log(body.children);
//вывести все дочерние узлы первого div
console.log(body.firstElementChild.children);
//вывести в консоль все дочерние узлы первого div без первого и последнего
console.log(body.firstElementChild.firstElementChild.nextElementSibling, body.firstElementChild.lastElementChild.previousElementSibling);
