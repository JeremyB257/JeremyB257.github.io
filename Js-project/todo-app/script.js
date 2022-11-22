// CONST
const addTextTodo = document.querySelector('.input__text');
const addBtn = document.querySelector('.input__btn');
const todos = document.querySelector('.todos');
const todoInput = document.querySelector('.todo__input')

//SELECTOR
addBtn.addEventListener('click', addTodo);




//FUNCTION
function addTodo(e) {
    e.preventDefault();
    // todo div
    if(addTextTodo.value) {
    const todo = document.createElement("div");
    todo.className = 'todo';
    todo.innerHTML = `
        <input type="checkbox" class="todo__input" name="check" id="check">
        <p>` + addTextTodo.value + `</p>
        `;
       
    todos.appendChild(todo);

    addTextTodo.value = "";


    // delete btn
    const deleteTodo = document.createElement('button');
    deleteTodo.className = 'todo__delete';
    deleteTodo.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteTodo.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    })
    todo.appendChild(deleteTodo);
}
}