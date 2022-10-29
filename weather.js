const axios = require("axios");

function WeatherAPI() {
  this.baseUrl = "http://api.openweathermap.org/data/2.5/forecast?";
  this.APIKey = "43700ee73704d4a7a92f7aa11e986149";
}

WeatherAPI.prototype.fetchData = async function (location, countryCode, date) {
  let response = null,
    req = util.format(
      "%sq=%s,%s&units=metric&APPID=%s",
      this.baseUrl,
      location,
      countryCode,
      this.APIKey
    );

  try {
    response = await axios.get(req, { timeout: 2000 });
    return reponse;
  } catch (e) {
    throw Error("API call error");
  }
};
