const clock = document.querySelector("#clock");
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}
