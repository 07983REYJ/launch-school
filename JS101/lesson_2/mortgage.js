let readline = require('readline-sync');

function invalidNumber(number) {
  return (
    number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number))
  );
}
while (true) {
  let loan_amount = readline.question('Enter loan amount $ ');
  while (invalidNumber(loan_amount)) {
    console.log('Enter a valid dollar amount');
    loan_amount = readline.question('$ ');
  }
  let interestRate = readline.question('Enter interest rate % ');
  while (invalidNumber(interestRate)) {
    console.log('Enter a valid number for interest rate');
    interestRate = readline.question('% ');
  }

  let loan_duration = readline.question('Enter loan duration (months) ');
  while (invalidNumber(loan_duration)) {
    console.log('Invalid input');
    loan_duration = readline.question('Enter loan duration (in months) ');
  }
  let annualInterestRate = Number(interestRate) / 100;
  let monthly_interest_rate = annualInterestRate / 12;

  let monthlyPayment =
    loan_amount *
    (monthly_interest_rate /
      (1 - Math.pow(1 + monthly_interest_rate, -loan_duration)));

  console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);

  let answer = readline.question(
    'Would you like to perform another calculation? '
  );
  while (answer[0].toLowerCase() !== 'n' && answer[0].toLowerCase() !== 'y') {
    console.log('Enter "y" or "n". ');
    answer = readline.question();
  }
  if (answer[0] === 'n') break;
}
