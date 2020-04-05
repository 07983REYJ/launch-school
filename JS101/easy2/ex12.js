function convertNumToString(number) {
  let array = [];

  while (number > 0) {
    array.unshift(number % 10);

    number = Math.floor(number / 10);
  }
  return array.join("");
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${convertNumToString(-number)}`;
    case 1:
      return `${convertNumToString(number)}`;
    default:
      return `${convertNumToString(number)}`;
  }
}
console.log(signedIntegerToString(3));
