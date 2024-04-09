function countOccurrences(myStr, letter) {
  return myStr.split('').filter((x) => x === letter).length;
}

module.exports = countOccurrences;
