const readline = require('readline-sync');
const VALID_CHOICES = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
  'r',
  'p',
  'sc',
  'l',
  'sp',
];
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  r: ['scissors', 'lizard'],
  paper: ['spock', 'rock'],
  p: ['spock', 'rock'],
  scissors: ['paper', 'lizard'],
  sc: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  l: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
  sp: ['rock', 'scissors'],
};

let playerScore = 0;
let cpuScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WINNING_MOVES[choice].includes(computerChoice)) {
    console.log('Player wins');
    playerScore += 1;
  } else if (choice === computerChoice) {
    console.log("It's a tie");
  } else console.log('CPU WINS');
  cpuScore += 1;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  if (playerScore === 5) {
    console.log(
      `GAME OVER - PLAYER WINS! PLAYER: ${playerScore}\nCPU: ${cpuScore}`
    );
    break;
  } else if (cpuScore === 5) {
    console.log(
      `GAME OVER - CPU WINS!\nPLAYER: ${playerScore}\nCPU: ${cpuScore}`
    );
    break;
  }
}
