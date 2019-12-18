/* JavaScript to display current conditions in the weather summary. */
const oquirrhWeather = "https://api.openweathermap.org/data/2.5/weather?lat=40.561667&lon=-111.960833&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
const bountifulWeather = "https://api.openweathermap.org/data/2.5/weather?lat=40.879722&lon=-111.871667&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
const slcWeather = "https://api.openweathermap.org/data/2.5/weather?lat=40.75&lon=-111.883&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
const laieWeather = "https://api.openweathermap.org/data/2.5/weather?lat=21.648611&lon=-157.925556&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";

var weatherList = [oquirrhWeather, bountifulWeather, slcWeather, laieWeather];

for (let i = 0; i < weatherList.length; i++) {
fetch(weatherList[i])
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);
  

    document.getElementById('currently' + [i]).textContent = weatherObject.weather[0].description.toUpperCase();
    document.getElementById('high' + [i]).textContent = Math.round(weatherObject.main.temp_max) + "° F";
    document.getElementById('currentTemp' + [i]).textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity' + [i]).textContent = weatherObject.main.humidity + "%";
    document.getElementById('windspeed' + [i]).textContent = Math.round(weatherObject.wind.speed) + " mph";
  
/* JavaScript to calculate the windchill in the weather summary. */
var high = weatherObject.main.temp;
var windSpeed = weatherObject.wind.speed;
var windMilesPerHour = windSpeed * 0.16;
var windChillFactor = 35.74 + 0.6215 * high - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * high * Math.pow(windSpeed, 0.16);

if (high <= 50 && windSpeed >= 3) {
document.getElementById("windchill" + [i]).innerHTML = Math.round(windChillFactor) + "° F";
}
else {
document.getElementById("windchill" + [i]).innerHTML = "N/A";
}
  
})};
