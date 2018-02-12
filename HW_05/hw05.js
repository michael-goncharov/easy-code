
//Начальный массив данных
let tasks = [
  "Выучить javascript",
  "Выучить Angular4",
  "Пойти на JS конференцию"
];
//Определение переменных - список, значок удаления
let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let addItemMessage = document.querySelector('.alert-success');
let removeItemMessage = document.querySelector('.alert-danger');
let emptyListMessage = document.querySelector('.alert-info');
let clearListBtn = document.querySelector('.clear-btn');

//Функция генерирующая список из массива
function generateList(tasksArray) {
  //Проверка пустого списка
  if (tasksArray.length === 0) {
    infoMessage(emptyListMessage);
  }
  else {
    //Генерация списка
    for (let i = 0; i < tasksArray.length; i++) {
      ul.appendChild(listTemplate(tasksArray[i]));
    }
  }
 }
//Функция генерирующая разметку одной задачи
function listTemplate(task) {
  //Генерируется li
  let li = document.createElement('li');
  li.textContent = task;
  li.className = 'list-group-item d-flex align-items-center';
  //Генерируется иконка
  let iDelete = document.createElement('i');
  iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
  //Иконка вставляется в li
  li.appendChild(iDelete);

  return li;

}
//Очистка списка перед перерисовкой
function clearList() {
  ul.innerHTML = "";
  tasks = [];
}
//Добавление элемента в массив задач и перерисовка списка
function addList(list) {
  tasks.unshift(list);
  emptyListMessage.classList.remove('show');
  infoMessage(addItemMessage);
  ul.insertAdjacentElement('afterbegin', listTemplate(list));
}

//Удаление элемента списка
function deleteListItem(target) {
  let parent = target.closest('li');
  let index = tasks.indexOf(parent.textContent);
  infoMessage(removeItemMessage);
  tasks.splice(index, 1);
  parent.remove();
  if (tasks.length === 0) setTimeout(function() {infoMessage(emptyListMessage)}, 1500);
};

//Функция показа сообщений
function infoMessage(value) {
  value.classList.add('show');
  if (value !== emptyListMessage) {
    setTimeout(function() {value.classList.remove('show')}, 1500);
  }
  }

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!inputText.value) {
    inputText.classList.add('is-invalid');
  } else {
    inputText.classList.remove('is-invalid');
    addList(inputText.value);
    form.reset();
  }
});

inputText.addEventListener('keyup', function (e) {
  if (inputText.value) {
    inputText.classList.remove('is-invalid');
  }
})

ul.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-item')) {
    deleteListItem(e.target);
  }
});

clearListBtn.addEventListener('click', function(e) {
  clearList();
  infoMessage(removeItemMessage);
  setTimeout(function() {infoMessage(emptyListMessage)}, 1500);
 })

//Генерация списка
generateList(tasks);
