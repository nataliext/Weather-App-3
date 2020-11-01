//date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let date = document.querySelector("#date");
date.innerHTML = `${day}`;

//time
let hours = now.getHours();
let minutes = now.getMinutes();

let time = document.querySelector("#time");
time.innerHTML = `${hours}:${minutes}`;

//weather
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windSpeedElement = document.querySelector("#windSpeed");
  windSpeedElement.innerHTML = response.data.wind.speed;
}

let city = "Birmingham";
let apiKey = "f0efa6d2628a33743d96ce2e48f71ed5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
