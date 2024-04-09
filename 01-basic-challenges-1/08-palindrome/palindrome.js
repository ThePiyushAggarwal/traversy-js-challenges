function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  return formattedStr === formattedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
