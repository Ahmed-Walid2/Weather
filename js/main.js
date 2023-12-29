let searchBox = document.querySelector("#search");
let locationCity = document.querySelector(".location");
let degree = document.querySelector(".num");
let todayStatues = document.querySelector(".today-statues");
let todayIcon = document.querySelector("#today-icon");
let secIcon = document.querySelector("#sec-icon");
let secDeg = document.querySelector("#sec-deg");
let secSmallDeg = document.querySelector("#sec-small-deg");
let secStatues = document.querySelector("#sec-statues");
let thirdIcon = document.querySelector("#third-icon");
let thirdDeg = document.querySelector("#third-deg");
let thirdSmallDeg = document.querySelector("#third-small-deg");
let thirdStatues = document.querySelector("#third-statues");
let today = document.querySelector("#today");
let todayDate = document.querySelector("#today-date");
let secDay = document.querySelector("#sec-day");
let thirdDay = document.querySelector("#third-day");

displayWeatherForCity("cairo");

searchBox.addEventListener("keyup", function () {
  displayWeatherForCity(searchBox.value || "cairo");
});

async function displayWeatherForCity(city) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8915cd32cf36432fbb7155335232812&q=${city}&days=3`
  );

  let data = await response.json();

  if (response.status === 200) {
    let myDate = new Date(data.forecast.forecastday[0].date);
    let myDate2 = new Date(data.forecast.forecastday[1].date);
    let myDate3 = new Date(data.forecast.forecastday[2].date);

    let day = getDayName(myDate.getDay());

    let day2 = getDayName(myDate2.getDay());

    let day3 = getDayName(myDate3.getDay());

    let month = getMonthName(myDate.getMonth());

    let dayInNumber = myDate.getDate();

    today.innerHTML = day;
    locationCity.innerHTML = data.location.name;
    degree.innerHTML = data.current.temp_c + `<sup>o</sup>C`;
    todayStatues.innerHTML = data.current.condition.text;
    todayDate.innerHTML = dayInNumber + month;
    todayIcon.innerHTML = `<img class="w-100 " src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" />`;

    secDay.innerHTML = day2;
    secIcon.innerHTML = `<img  src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" />`;

    secDeg.innerHTML =
      data.forecast.forecastday[1].day.maxtemp_c + `<sup>o</sup>C`;

    secSmallDeg.innerHTML =
      data.forecast.forecastday[1].day.mintemp_c + `<sup>o</sup>C`;

    secStatues.innerHTML = data.forecast.forecastday[1].day.condition.text;

    thirdDay.innerHTML = day3;
    thirdIcon.innerHTML = `<img  src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" />`;

    thirdDeg.innerHTML =
      data.forecast.forecastday[2].day.maxtemp_c + `<sup>o</sup>C`;

    thirdSmallDeg.innerHTML =
      data.forecast.forecastday[2].day.mintemp_c + `<sup>o</sup>C`;

    thirdStatues.innerHTML = data.forecast.forecastday[2].day.condition.text;
  }
}

// Helper Functions
function getDayName(numberOfDay) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = weekDays[numberOfDay];
  // console.log(dayName);

  return dayName;
}

function getMonthName(numberOfMonth) {
  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthsNames[numberOfMonth];

  return monthName;
}
