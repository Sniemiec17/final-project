let now = new Date();
let currentTime = document.querySelector(".time-and-date");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

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

currentTime.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showSentence);
}

function showSentence(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let windSpeed = Math.round(response.data.wind.speed);
  let temperatureLive = document.querySelector("temperature");

  temperatureLive.innerHTML = `${temperature};`;
}
