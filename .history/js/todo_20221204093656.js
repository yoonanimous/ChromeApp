const toDoForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
	event.preventDefault();
	toDOInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
