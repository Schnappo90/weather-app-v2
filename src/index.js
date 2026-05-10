import './style.css';
import { processWeatherData } from './utils/weatherUtils.js';
import { renderWeather } from './renderUI.js';
import { renderForecast } from './forecastModule.js';
import { renderHourlyForecast } from './hourlyModule.js';
import { getCurrentTimeStamp } from './utils/format.js';
import { isBefore } from 'date-fns';
import { formatTime } from './utils/format.js';

let isCelsius = true;
let currentWeatherData = null;
let city;
let selectedDay;

const getData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=N9V6Y68ZMC9FN5A59E2FJ2HJ9`
    );
    const data = await response.json();
    console.log('Orginal Data object: ', data);

    return processWeatherData(data);
  } catch (error) {
    console.log(error);
  }
};

const form = document.querySelector('form');
const userCityInput = document.querySelector('input');
const forecastSection = document.querySelector('.weather-forecast-list');
const hourlyForecastSection = document.querySelector(
  '.weather-hourly-forecast-list'
);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = userCityInput.value.trim();
  currentWeatherData = await getData(city);
  renderWeather(currentWeatherData, isCelsius);
  forecastSection.innerHTML = '';
  hourlyForecastSection.innerHTML = '';

  currentWeatherData.days.forEach((day, index) => {
    forecastSection.append(renderForecast(isCelsius, day, index));

    //if current time > hours.datetime, remove index
    // day.hours.forEach(hour => {
    //     hourlyForecastSection.append(renderHourlyForecast(isCelsius, day, index));
    // })
  });
  //   console.log(currentWeatherData.days);
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

  selectedDay = {
    city: currentWeatherData.city,
    currentTemp: day.temp,
    date: day.datetime,
    hours: day.hours,
    humidity: day.humidity,
    windSpeed: day.windspeed,
    feelsLike: day.feelslike,
    conditions: day.conditions,
    precipProb: day.precipprob,
    tempMin: day.tempmin,
    tempMax: day.tempmax,
  };

  renderWeather(currentWeatherData, isCelsius)

  //   console.log("test: ", selectedDay.hours)
  
  // console.log(selectedDay)
  // console.log(selectedDay.hours)
  
  hourlyForecastSection.innerHTML = '';
  const now = new Date();

  selectedDay.hours.forEach((hour, index) => {
    const hourDate = new Date(hour.datetimeEpoch * 1000);

    if (isBefore(hourDate, now)) return;

    hourlyForecastSection.append(renderHourlyForecast(isCelsius, hour, index));
  });
});
