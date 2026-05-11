import {
  formatCityName,
  formatMPH,
  formatPercentage,
  convertTemperature,
} from './utils/format.js';
import { animatedIcons, bg } from './icons.js';
import { formatMainDate } from './utils/format.js';
import { isToday } from 'date-fns';
import { format } from 'date-fns';

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
  const section = document.querySelector('.current-weather');
  //   elements.weatherIcon.src = animatedIcons[conditions];
  //   elements.background.style.backgroundImage = `url(${bg[conditions]})`

  //   elements.cityDisplay.textContent = formatCityName(city);
  //   elements.currentTemperatureDisplay.textContent = convertTemperature(
  //     isCelsius,
  //     currentTemp
  //   );
  //   if (isToday(new Date(date))) {
  //     elements.time.textContent = `${formatMainDate(date)}, ${format(Date.now(), 'K:m bbb')}`;
  //   } else {
  //     elements.time.textContent = formatMainDate(date);
  //   }
  //   elements.currentTemperatureDisplay.setAttribute('value', currentTemp);

  section.innerHTML = `
    <div class="current-weather__display-left">
      <h2 id="current-weather-heading" class="visually-hidden">Current weather</h2>
      <p class="current-weather__city">${formatCityName(city)}</p>
      <p class="current-weather__local-time">${formatMainDate(date)}</p>
    </div>

    <div class="current-weather__display-right">
      <div class="current-weather__summary">
        <div class="current-weather__icon">
          <span class="material-symbols-outlined" aria-hidden="true">
            <img class="current-weather__main-icon" src="${animatedIcons[conditions]}">
          </span>
        </div>
        <p class="current-weather__condition">${conditions}</p>
      </div>

      <div class="current-weather__temperature-group">
        <data class="current-weather__temperature" value="${currentTemp}">
          ${convertTemperature(isCelsius, currentTemp)}
        </data>

        <dl class="temperature-range">
                  <div class="temperature-range__item">
            <dt class="temperature-range__label">High</dt>
            <dd class="temperature-range__value">
              <data class="temperature-range__value-max" value="${tempMax}">${convertTemperature(isCelsius, tempMax)}</data>
            </dd>
          </div>
          <div class="temperature-range__item">
            <dt class="temperature-range__label">Low</dt>
            <dd class="temperature-range__value">
              <data class="temperature-range__value-min" value="${tempMin}">${convertTemperature(isCelsius, tempMin)}</data>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  `;

  document.querySelector(
    '.metric-card--humidity .metric-card__value'
  ).textContent = formatPercentage(humidity);
  document.querySelector('.metric-card--wind .metric-card__value').textContent =
    formatMPH(windSpeed);
  document.querySelector(
    '.metric-card--feels-like .metric-card__value'
  ).textContent = convertTemperature(isCelsius, feelsLike);
  document.querySelector(
    '.metric-card--precipitation .metric-card__value'
  ).textContent = formatPercentage(precipProb);

  //   elements.weatherDescriptionDisplay.textContent = conditions;
  //   elements.minTempDisplay.textContent = convertTemperature(isCelsius, tempMin);
  //   elements.minTempDisplay.setAttribute('value', tempMin);

  //   elements.maxTempDisplay.textContent = convertTemperature(isCelsius, tempMax);
  //   elements.maxTempDisplay.setAttribute('value', tempMax);
};

// const elements = {
//   section: document.querySelector('.current-weather'),
//   time: document.querySelector('.current-weather__local-time'),
//   weatherIcon: document.querySelector('.current-weather__main-icon'),
//   cityDisplay: document.querySelector('.current-weather__city'),
//   weatherDescriptionDisplay: document.querySelector(
//     '.current-weather__condition'
//   ),
//   currentTemperatureDisplay: document.querySelector(
//     '.current-weather__temperature'
//   ),
//   humidityDisplay: document.querySelector(
//     '.metric-card--humidity .metric-card__value'
//   ),
//   windSpeedDisplay: document.querySelector(
//     '.metric-card--wind .metric-card__value'
//   ),
//   feelsLikeDisplay: document.querySelector(
//     '.metric-card--feels-like .metric-card__value'
//   ),
//   precipitationDisplay: document.querySelector(
//     '.metric-card--precipitation .metric-card__value'
//   ),
//   minTempDisplay: document.querySelector('.temperature-range__value-min'),
//   maxTempDisplay: document.querySelector('.temperature-range__value-max'),
// };
