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
//Генерация таблицы
function tableGen(arr) {

  for (let i = 0; i < arr.length; i++) {
    let template = `
        <tr data-id=${arr[i].id}>
            <td>
               ${arr[i].name}
            </td>
            <td>
                ${arr[i].price}
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
             ${name}
          </td>
          <td>
              ${price}
          </td>
      </tr>
  `;
  items.unshift({
    id: id,
    name: name,
    price: Number(price)
  });

  tableBody.insertAdjacentHTML('afterbegin', template);
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
tableSort.addEventListener('click', function (e) {
   let newList = sortObject(items);
   tableBody.innerHTML = "";
  tableGen(newList);
});
//Проверка на пустые поля

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!itemName.value) {
    itemName.classList.add('is-invalid');
  } else if (!itemPrice.value) {
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
