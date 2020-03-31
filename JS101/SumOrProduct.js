let readLineSync = require("readline-sync");

let num = readLineSync.question("Please enter an integer greater than 0: ");
let action = readLineSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

let arr = [];

for (i = 1; i <= num; i += 1) {
  arr.push(i);
}
if (action === "p") {
  let result = arr.reduce(function(acc, cur) {
    return acc * cur;
  });
  console.log(`The product of the integers between 1 and ${num} is ${result}`);
}

if (action === "s") {
  let result = arr.reduce(function(acc, cur) {
    return acc + cur;
  });
  console.log(`The sum of the integers between 1 and ${num} is ${result}`);
}
