// ЗАДАЧА 1

// Создать функцию, которая возвращает промис.
// Функция принимает два аргумента - время, через которое промис должен
// выполниться, и значение, с которым промис будет выполнен.
console.log("task 1");
function promiseCreator(delay, value) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

// ЗАДАЧИ 2 и 3

// Создать класс, который производит экземпляр со следующими свойствами:
// - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.
// Создать html c кнопкой и текстовым полем.
// Используя класс из 2й задачи, создать экземпляр промиса.
// При нажатии на кнопку созданный промис должен выполняться со значением
// из текстового поля (вывести в консоль).

const form = document.forms['simpleForm'];
const btn = form.elements['submitButton'];
const input = form.elements['text'];

class Prom {
    constructor() {
        this.promise = new Promise(function (resolve, reject) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (input.value !== "") {
                    resolve(input.value);
                } else {
                    reject('Text field is empty');
                };
            });
        });
    }
    resolve(value) {
        return value;
    }
    reject(error) {
        return error
    }
}

const inst = new Prom();

 inst.promise.then(console.log, console.log);

// ЗАДАЧА 4

// Используя fetch метод, создать get запрос к адресу https://jsonplaceholder.typicode.com/posts.
//
// Отобразить в списке ul полученные поля из response. Показывать только id и title поля:
// 1 sunt aut...
// 2 qui est…
//
// Не производить манипуляции с DOM в цикле!


function lineTemplate(line) {
    let li = document.createElement('li');
    li.textContent = `${line.id}. ${line.title}`;
    li.className = 'list-group-item d-flex align-items-center';
    return li;
}
const list = document.querySelector('.list');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(text => {
        text.forEach(line => {
            list.appendChild(lineTemplate(line));
        })
    })
    .catch( alert );

// ЗАДАЧА 5

// Выполнить два запроса:
// - https://jsonplaceholder.typicode.com/posts
// - https://jsonplaceholder.typicode.com/users
//
// Вывести в консоль информацию о количестве постов и юзеров.
// Запросы должны выполняться одновременно, информацию выводить только после того, как будут обработаны оба запроса.
// По желанию можно использовать встроенные инструменты js (Promise, fetch) или jQuery методы.

setTimeout(() => {
    console.log('Task 5');
    req1 = fetch('https://jsonplaceholder.typicode.com/posts');
    req2 = fetch('https://jsonplaceholder.typicode.com/users');

    req1
    .then(response => response.json())
    .then(array => array.length)
    .then(number => console.log('Количество постов', number))
    req2
    .then(response => response.json())
    .then(array => array.length)
    .then(number => console.log('Количество юзеров', number))
  }, 1000);
