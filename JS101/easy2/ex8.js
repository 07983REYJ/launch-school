let array = ["a", "b", "c", "d", "e"];
let i;
let newArray = [];

for (i = 0; i < array.length; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  newArray.push(array[i]);
}
console.log(newArray);
