import { convertTemperature, formatPercentage, formatTime, getCurrentTimeStamp } from "./utils/format.js";
import { icons } from "./icons.js";
import { format } from "date-fns";

export function renderHourlyForecast(isCelcius, {
    conditions,
    tempmax,
    datetime,
    datetimeEpoch,
    // hours,
    temp,
    precipprob,
}, index) {
    // const forecastList = document.querySelector(".forecast__list");

  // Create elements

  const listItem = document.createElement("li");
  listItem.dataset.hour = index;

  const article = document.createElement("article");
  article.classList.add("forecast-card");

  const dayElement = document.createElement("div");
  dayElement.classList.add("forecast-card__day");
  dayElement.textContent = formatTime(datetimeEpoch);


  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("forecast-card__icon");

  const iconElement = document.createElement("img");
  iconElement.classList.add("material-symbols-outlined");
  iconElement.src = icons[conditions];


  const highTempElement = document.createElement("div");
  highTempElement.classList.add("forecast-card__high-temp");
  highTempElement.textContent = `${convertTemperature(isCelcius, temp)}`;

  const precipEl = document.createElement("div");
  precipEl.classList.add("forecast-card__precipitation");
  precipEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M479-469Zm205-263q58 54 82 91.5t24 70.93q0 46.57-31 79.07-31 32.5-75 32.5t-75-32.63q-31-32.62-31-78.94 0-32.43 24.5-69.93Q627-677 684-732Zm0 25q-41 45-63.5 80T598-569.2q0 36.21 24.31 63.71Q646.63-478 683.81-478q37.19 0 61.69-27.49 24.5-27.5 24.5-63.71 0-22.8-22.5-58.3T684-707ZM479.82-148Q372-148 296-224.1T220-408q0-79 61.5-170T480-796q49 47 86 86.25 37 39.24 66 75.75 0 2-4.96 7.83-4.97 5.83-7.04 8.17-27-32-61.5-69.5T480-769Q348-638 294-557t-54 149.13Q240-308 310-238t170 70q50 0 93.5-19t76-51.5Q682-271 701-315t19-93q0-17-3-33t-9-34q1.9-1.97 7.5-7.5t7.5-7.5q10 23 13.5 42.57t3.5 39.49q0 107.74-76.18 183.84-76.19 76.1-184 76.1ZM505-234q4.28-.8 5.64-3.21 1.36-2.41 1.36-5.82 0-3.97-3.78-5.97-3.78-2-8.22 0-58 8-112.5-31T324-379q-1-7-2.68-10-1.68-3-5.32-3-3 0-6 2t-2 10q9 68 70 112t127 34Zm179-359Z"/></svg> ${formatPercentage(precipprob)}`;

  // Build structure
  iconWrapper.append(iconElement);

  //   if(index > 8) {
  //   const fillLi = document.createElement("li")
  //   fillLi.classList.add("last-list-item")
  //   const p = document.createElement("p")
  //   p.textContent = "See more weather for tomorrow"

  //   fillLi.append(p);
  //   listItem.append(fillLi);
  // }

  article.append(
    iconWrapper,
    dayElement,
    precipEl,
    highTempElement,
  );

  listItem.append(article);
  return listItem;

}