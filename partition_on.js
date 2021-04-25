/**
 * Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ]
where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts)
should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index. I
n other words: the index of the first T value in items.
  */
// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, items) {
  const array1 = [];
  const array2 = [];
  let indexTrue;
  items.forEach((currentValue) => {
    if (pred(currentValue) === false) {
      array1.push(currentValue);
    }
    if (pred(currentValue) === true) {
      array2.push(currentValue);
    }
  });

  const newItems = array1.concat(array2);

  items.length = 0;
  items.push(...newItems);

  indexTrue = newItems.length - array2.length;

  return indexTrue;
}
// testing
const items = [1, 2, 3, 4, 5, 6];
function isEven(n) {
  return n % 2 === 0;
}

console.log(partitionOn(isEven, items));
