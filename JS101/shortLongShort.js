function longerString(string1, string2) {
  if (string1.length > string2.length) {
    return `${string2}${string1}${string2}`;
  } else {
    return `${string1}${string2}${string1}`;
  }
}
let result = longerString("abdc", "qe");

console.log(result);
