function fizzBuzzArray(length) {
  const arr = Array.from({ length }, (_item, i) => i + 1);
  return arr.map((item) => {
    const divisibleBy3 = item % 3 === 0;
    const divisibleBy5 = item % 5 === 0;
    const divisibleByBoth = divisibleBy3 && divisibleBy5; // Can be checked for divisible by 15

    return divisibleByBoth
      ? 'FizzBuzz'
      : divisibleBy5
      ? 'Buzz'
      : divisibleBy3
      ? 'Fizz'
      : item;
  });
}

module.exports = fizzBuzzArray;
