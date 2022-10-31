const axios = require("axios");
const { promises } = require("fs");
const APIKey = "43700ee73704d4a7a92f7aa11e986149";

async function asyncReadFile(citiesFile) {
  try {
    const contents = await promises.readFile(citiesFile, "utf-8");

    const unfilteredArr = contents.split(/\r?\n/);
    const results = unfilteredArr.filter((element) => {
      return element !== undefined;
    });
    return results;
  } catch (err) {
    console.log(err);
  }
}

const getCoordinates = async (city) => {
  const result = {};
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKey}`
    );
    result.longtitude = response.data[0].lon;
    result.latitude = response.data[0].lat;

    return result;
  } catch (err) {
    console.log("could not get", city);
  }
};

asyncReadFile("./cities.txt").then((cities) => {
  cities.forEach((city) => {
    console.log(city);
    getCoordinates(city).then((cordinates) => console.log(cordinates));
  });
});
