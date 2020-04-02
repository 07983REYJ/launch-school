let readLineSync = require("readline-sync");

let num1 = Number(readLineSync.question("Enter the first number: "));
let num2 = Number(readLineSync.question("Enter the second number: "));

console.log(`${num1} + ${num2} = ${num1 + num2} `);
console.log(`${num1} - ${num2} = ${num1 - num2} `);
console.log(`${num1} * ${num2} = ${num1 * num2} `);
console.log(`${num1} / ${num2} = ${num1 / num2} `);
console.log(`${num1} % ${num2} = ${num1 % num2} `);
console.log(`${num1} ** ${num2} = ${num1 ** num2} `);
