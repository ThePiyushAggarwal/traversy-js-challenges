function countVowels(str) {
  return str
    .split('')
    .filter((x) => ['a', 'i', 'o', 'u', 'e'].includes(x.toLowerCase())).length;
}

module.exports = countVowels;
