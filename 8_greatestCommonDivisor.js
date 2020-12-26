'use strict'
let nodNumber;
function nodeNum(a, b) {

  const firstNumber = Number(a);
  const secondNumber = Number(b);
  let minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;
  let maxNumber = firstNumber <= secondNumber ? secondNumber : firstNumber;

  while (minNumber >= 0 || maxNumber >= 0){
      maxNumber = maxNumber % minNumber ;
      if (maxNumber == 0){
          nodNumber = minNumber;
      } else {
        minNumber = minNumber % maxNumber ;

      }
      
      //minNumber = minNumber % maxNumber ;
      console.log ("max= " + maxNumber);
      console.log("min = " + minNumber);
  }
  //minNumber == 0? nodNumber = maxNumber : nodNumber = minNumber ;
  
  return nodNumber;

};

//console.log(nodeNum(1,1));
console.log(9%1);
