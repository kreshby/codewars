/**
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
 *
 */

/**
 * Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
 *
 * Синтаксис
str.split([separator[, limit]])
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split

 */

/** 
 * sort()
Позволяет отсортировать массив путём преобразования его элементов в строки 
и сравнения этих строк в порядке следования кодовых символов 
Unicode (сортирует массив по алфавиту).
 * 
*/

/** 
 * Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
 * 
 * arr.join([separator])/ Если "separator" незадан, то в качестве разделителя по умолчанию будет ","
 * Преобразует все элементы массива в строки и объединяет их в одну большую строку. 
 * Элемент массива с типом undefined или null преобразуется в пустую строку.
*/


// write the function isAnagram
var isAnagram = function(test, original) {

    newTest = test.toLowerCase().split("").sort().join(""),
    newOriginal = original.toLowerCase().split("").sort().join("");

    return newTest === newOriginal;
};

console.log(isAnagram("foefet", "toffee"));