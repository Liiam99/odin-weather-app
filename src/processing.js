export default function extractData(weatherData) {
  const extractedData = {
    location: weatherData.resolvedAddress,
    days: [],
  };

  const days = weatherData.days;
  days.forEach((day) => {
    const dayData = {
      date: day.datetime,
      temp: day.temp,
      precip: day.precip,
      windspeed: day.windspeed,
      icon: day.icon,
    };

    extractedData.days.push(dayData);
  });

  return extractedData;
}
