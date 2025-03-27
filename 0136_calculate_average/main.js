/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum / array.length;
}
