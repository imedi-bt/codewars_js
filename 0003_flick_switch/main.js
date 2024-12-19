/*
 * Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.
*/

function flickSwitch(arr) {
  let state = true, result = [];
  arr.forEach(function(item) {
    if (item === 'flick') {
      state = !state;
    }
    result.push(state);          
  });
  return result;
}
