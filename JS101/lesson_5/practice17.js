function uuidMaker() {
  function randomChar() {
    let chars = 'abcde1234567890';
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function filler(length) {
    let set = '';
    for (let i = 0; i < length; i++) {
      set += randomChar();
    }
    return set;
  }
  return `${filler(8)}-${filler(4)}-${filler(4)}-${filler(4)}-${filler(12)}`;
}
