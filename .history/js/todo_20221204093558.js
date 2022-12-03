const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDOInput = document.querySelector("#todo-form input");

function handleToDoSubmit(event) {
	event.preventDefault();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
