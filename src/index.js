import "./styles.css";

import { displayWeatherData } from "./display";
import getWeatherData from "./collection";
import extractData from "./processing";

(() => {
  const locationForm = document.querySelector(".location-form");
  locationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = document.querySelector("#location").value;

    getWeatherData(location)
      .then((rawData) => extractData(rawData))
      .then((data) => displayWeatherData(data))
      .catch((err) => console.log(err))
  });
})();
