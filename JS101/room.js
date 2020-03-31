let readLineSync = require("readline-sync");

console.log("Enter the length of the room in meters: ");
let length = readLineSync.prompt();

console.log("Enter the width of the room in meters: ");
let width = readLineSync.prompt();

let squareMeter = length * width;
let squareFeet = (squareMeter * 10.739).toFixed(2);

console.log(`${squareMeter} (${squareFeet} square feet)`);
