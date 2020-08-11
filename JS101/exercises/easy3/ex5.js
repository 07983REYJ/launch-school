// PROBLEM:

// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

//rightTriangle(2) =>
//  *
// **

//rightTriangle(5) =>
//     *
//    **
//   ***
//  ****
// *****

// input: integer
// output: string ('*')
// rules:
//      Explicit requirements:
//        - create a right triangle (n) rows long.
//        - first row will contain 1 '*' and each following row will be incremented by 1 '*'.
//        - final row will contain (n) *'s

// Algorithm:
// - declare a variable to determine padding for each row
// - declare a variable for "*" character
// - loop (n) times and increment  +1 "*" for every row until loop is complete, while decrement " " space
// - " " is to be set to (n) - 1

// let str = '';
// let space = ' ';
// let number = 5;

// while (str.length < number) {
//   str += '*';
//   console.log(str);
// }

function triangle(number) {
  let str = '*';

  for (let i = number; i > 0; i--) {
    console.log(`${' '.repeat(i)}${str}`);
    str += '*';
  }
}

triangle(50);
