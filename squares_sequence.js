/* eslint-disable no-plusplus */

function squares(x, n) {
  const squaresArray = [];

  if (n > 0) {
    squaresArray[0] = x;
    let i = 1;
    while (i < n) {
      squaresArray.push(Math.pow(squaresArray[i-1], 2));
      i++;
    }
  }

  return squaresArray;
}

console.log(squares(2, 5));
