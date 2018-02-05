document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  // ваш код поместить тут
  // проверка родитель или нет
  const isParent = (parent, child) => child.closest(parent.localName) ? true : false;
    console.log(isParent(document.body.children[0], document.querySelector('mark')));
    console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));
  //получить список ссылок вне ul
  let arr = Array.from(document.querySelectorAll('a'));
  let newArr = [];
  for (let i = 0; i < arr.length; i++) if (!arr[i].closest('ul')) newArr.push(arr[i]);
  console.log(newArr);
  //найти элемент который находится перед и после списка ul
  console.log('previous element: ', document.querySelector('ul').previousElementSibling, 'Next element ', document.querySelector('ul').nextElementSibling);
  //посчитать количество элементов li в списке
  console.log('number of "li":', document.querySelectorAll('li').length);
});
