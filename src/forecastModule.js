import { convertTemperature, formatDate } from "./utils/format.js";
import { icons } from "./icons.js"

export function renderForecast(isCelcius, {
    conditions,
    tempmin,
    tempmax,
    datetime,
    // precipprob
}, index) {
    // const forecastList = document.querySelector(".forecast__list");

  // Create elements
  const listItem = document.createElement("li");
  listItem.dataset.day = index;

  const article = document.createElement("article");
  article.classList.add("forecast-card");

  const dayElement = document.createElement("div");
  dayElement.classList.add("forecast-card__day");
  dayElement.textContent = formatDate(datetime);

  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("forecast-card__icon");

  const iconElement = document.createElement("img");
  iconElement.classList.add("material-symbols-outlined");
  iconElement.src = icons[conditions];

  const temperatureGroup = document.createElement('div');
  temperatureGroup.classList.add("forecast-card__temperature-group")

  const highTempElement = document.createElement("div");
  highTempElement.classList.add("forecast-card__high-temp");
  highTempElement.textContent = `${convertTemperature(isCelcius, tempmax)}`;

  const lowTempElement = document.createElement("div");
  lowTempElement.classList.add("forecast-card__low-temp");
  lowTempElement.textContent = `${convertTemperature(isCelcius, tempmin)}`;

  temperatureGroup.append(highTempElement,lowTempElement)

  // Build structure
  iconWrapper.append(iconElement);

  article.append(
    dayElement,
    iconWrapper,
    temperatureGroup,
  );

  listItem.append(article);
  return listItem;

  // Render to DOM
//   forecastList.append(listItem);
}