function stringy(number) {
  let string = "";
  for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
      string += "1";
    } else string += "0";
  }
  return string;
}

console.log(stringy(3));
