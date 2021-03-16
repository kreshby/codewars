/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/*
function :-checkConcatenatedSum
inputs:- integers representing original number and number of times each digit should be repeated
output:- true of concatenated sum gives original number else false

*/

function checkConcatenatedSum(integerNumber, numberRepeated) {
  const strIntNumber = `${Math.abs(integerNumber)}`;
  const strIntArray = Array.from(strIntNumber);
  let sumConc;
  let resultOfChecking;
  let newArray = [];

  if (numberRepeated > 1) {
    newArray = strIntArray.map((el) => (el.repeat(numberRepeated)));

    sumConc = newArray.reduce((elem, curElem) => Number(elem) + Number(curElem));

    sumConc === Math.abs(integerNumber)
      ? resultOfChecking = true
      : resultOfChecking = false;
  }
  if (numberRepeated === 1) {
    resultOfChecking = true;
  }
  if (numberRepeated === 0) {
    resultOfChecking = false;
  }

  return resultOfChecking;
}
console.log(checkConcatenatedSum(198, 0));
