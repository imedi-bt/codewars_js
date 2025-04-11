function sumArray(array) {
  let sum = 0; 
  if (!array || array.length <= 2) return 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum - Math.min(...array) - Math.max(...array);
}