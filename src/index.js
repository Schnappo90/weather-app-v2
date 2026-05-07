import './style.css';
import { processWeatherData } from './utils/weatherUtils.js';
import { renderWeather } from './renderUI.js';
import { convertTemperature } from './utils/format.js';

let isCelsius = false;
let currentWeatherData = null;
let city;

const getData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=N9V6Y68ZMC9FN5A59E2FJ2HJ9`
    );
    const data = await response.json();
    return processWeatherData(data);
  } catch (error) {
    console.log(error);
  }
};

const form = document.querySelector('form');
const userCityInput = document.querySelector('input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = userCityInput.value.trim();
  currentWeatherData = await getData(city);
  renderWeather(currentWeatherData, isCelsius);
  console.log(convertTemperature(isCelsius, 65));
});

// console.log(formatCityName("london"))

// getData("London");

const toggleBtnContainer = document.querySelector('.temp-toggle');

toggleBtnContainer.addEventListener('click', async (e) => {
  const button = e.target.closest('button');

  if (!button || !currentWeatherData) return;

  isCelsius = button.classList.contains('toggle-btn--celsius');

  renderWeather(currentWeatherData, isCelsius);
});
