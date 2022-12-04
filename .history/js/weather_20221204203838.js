const API_KEY = "da9b9c71ef287ca0ca2e8252ed129958";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
