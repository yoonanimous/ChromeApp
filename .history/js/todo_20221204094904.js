const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newToDo;
	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "❌";
	deleteBtn.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(deleteBtn);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
