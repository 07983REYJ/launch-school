// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

prompt(messages('welcome', LANGUAGE));
while (true) {
  let number1 = readline.question(prompt("What's the first number?"));

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number ");
    number1 = readline.question();
  }

  let number2 = readline.question(prompt("What's the second number"));

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number ");
    number2 = readline.question();
  }

  let operation = readline.question(
    prompt(
      'What operation would you like to perform?\n 1)Add  2)Subtract  3)Multiply  4)Divide'
    )
  );

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(`The result is ${output}`);

  let answer = readline.question(
    'Would you like to perform another operation? '
  );
  if (answer[0].toLowerCase !== 'y') break;
}
