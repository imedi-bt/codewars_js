/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]
*/

function multipleOfIndex(array) {
  return array.filter(function (value, index) {
    return index === 0 ? value === 0 : value % index === 0;
  });
}
