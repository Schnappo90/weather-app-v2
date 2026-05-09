// import clearDay from './animated/day.svg';
// import cloudy from './animated/cloudy.svg';
// import rainy from './animated/rainy-1.svg';
// import thunder from './animated/thunder.svg';
import cloudy from './animated/cloudy.svg';
import partiallyCloudy from './animated/rainy-1.svg';
import overcast from './animated/cloudy.svg';
import rain from './animated/rainy-5.svg';
import thunder from './animated/thunder.svg';
import clear from './animated/day.svg';

export const icons = {
  'Partially cloudy': `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M466-738v-128h28v128h-28Zm206 86-20-21 91-91 20 21-91 91Zm66 186v-28h128v28H738Zm5 269-91-91 21-21 91 91-21 21ZM289-651l-93-93 21-19 92 92-20 20Zm-19 457h160q35 0 60.5-25.5T516-280q0-35-24.5-60T432-365h-35l-13-31q-16-37-49.5-58.5T260-476q-57 0-96.5 39.5T124-340q0 61 42.5 103.5T270-194Zm0 28q-72 0-123-51T96-340q0-69 47.5-116.5T260-504q53 0 96 30.5t60 80.5q48 0 87.5 26.5T544-281q0 47-33 81t-81 34H270Zm272-135q-2-7-4-13.5t-4-13.5q48-20 77-60.5t29-91.5q0-66-47-113t-113-47q-63 0-109 42.5T321-492l-14-4-14-4q8-72 61.5-120T480-668q78 0 133 55t55 133q0 60-34.5 108.5T542-301Zm-61-179Z"/></svg>`,
  'Rain, Partially cloudy': `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M551-99q-5 3-10.5 1t-8.5-7l-70-140q-3-5-1-10.5t7-8.5q5-3 11-.5t9 7.5l70 139q3 5 .5 10.5T551-99Zm241 0q-5 3-10.5 1t-8.5-7l-70-140q-3-5-1-10.5t7-8.5q5-3 11-.5t9 7.5l70 139q3 5 .5 10.5T792-99Zm-481 0q-5 3-11 1t-9-7l-70-140q-3-5-.5-10.5t7.5-8.5q5-3 10.5-.5t8.5 7.5l70 139q3 5 1 10.5t-7 8.5Zm-11-247q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-77-54.5-131.5T480-826q-56 0-102 30.5T309-714l-3 8h-8q-68 2-116 50t-48 116q0 69 48.5 117.5T300-374Zm180-226Z"/></svg>`,
  Clear: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M466-738v-128h28v128h-28Zm206 86-19-19 89-93 21 21-91 91Zm66 186v-28h128v28H738ZM466-94v-127h28v127h-28ZM290-653l-94-89 22-20 91 90-19 19Zm452 457-89-93 19-18 90 89-20 22ZM94-466v-28h128v28H94Zm123 270-19-22 89-89 10 10 11 10-91 91Zm130-151q-55-55-55-133t55-133q55-55 133-55t133 55q55 55 55 133t-55 133q-55 55-133 55t-133-55Zm246-20q47-47 47-113t-47-113q-47-47-113-47t-113 47q-47 47-47 113t47 113q47 47 113 47t113-47ZM480-480Z"/></svg>`,
  Overcast: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M260-212q-70 0-119-49T92-380q0-66 47-117t115-51q10-86 74.5-143T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H260Zm0-28h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg>`,
  'Rain, Overcast': `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M551-99q-5 3-10.5 1t-8.5-7l-70-140q-3-5-1-10.5t7-8.5q5-3 11-.5t9 7.5l70 139q3 5 .5 10.5T551-99Zm241 0q-5 3-10.5 1t-8.5-7l-70-140q-3-5-1-10.5t7-8.5q5-3 11-.5t9 7.5l70 139q3 5 .5 10.5T792-99Zm-481 0q-5 3-11 1t-9-7l-70-140q-3-5-.5-10.5t7.5-8.5q5-3 10.5-.5t8.5 7.5l70 139q3 5 1 10.5t-7 8.5Zm-11-247q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-77-54.5-131.5T480-826q-56 0-102 30.5T309-714l-3 8h-8q-68 2-116 50t-48 116q0 69 48.5 117.5T300-374Zm180-226Z"/></svg>`,
};

export const animatedIcons = {
  Clear: clear,
  Overcast: overcast,
  'Partially cloudy': cloudy,
  'Rain, Overcast': rain,
  'Rain, Partially cloudy': partiallyCloudy,
  Thunderstorm: thunder,
};
