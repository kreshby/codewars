/* eslint-disable strict */

'use strict';

function accum(str) {
  const resultArray = [];
  const newStrArray = Array.from(str);

  newStrArray.map((currentValue, index) => resultArray.push(currentValue.repeat(index + 1)));

  const mySentence = resultArray.join(' ').toLocaleLowerCase();

  // Capitalize the first letter of a word

  const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  return finalSentence.split(' ').join('-');
}

/*
^ matches the beginning of the string.
\w matches any word character.
{1} takes only the first character.
Thus, ^\w{1} matches the first letter of the word.
| works like the boolean OR. It matches the expression after and before the |.
\s+ matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).
*/
