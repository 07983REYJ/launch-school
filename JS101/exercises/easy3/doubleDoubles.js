// PROBLEM :

// Given a number, determine if the number is a "double double" - if the  first half of digits are equal to the second half's digits. If number is not at double double, return the number * 2. If it is, simply return the number as-is.

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866

// input: number
// output: number (either same or doubled)
// rules:
//    Explicit requirements:
//    - If number is not a double double, number is to be muliplied by 2 and returned
//    - if number is a double double, number is to be returned as-is

// Algorithm:
// - Convert number to string and determine whether number has even integers
// - Slice string to see if first half of number matches the second half
// - If it matches, return number
// - Else, return number * 2

let number = 1049404;

if (String(number).length % 2 === 1) {
  console.log(number);
} else if (
  String(number).slice(0, String(number).length / 2) ===
  String(number).slice(String(number).length / 2)
) {
  console.log(number);
} else console.log(number * 2);
