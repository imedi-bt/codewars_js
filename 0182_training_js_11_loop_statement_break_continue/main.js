/*
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.
*/

function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (!["Hello Kitty", "Barbie doll"].includes(dolls[i])) {
      continue;
    } 
    bag.push(dolls[i]) ;
    if (bag.length === 3) {
      break;
    }
  }  
  return bag;
}
