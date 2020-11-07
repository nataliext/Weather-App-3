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
if (hours < 10) hour = `0${hours}`;
let minutes = now.getMinutes();
if (minutes < 10) minutes = `0${minutes}`;

let time = document.querySelector("#time");
time.innerHTML = `${hours}:${minutes}`;

//weather
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "f0efa6d2628a33743d96ce2e48f71ed5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
  console.log(cityInputElement.value);

  let currentCity = document.querySelector("#city");
  if (cityInputElement.value) {
    currentCity.innerHTML = `${cityInputElement.value}`;
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
