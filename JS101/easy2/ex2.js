let readLineSync = require("readline-sync");

let name = readLineSync.question("What is your name? ");

if (name.charAt(name.length - 1) === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toLocaleUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
