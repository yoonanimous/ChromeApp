const toDoForm = document.getElementById("todo-form");
const toDOInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDOInput.value;
	toDOInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
