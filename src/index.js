import './style.css';
import { processWeatherData } from './utils/weatherUtils.js';
import { renderWeather } from './renderUI.js';
import { renderForecast } from './forecastModule.js';
import { renderHourlyForecast } from './hourlyModule.js';
import { getCurrentTimeStamp } from './utils/format.js';
import { isBefore } from 'date-fns';
import { formatTime } from './utils/format.js';
import loading from './icons/icon-loading.svg';

let isCelsius = true;
let currentWeatherData = null;
let city;
let selectedDay;

function removeSkeleton() {
  const cards = document.querySelectorAll('.skeleton');
  const items = document.querySelectorAll('.weather-forecast-list li');

  cards.forEach((item) => {
    item.classList.remove('skeleton');
  });

  items.forEach((item) => {
    item.classList.remove('skeleton');
  });
  console.log('Skeleton classes removed');
}

function addSkeleton() {
  const currentWeatherSection = document.querySelector('.current-weather');
  const items = document.querySelectorAll('.weather-metrics__item');
  const cards = document.querySelectorAll('.weather-forecast-list li');

  items.forEach((item) => item.classList.add('skeleton'));
  cards.forEach((item) => item.classList.add('skeleton'));
  currentWeatherSection.classList.add('skeleton');

  currentWeatherSection.innerHTML = `
    <img class="spin" src="${loading}" alt="">
    <p>Loading</p>
  `;
}

const getData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=N9V6Y68ZMC9FN5A59E2FJ2HJ9`
    );

    const data = await response.json();
    console.log('Orginal Data object: ', data);

    // removeSkeleton();

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
  if (userCityInput.value.trim() === '') return;
  city = userCityInput.value.trim();

  let skeletonTimer = setTimeout(() => {
    addSkeleton();
  }, 500);

  clearTimeout(skeletonTimer); // cancel skeleton if data arrived in time
  removeSkeleton();

  currentWeatherData = await getData(city);
  renderWeather(currentWeatherData, isCelsius);
  forecastSection.innerHTML = '';
  hourlyForecastSection.innerHTML = '';

  currentWeatherData.days.forEach((day, index) => {
    if (index >= 7) return;
    forecastSection.append(renderForecast(isCelsius, day, index));
  });

console.log(currentWeatherData)

const startOfCurrentHour = new Date();
startOfCurrentHour.setMinutes(0,0,0)

  currentWeatherData.days[0].hours.forEach((hour, index) => {
    const hourDate = new Date(hour.datetimeEpoch * 1000);

    if(isBefore(hourDate, startOfCurrentHour)) return;
    hourlyForecastSection.append(renderHourlyForecast(isCelsius, hour, index))
    // console.log(currentWeatherData)
  })

  console.log(hourlyForecastSection.childElementCount)

  if(hourlyForecastSection.childElementCount < 9) {
    const p = document.createElement("p")
    p.textContent = "See more weather for tomorrow";
    p.classList.add('last-list-item');

    hourlyForecastSection.append(p)
  }

});

// console.log(formatCityName("london"))

// getData("London");

const toggleBtnContainer = document.querySelector('.temperature-toggle');

toggleBtnContainer.addEventListener('click', async (e) => {
  const button = e.target.closest('button');

  if (!button || !currentWeatherData) return;
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

  if (!listItem || !currentWeatherData) return;

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
    timezone: currentWeatherData.timezone,
  };

  renderWeather(currentWeatherData, isCelsius);

  //   console.log("test: ", selectedDay.hours)

  // console.log(selectedDay)
  // console.log(selectedDay.hours)

  hourlyForecastSection.innerHTML = '';
  const now = new Date();

  selectedDay.hours.forEach((hour, index) => {
    const hourDate = new Date(hour.datetimeEpoch * 1000) - 3600;

    if (isBefore(hourDate, now)) return;

    hourlyForecastSection.append(renderHourlyForecast(isCelsius, hour, index));
  });
});
