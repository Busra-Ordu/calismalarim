import { saveToLocalStorage } from "../modules/localStorage.js";
const todoList = document.querySelector("#todoList");
const addTodoForm = document.querySelector("#addTodoForm");
// const dateInput = document.querySelector("#dateInput")
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const date = new Date();

// dateInput.setAttribute("min", date.toLocaleDateString())

addTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todo = formData.get("todo");
    const endDate = formData.get("endDate");
    const finallyEndDate = endDate.replaceAll("-", ".").split(".").reverse().join(".")
    const newTodo = {
        todo,
        startDate: date.toLocaleDateString(),
        finallyEndDate,
        isCompleted: false
    }
    todos.push(newTodo)
    saveToLocalStorage(todos, "todos")
    renderTodos();
    e.target.reset();
})

console.log(todos);

function renderTodos(){
    todoList.innerHTML = "";
    todos.forEach(task => {
        todoList.innerHTML += `${task.todo} <button>Düzenle</button><button>Sil</button> <br/>`
    })
}

renderTodos();

