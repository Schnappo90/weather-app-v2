import {
  formatCityName,
  formatMPH,
  formatPercentage,
  convertTemperature,
} from './utils/format.js';
import { icons, animatedIcons } from './icons.js';
import { formatMainDate } from './utils/format.js';
import { isToday } from 'date-fns';
import { format } from 'date-fns';


const elements = {
  background: document.querySelector('.current-weather'),
  time: document.querySelector('.current-weather__local-time'),
  weatherIcon: document.querySelector('.current-weather__icon'),
  cityDisplay: document.querySelector('.current-weather__city'),
  weatherDescriptionDisplay: document.querySelector(
    '.current-weather__condition'
  ),
  currentTemperatureDisplay: document.querySelector(
    '.current-weather__temperature'
  ),
  humidityDisplay: document.querySelector(
    '.metric-card--humidity .metric-card__value'
  ),
  windSpeedDisplay: document.querySelector(
    '.metric-card--wind .metric-card__value'
  ),
  feelsLikeDisplay: document.querySelector(
    '.metric-card--feels-like .metric-card__value'
  ),
  precipitationDisplay: document.querySelector(
    '.metric-card--precipitation .metric-card__value'
  ),
  minTempDisplay: document.querySelector('.temperature-range__value-min'),
  maxTempDisplay: document.querySelector('.temperature-range__value-max'),
};

export const renderWeather = (
  {
    city,
    currentTemp,
    date,
    humidity,
    windSpeed,
    feelsLike,
    conditions,
    precipProb,
    tempMin,
    tempMax,
  },
  isCelsius
) => {
    console.log(animatedIcons[conditions])
  elements.weatherIcon.src = animatedIcons[conditions]
//   elements.weatherIcon.src = animatedIcons[0];
  elements.cityDisplay.textContent = formatCityName(city);
  elements.currentTemperatureDisplay.textContent = convertTemperature(
    isCelsius,
    currentTemp
  );
  if (isToday(new Date(date))) {
    elements.time.textContent = `${formatMainDate(date)}, ${format(Date.now(), 'K:m bbb')}`;
  } else {
    elements.time.textContent = formatMainDate(date);
  }
  elements.currentTemperatureDisplay.setAttribute('value', currentTemp);
  elements.humidityDisplay.textContent = formatPercentage(humidity);
  elements.windSpeedDisplay.textContent = formatMPH(windSpeed);
  elements.feelsLikeDisplay.textContent = convertTemperature(
    isCelsius,
    feelsLike
  );
  elements.precipitationDisplay.textContent = formatPercentage(precipProb);
  elements.weatherDescriptionDisplay.textContent = conditions;
  elements.minTempDisplay.textContent = convertTemperature(isCelsius, tempMin);
  elements.minTempDisplay.setAttribute('value', tempMin);

  elements.maxTempDisplay.textContent = convertTemperature(isCelsius, tempMax);
  elements.maxTempDisplay.setAttribute('value', tempMax);
};
