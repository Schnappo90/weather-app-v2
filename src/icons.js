import clearDay from './icons/icon-sunny.webp';
import partlyCloudyDay from './icons/icon-partly-cloudy.webp';
import rainyDay from './icons/icon-rain.webp';
import thunderDay from './icons/icon-storm.webp';
import overcastDay from './icons/icon-overcast.webp';

import rainAndCloudy from './animated/rainy-1.svg';
import partiallyCloudy from './animated/cloudy-day-1.svg';
import overcast from './animated/cloudy.svg';
import rain from './animated/rainy-5.svg';
import thunder from './animated/thunder.svg';
import clear from './animated/day.svg';
import cloudyNight from './animated/cloudy-night-3.svg';
import clearNight from './animated/night.svg';
import bgOvercast from './images/overcast.png'
import bgRain from './images/rain.png'
import bgClear from './images/clear.jpg'


export const icons = {
  'Partially cloudy': partlyCloudyDay,
  'Rain, Partially cloudy': rainyDay,
  Clear: clearDay,
  Overcast: overcastDay,
  'Rain, Overcast': rain,
  Thunderstrom: thunderDay,
};

export const bg = {
  Clear: bgClear,
  Overcast: bgOvercast,
  'Partially cloudy': bgOvercast,
  'Rain, Overcast': bgRain,
  'Rain, Partially cloudy': bgRain,
  Thunderstorm: bgOvercast,
}

export const animatedIcons = {
  Clear: clear,
  Overcast: overcast,
  'Partially cloudy': partiallyCloudy,
  'Rain, Overcast': rain,
  'Rain, Partially cloudy': rainAndCloudy,
  Thunderstorm: thunder,
};

export const nightIcons = {
  Clear: clearNight,
  Overcast: cloudyNight,
  'Partially cloudy': cloudyNight,
  'Rain, Overcast': cloudyNight,
  'Rain, Partially cloudy': cloudyNight,
  Thunderstorm: cloudyNight,
};
