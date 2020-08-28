/**
 * Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.
 */
let newString;


function isPalindrome(line) {
    
    let newLine = String (line);

    newString = newLine.split('').reverse().join(''); 

    return newString === newLine ;
  }


  console.log(isPalindrome("anna"));
  console.log(isPalindrome("walter"));
  console.log(isPalindrome(12321));
  console.log(isPalindrome(123456));