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
  let icon = document.querySelector("#icon");
  let code = response.data.weather[0].icon;
  if (code === "11d") {
    icon.setAttribute("src", "images/thunderstorm.png");
  } else if (code === "09d") {
    icon.setAttribute("src", "images/rain.png");
  } else if (code === "10d") {
    icon.setAttribute("src", "images/showerain.png");
  } else if (code === "09d") {
    icon.setAttribute("src", "images/rain.png");
  } else if (code === "13d") {
    icon.setAttribute("src", "images/snow.png");
  } else if (code === "50d") {
    icon.setAttribute("src", "images/mist.png");
  } else if (code === "01d") {
    icon.setAttribute("src", "images/sun.png");
  } else if (code === "01n") {
    icon.setAttribute("src", "images/moon.png");
  } else if (code === "02d") {
    icon.setAttribute("src", "images/fewclouds.png");
  } else if (code === "02n") {
    icon.setAttribute("src", "images/moon.png");
  } else if (code === "03d" || code === "03n") {
    icon.setAttribute("src", "images/scatterclouds.png");
  } else if (code === "04d" || code === "04n") {
    icon.setAttribute("src", "images/brokenclouds.png");
  }

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${code}@2x.png`
  );
}

let city = "sydney";
let apiKey = "f0efa6d2628a33743d96ce2e48f71ed5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
