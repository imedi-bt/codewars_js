/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
 */

var countBits = function(n) {
  let result = 0;
  while (n > 0) {
    if (n & 1) {
      result++;
    }
    n = Math.floor(n / 2);
  }
  return result;
};
