$(document).ready(function) () {

    const apiKey =

    const cityE1 = $('h2#city');
    const dateE1 = $('h3#date');
    const weatherIconE1 = $('img#weather-icon');
    const temperatureE1 = $('span#temperature');
    const humidityE1 = $('span#humidity');
    const windE1 = $('span#wind');
    const cityListE1 = ('div.cityList');
    const cityInput = $('#city-input')

    let pastSearches = [];

    function loadCities() {
        const storedCities = JSON.parse(localStorage.getItem('pastSearches'));
        if (storedCities) {
            pastSearches = storedCities;
        }

        function savedCities() {
            localStorage.setItem('pastSearches', JSON.stringify(pastSearches));
        }
}