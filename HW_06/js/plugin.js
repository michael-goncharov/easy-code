// Models
let items = [
    {
        id: 'OEsRBHOpKKEJavp',
        name: 'Процессок Intel i7 3Ghz',
        price: 100
    },
    {
        id: 'fLeW18YdolznHK8',
        name: 'Процессок Intel i5 3Ghz',
        price: 50
    }
];
let form = document.forms['priceList'];
let itemName = form.elements['itemName'];
let itemPrice = form.elements['itemPrice'];
let table = document.querySelector('.table');
let tableBody = document.querySelector('.list');
let tableSort = document.querySelector('.sort');
let sortDirection = 'desc';
let notificationAlert = document.querySelector('.alert');

//Генерация таблицы
function tableGen(arr) {
  for (let i = 0; i < arr.length; i++) {
    let template = `
        <tr data-id=${arr[i].id}>
            <td>
               <span>${arr[i].name}<span>
            </td>
            <td>
                <span>${arr[i].price}</span>
            </td>
            <td class="fas fa-edit edit-item">
            </td>
            <td class="fas fa-trash-alt delete-item ml-auto">
            </td>
        </tr>
    `;
    tableBody.insertAdjacentHTML('afterbegin', template);
  }
}
//Генерация id
function idGen() {
  let string = 'abcde12345';
  let id = '';
  for (var i = 0; i < string.length; i++) {
    id += string[Math.floor(Math.random()*10)];
  }
  return id;
}
//Добавление строки
function addItem(name, price) {
  let id = idGen();
  let template = `
      <tr data-id=${id}>
          <td>
             <span>${name}<span>
          </td>
          <td>
              <span>${price}</span>
          </td>
          <td class="fas fa-edit edit-item">
          </td>
          <td class="fas fa-trash-alt delete-item ml-auto">
          </td>
      </tr>
  `;
  items.unshift({
    id: id,
    name: name,
    price: Number(price)
  });
  tableBody.insertAdjacentHTML('afterbegin', template);
  message({
    text: 'Item added successfully',
    cssClass: 'alert-success',
    timeout: 2000
  })
}
//Удаление строки
function deleteListItem(id) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items.splice(i, 1);
      break;
    }
  }
  message({
    text: 'Item deleted successfully',
    cssClass: 'alert-warning',
    timeout: 2000
  })
};
//Редактирование строки
function editItem(id, newItem) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items[i].name = newItem;
      break;
    }
  }
  message({
    text: 'Item changed successfully',
    cssClass: 'alert-success',
    timeout: 2000
  })
}
//Сортировка
function sortObject(arr) {
  if (sortDirection === 'desc') {
    let newArr = arr.sort((a, b) => b.price - a.price);
    sortDirection = ''
    return newArr;
  }
  else {
    let newArr = arr.sort((a, b) => a.price - b.price);
    sortDirection = 'desc';
    return newArr;
  }
}
//Сообщения
function message(settings) {
  notificationAlert.classList.add(settings.cssClass);
  notificationAlert.classList.add('show');
  notificationAlert.textContent = settings.text;

  setTimeout(function () {
    notificationAlert.classList.remove('show')
  }, settings.timeout);
}

tableBody.addEventListener('click', function(e) {
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
tableSort.addEventListener('click', function (e) {
   let newList = sortObject(items);
   tableBody.innerHTML = "";
   tableGen(newList);
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!itemName.value) {
    itemName.classList.add('is-invalid');
  }
    else if (!itemPrice.value) {
      itemPrice.classList.add('is-invalid');
    }
      else {
       addItem(itemName.value, itemPrice.value);
       form.reset();
      }
});
itemName.addEventListener('keyup', function (e) {
  if (itemName.value) {
    itemName.classList.remove('is-invalid');
  }
})
itemPrice.addEventListener('keyup', function (e) {
  if (itemPrice.value) {
    itemPrice.classList.remove('is-invalid');
  }
})

tableGen(items);
