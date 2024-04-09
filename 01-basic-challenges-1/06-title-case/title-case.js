function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase())
    .join(' ');
}

module.exports = titleCase;
