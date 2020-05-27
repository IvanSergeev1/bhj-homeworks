'use strict';

const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const toDoList = document.getElementById('tasks__list');

const createTask = () => {
    toDoList.innerHTML += `
          <div class="task">
            <div class="task__title">
              ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>
        `
        input.value = '';
}

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && input.value != '') {
        e.preventDefault();
        createTask();
    } else if (e.key == 'Enter' && input.value == '') {
        e.preventDefault();
        alert('Вы ничего не написали');
    }
});

button.addEventListener('click', (e) => {
    if (input.value != '') {
        e.preventDefault();
        createTask();
    } else if (input.value == '') {
        e.preventDefault();
        alert('Вы ничего не написали');
    }
});

toDoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});
