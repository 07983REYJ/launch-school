let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let values = Object.values(obj);
let vowels = ['a', 'e', 'i', 'o', 'u'];

values.forEach((arr) => {
  arr.forEach((word) => {
    word.split('').forEach((char) => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});
