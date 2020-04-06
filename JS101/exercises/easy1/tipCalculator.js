let readLineSync = require("readline-sync");

let bill = parseFloat(readLineSync.question("What is the bill amount?\n"));
let tipPercent = parseFloat(
  readLineSync.question("What is the tip perentage?\n")
);

let tip = tipPercent * 0.01 * bill;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
