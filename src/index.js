let now = new Date();
let currentTime = document.querySelector(".time-and-date");

let date = now.getDate();
let hours = now.getHours();
let year = now.getFullYear();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0 ${hours}`;
}

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

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];

currentTime.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#find-city");
  let showCity = document.querySelector("h1");
  showCity.innerHTML = searchInput.value;
  displayCity(searchInput.value);
}

let formControl = document.querySelector("#search-form");
formControl.addEventListener("submit", showCity);

function displayCity(city) {
  let apiKey = "642951862a7920f532185fc7d53ba878";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  celciusTemperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(celciusTemperature);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = `The city is experiencing ${response.data.weather[0].description}`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelcius(event) {
  event.preventDefault;
  celciusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let celciusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelcius);
