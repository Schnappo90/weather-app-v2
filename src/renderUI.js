import {
  formatCityName,
  formatMPH,
  formatPercentage,
  convertTemperature,
} from './utils/format.js';

const elements = {
  cityDisplay: document.querySelector('.city'),
  weatherDescriptionDisplay: document.querySelector('.weather-description'),
  currentTemperatureDisplay: document.querySelector('.temperature'),
  humidityDisplay: document.querySelector(
    '.weather-card--humidity .card-value'
  ),
  windSpeedDisplay: document.querySelector('.weather-card--wind .card-value'),
  feelsLikeDisplay: document.querySelector(
    '.weather-card--feels-like .card-value'
  ),
  minTempDisplay: document.querySelector('.min-temperate'),
  maxTempDisplay: document.querySelector('.max-temperate'),
};

export const renderWeather = (
  {
    city,
    currentTemp,
    humidity,
    windSpeed,
    feelsLike,
    conditions,
    tempMin,
    tempMax,
  },
  isCelsius
) => {
  elements.cityDisplay.textContent = formatCityName(city);
  elements.currentTemperatureDisplay.textContent = convertTemperature(
    isCelsius,
    currentTemp
  );
  elements.currentTemperatureDisplay.setAttribute('value', currentTemp);
  elements.humidityDisplay.textContent = formatPercentage(humidity);
  elements.windSpeedDisplay.textContent = formatMPH(windSpeed);
  elements.feelsLikeDisplay.textContent = convertTemperature(
    isCelsius,
    feelsLike
  );
  elements.weatherDescriptionDisplay.textContent = conditions;
  elements.minTempDisplay.textContent = convertTemperature(isCelsius, tempMin);
  elements.minTempDisplay.setAttribute('value', tempMin);
  elements.maxTempDisplay.textContent = convertTemperature(isCelsius, tempMax);
  elements.maxTempDisplay.setAttribute('value', tempMax);
};
