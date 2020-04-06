function xor(val1, val2) {
  if ((val1 && !val2) || (val2 && !val1)) {
    return true;
  }
  return false;
}

console.log(xor(false, true));
