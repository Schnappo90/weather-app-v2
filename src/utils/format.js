export function formatCityName(city) {
  const address = city.split(',')[0];
  return address[0].toUpperCase() + address.slice(1);
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
  return isCelsius ? convertToCelsius(temp) : formatTemperature(temp)
}
