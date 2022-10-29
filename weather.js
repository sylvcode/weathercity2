const axios = require("axios");
const cityArray = ["Frankfurt", "Maimi"];
const APIKey = "43700ee73704d4a7a92f7aa11e986149";

const getCoordinates = async (city) => {
  const result = {};
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKey}`
  );
  result.longtitude = response.data[0].lon;
  result.latitude = response.data[0].lat;

  return result;
};

cityArray.forEach((city) =>
  getCoordinates(city).then((cordinates) => console.log(cordinates))
);
