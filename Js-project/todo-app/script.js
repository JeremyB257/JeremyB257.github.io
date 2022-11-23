// CONST
const addTextTodo = document.querySelector('.input__text');
const addBtn = document.querySelector('.input__btn');
const todos = document.querySelector('.todos');
const todoInput = document.querySelector('.todo__input');

//SELECTOR
addBtn.addEventListener('click', addTodo);

//FUNCTION

let storedData = window.localStorage.todos ? JSON.parse(window.localStorage.todos.split(',')) : [];

function getTodo() {
  for (i = 0; i < storedData.length; i++) {
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    todoDiv.innerHTML =
      `
        <input type="checkbox" class="todo__input uncompleted" name="check" id="check"  onclick="completedTodo(this)">
        <p>` +
      storedData[i] +
      `</p>
        `;

    todos.appendChild(todoDiv);

    // delete btn
    const deleteTodo = document.createElement('button');
    deleteTodo.className = 'todo__delete';
    deleteTodo.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteTodo.addEventListener('click', function (e) {
      e.target.parentElement.remove();
    });
    todoDiv.appendChild(deleteTodo);
  }
}
getTodo();

function addTodo(e) {
  e.preventDefault();
  // todo div
  if (addTextTodo.value) {
    storedData.push(addTextTodo.value);
    window.localStorage.setItem('todos', JSON.stringify(storedData));

    addTextTodo.value = '';

    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    todoDiv.innerHTML =
      `
        <input type="checkbox" class="todo__input uncompleted" name="check" id="check"  onclick="completedTodo(this)">
        <p>` +
      storedData[i] +
      `</p>
        `;

    todos.appendChild(todoDiv);

    // delete btn
    const deleteTodo = document.createElement('button');
    deleteTodo.className = 'todo__delete';
    deleteTodo.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteTodo.addEventListener('click', function (e) {
      e.target.parentElement.remove();
    });
    todoDiv.appendChild(deleteTodo);
  }
}

function completedTodo(e) {
  e.classList.toggle('completed');
  e.classList.toggle('uncompleted');
}

function applyFilter(filter) {
  const todo = document.querySelectorAll('.todo');
  switch (filter) {
    case 'all':
      for (i = 0; i < todo.length; i++) {
        todo[i].classList.remove('hidden');
      }
      break;

    case 'uncompleted':
      for (i = 0; i < todo.length; i++) {
        if (todo[i].children[0].classList[1] !== 'uncompleted') {
          todo[i].classList.add('hidden');
        } else {
          todo[i].classList.remove('hidden');
        }
      }
      break;

    case 'completed':
      for (i = 0; i < todo.length; i++) {
        if (todo[i].children[0].classList[1] !== 'completed') {
          todo[i].classList.add('hidden');
        } else {
          todo[i].classList.remove('hidden');
        }
      }
      break;
  }
}
