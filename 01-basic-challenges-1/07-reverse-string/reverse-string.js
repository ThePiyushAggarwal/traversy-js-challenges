function reverseString(str) {
  let final = '';
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}

module.exports = reverseString;
