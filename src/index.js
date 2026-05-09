import './style.css';
import { processWeatherData } from './utils/weatherUtils.js';
import { renderWeather } from './renderUI.js';
import { renderForecast } from './forecastModule.js';

let isCelsius = true;
let currentWeatherData = null;
let city;

const getData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=N9V6Y68ZMC9FN5A59E2FJ2HJ9`
    );
    const data = await response.json();
    console.log("Orginal Data object: ", data);

    return processWeatherData(data);
  } catch (error) {
    console.log(error);
  }
};

const form = document.querySelector('form');
const userCityInput = document.querySelector('input');
const forecastSection = document.querySelector('.weather-forecast-list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = userCityInput.value.trim();
  currentWeatherData = await getData(city);
  renderWeather(currentWeatherData, isCelsius);
  forecastSection.innerHTML = "";
  currentWeatherData.days.forEach((day, index) => {
    forecastSection.append(renderForecast(isCelsius, day, index));
  });
  console.log(isCelsius);
});

// console.log(formatCityName("london"))

// getData("London");

const toggleBtnContainer = document.querySelector('.temperature-toggle');

toggleBtnContainer.addEventListener('click', async (e) => {
  const button = e.target.closest('button');

  if (!button || !currentWeatherData) return;
  console.log('clicked');
  if (button.classList.contains('toggle-celsius')) {
    isCelsius = true;
  } else {
    isCelsius = false;
  }

  renderWeather(currentWeatherData, isCelsius);
  forecastSection.innerHTML = '';
  currentWeatherData.days.forEach((day, index) => {
    console.log('Index: ', index);
    forecastSection.append(renderForecast(isCelsius, day, index));
  });
});

// const forecastList = document.querySelector('weather-forecast-list');
const forecastList = document.querySelector('.weather-forecast-list');

forecastList.addEventListener('click', (e) => {
  const listItem = e.target.closest('li');
  if (!listItem) return;
  const selectedIndex = listItem.dataset.day;
  const day = currentWeatherData.days[selectedIndex];

  // console.log("current weather: ", currentWeatherData)
  // console.log("Selected weather: ", day)

  const selectedDay = {
    city: currentWeatherData.city,
    currentTemp: day.temp,
    date: day.datetime,
    humidity: day.humidity,
    windSpeed: day.windspeed,
    feelsLike: day.feelslike,
    conditions: day.conditions,
    precipProb: day.precipprob,
    tempMin: day.tempmin,
    tempMax: day.tempmax,
  };

  renderWeather(selectedDay, isCelsius);
});
