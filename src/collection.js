export default async function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?`;
  const urlParams = new URLSearchParams({
    include: "day",
    unitGroup: "metric",
    key: process.env.VC_API_KEY,
    contentType: "json",
  });

  try {
    const response = await fetch(url + urlParams.toString());

    if (response.ok) {
      const json = await response.json();

      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}
