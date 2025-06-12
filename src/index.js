import "./styles.css";

import getWeatherData from "./collection";
import extractData from "./processing";

getWeatherData('Wageningen')
.then(rawData => extractData(rawData))
.then(data => console.log(data))


