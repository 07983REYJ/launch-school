function computeSum(num) {
  let total = 0;
  for (let i = 1; i <= num; i += 1) {
    total += i;
  }
  return total;
}

function computeProduct(num) {
  let total = 1;
  for (let i = 1; i <= num; i += 1) {
    total *= i;
  }
  return total;
}

let readLineSync = require("readline-sync");

let number = readLineSync.question(
  "Please enter an integer greater than 0.\n >> "
);

let operation = readLineSync.question(
  'Enter "s" to compute sum, "p" to compute product.'
);

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`);
}

if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}`
  );
}
