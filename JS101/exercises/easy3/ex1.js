let string = "";
let text = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] !== string[i + 1]) {
    text = text + string[i];
  }
}

console.log(text);
