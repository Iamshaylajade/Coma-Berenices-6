$(document).ready(function) () {

    const apiKey =

const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

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