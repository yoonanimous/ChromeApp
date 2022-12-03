const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
	const li = document.createElement("li");
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
