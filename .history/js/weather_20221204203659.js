const API_KEY = "da9b9c71ef287ca0ca2e8252ed129958"

function onGeoSuccess(position) {

}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={da9b9c71ef287ca0ca2e8252ed129958}