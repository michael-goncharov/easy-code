// Init id module

const id = Id;

// Tasks module

const Tasks = (function () {

    let tasks = [];
    let instance;

    const getTasks = function () {
        return tasks;
    }

    const setTasks = function (array) {
        tasks = array;
        return tasks;
    }

    const addTask = async function (task) {
        task.id = id.generate();
        await tasks.unshift(task);
        return task;
    }

    const removeTask = async function (id) {
        tasks = await tasks.filter(task => task.id !==id);
        return tasks;
    }

    const removeAll = async function () {
        tasks = [];
    }

    const editTask = async function (id, newPrice) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
              tasks[i].price = newPrice;
              break;
            }
        }
        return tasks;
    }

    const selectTasks = async function (string) {
        const selectedTasks = [];
        myTasks.getTasks().forEach((task) => {
            if (task.text.indexOf(string) + 1) {
                selectedTasks.push(task)
            }
        })
        return selectedTasks;
    }

    const sortObject = function (arr) {
        if (sortDirection === 'desc') {
            let newArr = arr.sort((a, b) => b.price - a.price);
            sortDirection = ''
            return newArr;
        } else {
            let newArr = arr.sort((a, b) => a.price - b.price);
            sortDirection = 'desc';
            return newArr;
          }
    }

    const createInstance = function () {
        return {
            getTasks,
            setTasks,
            addTask,
            removeTask,
            removeAll,
            editTask,
            sortObject,
            selectTasks
        }
    }

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

}());
