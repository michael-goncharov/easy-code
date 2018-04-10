// Init tasks module
const tasks = Tasks.getInstance();
// Init UI module
const ui = UI;
// Init localstorage module
const localstorage = Localstorage;
// Init notification module
const notifications = Notifications;
// Init observers
const addTaskObserver = new eventObserver();
const removeTaskObserver = new eventObserver();
const removeAllTasksObserver = new eventObserver();
const editTaskObserver = new eventObserver();

// Subscription on addTask event
addTaskObserver.subscribe(localstorage.update);
addTaskObserver.subscribe(notifications.show);
addTaskObserver.subscribe(ui.checkList);

removeTaskObserver.subscribe(localstorage.update);
removeTaskObserver.subscribe(notifications.show);
removeTaskObserver.subscribe(ui.checkList);

removeAllTasksObserver.subscribe(localstorage.update);
removeAllTasksObserver.subscribe(notifications.show);
removeAllTasksObserver.subscribe(ui.deleteAll);
removeAllTasksObserver.subscribe(ui.checkList);

editTaskObserver.subscribe(localstorage.update);
editTaskObserver.subscribe(notifications.show);

// Init elements
const priceListForm = document.forms['priceList'];
const inputText = priceListForm.elements['itemName'];
const inputPrice = priceListForm.elements['itemPrice'];
const table = document.querySelector('.table');
let tableBody = document.querySelector('.list');
const clearBtn = document.querySelector('#clearBtn');
const select = document.querySelector('.finder');
const searchItemName = document.querySelector('#searchItemName');
let minPrice = document.getElementById('minPrice');
let maxPrice = document.getElementById('maxPrice');
let tableSort = document.querySelector('.sort');
let sortDirection = 'desc';


window.addEventListener('load', function (e) {
    if (localstorage.getTasks() === null) {
        localstorage.update()
    } else {
            let ls = localstorage.getTasks();
            if (ls.length) {
                ls.forEach(task => {
                    tasks.addTask(task)
                        .then(task => ui.addTask(task));
                });
            } else {
                ui.checkList();
            }
    }

});

priceListForm.addEventListener('submit', function (e) {
    e.preventDefault();

        if (!inputText.value) {
             inputText.classList.add('is-invalid');
        }
            else if (!inputPrice.value) {
                inputPrice.classList.add('is-invalid');
            }
                else {
                    // let newTask = tasks.addTask({text: inputText.value, price: inputPrice.value});
                    // ui.addTask(newTask);
                    tasks.addTask({text: inputText.value, price: inputPrice.value})
                        .then(task => ui.addTask(task))
                        .then(() => addTaskObserver.fire({
                            text: 'Новый продукт добавлен успешно',
                            class: 'alert alert-success'
                        }))
                    priceListForm.reset();
                }
    });
    // Удаление и редактирование полей
    tableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-item')) {
            let parent = e.target.closest('tr');
            let id = parent.dataset.id;
            tasks.removeTask(id)
                .then(() => ui.deleteTask(id))
                .then(() => removeTaskObserver.fire({
                    text: 'Продукт удален успешно',
                    class: 'alert alert-warning'
                }))
            } else if (e.target.classList.contains('edit-item')) {
            e.target.classList.toggle('fa-save');
            let parent = e.target.closest('tr');
            let id = parent.dataset.id;
            let span = e.target.closest('tr').querySelector('.price');
                if (e.target.classList.contains('fa-save')) {
                    span.setAttribute('contenteditable', true);
                    span.focus();
                } else {
                    span.setAttribute('contenteditable', false);
                    span.blur();
                    tasks.editTask(id, span.textContent)
                        .then(() => editTaskObserver.fire({
                            text: 'Цена продукта изменена успешно',
                            class: 'alert alert-success'
                        }))
                    }
                }
        })
    // Очистка списка
    clearBtn.addEventListener('click', function (e) {
        tasks.removeAll()
            .then(() => ui.deleteAll)
            .then(() => removeAllTasksObserver.fire({
                text: 'Список очищен',
                class: 'alert alert-success'
            }))
    })
    // Поиск товаров
    select.addEventListener('click', function (e) {
        e.preventDefault();
        tableBody.innerHTML = '';
        tasks.selectTasks(searchItemName.value)
            .then(arr => arr.forEach(element => {
                ui.addTask(element)
            }))
        })

    // Сброс поиска
    clearBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let ls = localstorage.getTasks();
            if (ls.length) {
                ls.forEach(task => {
                tasks.addTask(task)
                    .then(task => ui.addTask(task));
                })
                } else { ui.checkList()}
        })

    // Фильтрация и сотрировка прайса
    filterForm.addEventListener('submit', function (e) {
         e.preventDefault();
         if (!minPrice.value) {
             minPrice.value = 0;
            }
         if (!maxPrice.value) {
             maxPrice.value = 10000;
            }
         if (Number(minPrice.value) > Number(maxPrice.value)) {
                notifications.show({
                    text: 'maxPrice should be greater than minPrice',
                    class: 'alert alert-warning'})
             }
          if (Number(minPrice.value) <= Number(maxPrice.value)){
              let newItems = tasks.getTasks().filter(function(obj){
                    if (obj.price >= Number(minPrice.value) && obj.price <= Number(maxPrice.value)) return true;
                  })
              tableBody.innerHTML = "";
              newItems.forEach(element => {
                  ui.addTask(element)
              })

              }
        });
    // Сортировка списка
        tableSort.addEventListener('click', function (e) {
           let newList = tasks.sortObject(tasks.getTasks());
           tableBody.innerHTML = "";
           newList.forEach(element => {
               ui.addTask(element)
           })
        });

    // Проверка и снятие статуса незаполненных полей

    inputText.addEventListener('keyup', function (e) {
      if (inputText.value) {
        inputText.classList.remove('is-invalid');
      }
    })
    inputPrice.addEventListener('keyup', function (e) {
      if (inputPrice.value) {
        inputPrice.classList.remove('is-invalid');
      }
    })
