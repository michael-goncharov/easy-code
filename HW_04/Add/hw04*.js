//   Задача со звездочкой. Создать функцию которая будет выводить сообщение на страницу.
// Функция принимает текст сообщения и на странице показывает блок с этим сообщением.
// За разметку взять alert alert-info из бутстрапа 4.
// Элемент должен быть сразу на странице над списком с задачами и через стили ему должно быть задано display:none свойство.
//  При вызове вашей функции в скрипте добавляется класс show на элемент, на данный класс в стилях должно быть прописано
//  display: block. Для того что бы добавить класс можно использовать следующий метод element.classList.add('имя класса').
//   Также можно добавить что бы сообщение исчезало через определенное врямя, для этого нужно добавить setTimeout
//   который принимает функцию и время через которое эта функция должна сработать,
//   внутри функции вы можете снять класс с alert сделать это можно методом element.classList.remove('имя класса').
//   Это задание делать только если вы сделали задания из презентаций. По вопросам и уточнениям писать мне в личку.
let tasks = [
  "Выучить javascript",
  "Выучить Angular4",
  "Пойти на JS конференцию"
];
let ul = document.querySelector('.list-group');
function generateList(tasksArray) {
  clearList();
  for (let i = 0; i < tasksArray.length; i++) {
    ul.appendChild(listTemplate(tasksArray[i]));
  }
}
function listTemplate(task) {
  let li = document.createElement('li');
  li.textContent = task;
  li.className = 'list-group-item';
  return li;
}

function clearList() {
  ul.innerHTML = "";
}

function addList(list) {
  tasks.push(list);
  generateList(tasks);
  addAlert();
}
generateList(tasks);

function removeAlert() {
  let element = document.querySelector('.show');
  element.classList.remove('show');
}

function addAlert() {
  let al = document.querySelector('.alert');
  al.classList.add('show')
  setTimeout(removeAlert, 1000);
}
