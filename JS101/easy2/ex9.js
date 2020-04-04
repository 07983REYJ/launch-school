function hexConvert(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  string = string.toUpperCase();
  let array = string
    .split("")
    .map(e => DIGITS[e])
    .reverse();
  let total = 0;
  array.forEach((digit, idx) => (total += 16 ** idx * digit));
  return total;
}

console.log(hexConvert("4d9F"));
