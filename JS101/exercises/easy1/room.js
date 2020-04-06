let readLineSync = require("readline-sync");

console.log("Enter the length of the room in meters: ");
let length = readLineSync.prompt();

console.log("Enter the width of the room in meters: ");
let width = readLineSync.prompt();

let squareMeters = length * width;
let squareFeet = (squareMeters * 10.739).toFixed(2);

console.log(
  `The area of the room is ${squareMeters} square meters (${squareFeet} square feet)`
);
