export function displayWeatherData(weatherData) {
  const locationName = document.querySelector(".location-name");
  locationName.textContent = weatherData.location;

  const weatherCardContainer = document.querySelector(
    ".weather-card-container",
  );
  weatherCardContainer.innerHTML = "";

  const docFrag = document.createDocumentFragment();
  weatherData.days.forEach((day) => {
    const weatherCard = createWeatherCard(day);
    docFrag.append(weatherCard);
  });

  weatherCardContainer.append(docFrag);
}

function createWeatherCard(dayData) {
  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-card";

  const date = document.createElement("time");
  date.setAttribute("datetime", dayData.date);
  const dateObject = new Date(Date.parse(dayData.date));
  date.textContent = dateObject.getDate();

  const temp = document.createElement("div");
  temp.textContent = dayData.temp + " °C";

  const precipWindspeedContainer = document.createElement("div");
  precipWindspeedContainer.className = "precip-windspeed-container";
  const precip = document.createElement("span");
  precip.textContent = dayData.precip + " mm";
  const windspeed = document.createElement("span");
  windspeed.textContent = dayData.windspeed + " km/h";
  precipWindspeedContainer.append(precip, windspeed);

  weatherCard.append(date, temp, precipWindspeedContainer);

  const iconSvg = require(
    `svg-inline-loader?classPrefix!./assets/${dayData.icon}.svg`,
  );
  date.insertAdjacentHTML("afterend", iconSvg);

  return weatherCard;
}
