/* eslint-disable no-unused-expressions */
/**
 * Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real.
What kind of tests we got for your code:

Function have to count words, but not spaces, so be sure that it does right.
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
Be sure that words with chars like -, ', ` are counted right.
 */

function countWords(str) {
  let strLenghth;

  str = str.trim().replace(/\s+/gm, ' ');

  str.length === 0
    ? strLenghth = 0
    : strLenghth = str.split(' ').length;

  return strLenghth;
}
