function logInBox(string) {
  let lines = "";
  let spaces = "";

  for (let i = 0; i < string.length; i += 1) {
    lines += "-";
  }

  for (let i = 0; i < string.length; i += 1) {
    spaces += " ";
  }
  return `+${lines}+\n|${spaces}|\n|${string}|\n|${spaces}|\n+${lines}+`;
}

console.log(logInBox("code on and prosper"));
