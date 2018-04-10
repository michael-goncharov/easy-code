// Init tasks module
const myTasks = Tasks.getInstance();

const UI = (function () {

    let tableBody = document.querySelector('.list');
    let emptyAlert = document.querySelector('.empty-alert');

    const template = function (task) {
        return(`<tr data-id=${task.id}>
                <td>
                    <span>${task.text}<span>
                </td>
                <td>
                    <span class="price">${task.price}</span>
                </td>
                <td class="fas fa-edit edit-item">
                </td>
                <td class="fas fa-trash-alt delete-item ml-auto">
                </td>
         </tr>`);
      }

      const addTask = function (task) {
          tableBody.insertAdjacentHTML('afterbegin', template(task));
      }

      const deleteTask = function (id) {
          let element = document.querySelector(`[data-id="${id}"]`);
          element.remove();
      }

      const checkList = function () {
          if (!tableBody.children.length) {
              emptyAlert.style.display = 'block';
          } else {
              emptyAlert.style.display = 'none';
          }
      }

      const deleteAll = function () {
          tableBody.innerHTML = '';
      }

      return {
          addTask,
          deleteTask,
          checkList,
          deleteAll
      }
}());
