function toString(number) {
  let array = [];

  while (number > 0) {
    array.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  return array.join("");
}

let answer = toString(123);

console.log(answer, "data type:", typeof answer);
