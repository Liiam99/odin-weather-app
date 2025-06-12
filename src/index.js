import "./styles.css";

import { displayWeatherData } from "./display";
import getWeatherData from "./collection";
import extractData from "./processing";

(() => {
  const locationForm = document.querySelector(".location-form");
  locationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const locationInput = document.querySelector("#location");
    const location = locationInput.value;

    getWeatherData(location)
      .then((rawData) => extractData(rawData))
      .then((data) => displayWeatherData(data))
      .catch((err) => {
        console.log(err);
      });
  });
})();
