let array = ["a", "b", "c", "d", "e"];

function oddities(array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 1) {
      continue;
    }
    oddArray.push(array[i]);
  }
  return oddArray;
}

console.log(oddities(array));
