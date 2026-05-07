export const processWeatherData = (data) => {
    const weatherData = data.currentConditions;
 return {
    city: data.resolvedAddress,
    conditions: weatherData.conditions,
    feelsLike: weatherData.feelslike,
    humidity: weatherData.humidity,
    precipProb: weatherData.precipprob,
    currentTemp: weatherData.temp,
    tempMax: data.days[0].tempmax,
    tempMin: data.days[0].tempmin,
    windSpeed: weatherData.windspeed,
 }
}