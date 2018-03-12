
// Models
let items;
let form = document.forms['priceList'];
let itemName = form.elements['itemName'];
let table = document.querySelector('.table');
let tableBody = document.querySelector('.list');
let notificationAlert = document.querySelector('.alert');

// Запрос на сервер, получение списка и генерация HTML
ajax.send({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos',
    success: function (res) {
        items = JSON.parse(res);
        tableGen(items);
    },
    error: function (err) {
        console.log(err);
    }
});

// Функция генерации таблицы
function tableGen(arr) {
    for (let i = 0; i < arr.length; i++) {
        let template;
        if (arr[i].completed === false) {
        template = `
            <tr data-id=${arr[i].id}>
                <td>
                   <span>${arr[i].title}<span>
                </td>
                <td class="fas fa-edit edit-item">
                </td>
                <td class="fas fa-trash-alt delete-item ml-auto">
                </td>
            </tr>
        `;
         } else {
                  template = `
                      <tr data-id=${arr[i].id} class="bg-success">
                           <td>
                               <span>${arr[i].title}<span>
                           </td>
                           <td class="fas fa-edit edit-item">
                           </td>
                           <td class="fas fa-trash-alt delete-item ml-auto">
                           </td>
                      </tr>
                      `;
                  }
          tableBody.insertAdjacentHTML('afterbegin', template);
    }
}

// Функция добавления задачи
function addItem(title) {
    ajax.send({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: JSON.stringify({
            userId: 1,
            title: title,
            completed: false
          }),
        success: function (res, status) {
            let response = JSON.parse(res);
            console.log(response, status);
            items.unshift({
                userId: 1,
                id: response.id,
                title: title,
                completed: false
              });
            tableGen([{
                userId: 1,
                id: response.id,
                title: title,
                completed: false
              }]);
            message({
                text: 'Item added successfully',
                cssClass: 'alert-success',
                timeout: 2000
              })
            },
        error: function (err) {
            console.log(err);
        }
    })
}
// Функция удаления строки
function deleteListItem(id) {
    ajax.send({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        success: function (res, status) {
            console.log(res, status);
            items.splice(id, 1);
            message({
                text: 'Item deleted successfully',
                cssClass: 'alert-warning',
                timeout: 2000
              })
            },
        error: function (err) {
            console.log(err);
          }
        })
};

// Функция редактирования строки
function editItem(id, newItem) {
    ajax.send({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        success: function (res, status) {
            console.log(res, status);
            let response = JSON.parse(res);
            items[response.id].title = newItem;
            message({
                text: 'Item changed successfully',
                cssClass: 'alert-success',
                timeout: 2000
            })
          },
        error: function (err) {
            console.log(err);
          }
    })
}

// Сообщения
function message(settings) {
    notificationAlert.classList.add(settings.cssClass);
    notificationAlert.classList.add('show');
    notificationAlert.textContent = settings.text;
    setTimeout(function () {
      notificationAlert.classList.remove('show')
    }, settings.timeout);
}

// Удаление и редактирование полей
tableBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
      let parent = e.target.closest('tr');
      let id = parent.dataset.id;
      deleteListItem(id);
      parent.remove();
    }
        else if (e.target.classList.contains('edit-item')) {
            e.target.classList.toggle('fa-save');
            let parent = e.target.closest('tr');
            let id = parent.dataset.id;
            let span = e.target.closest('tr').querySelector('span');
                if (e.target.classList.contains('fa-save')) {
                    span.setAttribute('contenteditable', true);
                    span.focus();
                }
                  else {
                      span.setAttribute('contenteditable', false);
                      span.blur();
                      editItem(id, span.textContent);
                }
        }
});
// Проверка и снятие статуса незаполненных полей
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!itemName.value) {
        itemName.classList.add('is-invalid');
    }
        else {
            addItem(itemName.value);
            form.reset();
        }
});
itemName.addEventListener('keyup', function (e) {
    if (itemName.value) {
        itemName.classList.remove('is-invalid');
    }
});
