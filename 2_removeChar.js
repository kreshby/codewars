
/**
 * Your goal is to create a function that removes the first and last characters of a string. 
 * You're given one parameter, the original string.
 *  You don't have to worry with strings with less than two characters.
 */

let newStr ;

function removeChar(str){

    let lastCharacter = (str.length -1);
    newStr = str.slice(1,lastCharacter);

    return newStr  

   
   };


   console.log(removeChar("Hello"));

   /**
    * function removeChar(str) {
  return str.slice(1, -1);
}
    */