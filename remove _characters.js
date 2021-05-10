/**
 * You are given a list of character sequences as a comma separated string.
 * Write a function which returns another string containing
 * all the character sequences except the first and the last ones,
 * separated by spaces. If the input string is empty, or the removal of the first and
 * last items would cause the string to be empty,
 * return a null value.
 */

function array(arr) {
  const newArray = [];
  //   newArray = arr.replace(/^.|.$|\,/gm, ' ').trim();
  //   if (newArray.length === 0) {
  //     return null;
  //   }

  //   return newArray;
  arr.pop();
  arr.splice(0, 1);
  if (newArray.length === 0) {
    return null;
  }
  return arr;
}
console.log(array(['edf', 4, 'f', 'c61', 2, 'e36', 'e', 'a2e']));
