const axios = require("axios");

const apiKey = "43700ee73704d4a7a92f7aa11e986149";
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIkey}`;
axios.get(apiUrl).then((response) => {
  console.log(response.data);
});
