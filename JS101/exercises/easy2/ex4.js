const multiply = (num1, num2) => num1 * num2;

const square = number => {
  return multiply(number, number);
};

function toThePower(number, power) {
  return number ** power;
}

console.log(toThePower(5, 9));
