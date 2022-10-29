const { readFileSync, promises: fsPromises } = require("fs");

async function asyncReadfile(cities) {
  try {
    const contents = await fsPromises.readFile(cities, "utf8");
    const arr = contents.split(/\r?\n/);
    console.log(arr);
  } catch (err) {
    console.error(err);
  }
}

asyncReadfile("cities.txt");
