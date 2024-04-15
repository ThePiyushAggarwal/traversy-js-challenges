function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const resultingArray = [];

  for (const element of arr2) {
    if (set1.has(element)) {
      resultingArray.push(element);
    }
  }

  return resultingArray;
}

module.exports = arrayIntersection;
