const API_KEY = "da9b9c71ef287ca0ca2e8252ed129958";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			weather = `${data.weather[0].main} / ${data.main.temp};
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
