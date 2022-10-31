const { readFileSync, promises } = require("fs");
// read file asynchronously

async function asyncReadFile(citiesFile) {
  try {
    const contents = await promises.readFile(citiesFile, "utf-8");

    const arr = contents.split(/\r?\n/);

    return arr;
  } catch (err) {
    console.log(err);
  }
}
function logAll(cities) {
  console.log(cities);
}

function getBobby() {
  return "Bobby";
}
let person = getBobby;
let person2 = getBobby();

console.log(person);
console.log(person2);
asyncReadFile("./cities.txt").then(logAll);

// const love = { heart: "yes", mind: "no" };
// const { heart } = love;

// console.log(heart);
// console.log(love.heart);
// console.log(love.mind);

// const { heart: fsPromises } = love;
// console.log(fsPromises);

//async function asyncReadfile(cities) {
//try {
// const contents = await fsPromises.readFile(cities, "utf8");
// const arr = contents.split(/\r?\n/);
//console.log(arr);
//} catch (err) {
//  console.error(err);
//}
//}
//asyncReadfile("cities.txt");

// function readTextFile(file) {
//   let rawFile = new XMLHttpRequest();
//   rawFile.open("  Get", file, false);
//   rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         let allText = rawFile.responseText;
//         alert(allText);
//       }
//     }
//   };
//   rawFile.send(null);
// }
