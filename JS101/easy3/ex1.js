function crunch(string) {
  let array = string.split("");
  let array2 = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i + 1] || array[i] === " ") {
      array2.push(array[i]);
    }
  }
  return array2.join("");
}
