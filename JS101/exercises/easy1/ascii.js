function asciiValue(string) {
  let total = 0;

  for (let i = 0; i < string.length; i += 1) {
    total += string.charCodeAt(i);
  }
  console.log(total);
  return total;
}
