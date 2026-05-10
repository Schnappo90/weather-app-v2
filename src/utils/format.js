import { format, isToday } from 'date-fns';

export function formatCityName(city) {
  return city
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function formatTemperature(temp) {
  return temp.toFixed(0) + '°';
}

export function formatMPH(value) {
  return value.toFixed(0) + ' mph';
}

export function formatPercentage(value) {
  return value.toFixed(0) + '%';
}

function convertToCelsius(value) {
  const celsius = ((value - 32) * 5) / 9;
  return formatTemperature(celsius);
}

export function convertTemperature(isCelsius, temp) {
  //if bool (isCelsius) is true, convert to celsius else return the value;
  return isCelsius ? convertToCelsius(temp) : formatTemperature(temp);
}

export function formatDate(date) {
  const parsedDate = Date.parse(date);
  if (isToday(new Date(parsedDate))) {
    return 'Today';
  } else {
    return format(new Date(parsedDate), 'EEE');
  }
}

export function formatMainDate(date) {
  const parsedDate = Date.parse(date);
  return format(new Date(parsedDate), 'EEEE d LLLL yyyy');
}

export function formatTime(datetimeEpoch) {
  const date = new Date(datetimeEpoch * 1000);
  const formatted = format(date, 'HH:mm');
  return formatted;
}

export function getCurrentTimeStamp() {
  const currDate = new Date();
  return format(currDate, 'HH:mm');
}
