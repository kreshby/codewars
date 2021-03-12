/* eslint-disable no-plusplus */
function totalSum(...str) {
  const totalArray = Array.from(...str);

  // eslint-disable-next-line max-len
  const sum = totalArray.reduce(
    (accumulator, currentVal) => Number(accumulator) + Number(currentVal),
  );

  return sum;
}

function calc(...x) {
  let total1;
  let total2;
  let diffSum;
  const newArray = [];
  const finalString = x.join(' ');

  for (let index = 0; index < finalString.length; index++) {
    newArray.push(finalString[index].charCodeAt(finalString[index]));
    // check when array value is NaN
    if (isNaN(newArray[index])) {
      delete newArray[index];
    }
  }

  total1 = newArray.join('');

  // str.split(search).join(replacement)

  total2 = total1.split(7).join(1);

  diffSum = totalSum(total1) - totalSum(total2);

  return diffSum;
}


