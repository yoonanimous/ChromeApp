const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	toDos = toDos.filter((toDo) => toDo.id !== li.id);
	li.remove();
}

function paintToDo(newToDo) {
	const li = document.createElement("li");
	li.id = newToDo.id;
	const span = document.createElement("span");
	span.innerText = newToDo.text;
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
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	};
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
