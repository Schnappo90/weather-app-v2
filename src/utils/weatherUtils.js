export const processWeatherData = (data) => {
    const weatherData = data.days[0];
 return {
    city: data.resolvedAddress,
    conditions: weatherData.conditions,
    days: data.days,
    date: data.days[0].datetime,
    time: data.currentConditions.datetime,
    feelsLike: weatherData.feelslike,
    humidity: weatherData.humidity,
    precipProb: weatherData.precipprob,
    currentTemp: weatherData.temp,
    tempMax: weatherData.tempmax,
    tempMin: weatherData.tempmin,
    windSpeed: weatherData.windspeed,
 }
}