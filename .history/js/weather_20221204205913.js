const API_KEY = "da9b9c71ef287ca0ca2e8252ed129958";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherContainer = document.createElementByID("weather");
			const name = data.name;
			const weather = data.weather[0].main;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
