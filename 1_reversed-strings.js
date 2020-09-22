let newA;

function reversedStrings(b) {
  if (b.length == 0) {
    newA = b;
  } else {
    for (let i = b.length - 1; i >= 0; i--) {
      if (i == b.length - 1) {
        newA = b[i];
      } else {
        newA = newA + b[i];
      }
    }
  }

  return newA;
}

//console.log(reversedStrings(a));

console.log(reversedStrings(""));

/**
 * другие способы решения задачи
 * 
 * https://vk.com/@devloger-tri-sposoba-perevernut-stroku-v-javascripte
 * String.prototype.split(), Array.prototype.reverse() и Array.prototype.join().

Метод split() принимает на вход строку и преобразует в массив, разбивая ее по разделителю.
Метод reverse() переворачивает элементы массива. Первый элемент становится последним, последний — первым.
Метод join() соединяет все элементы массива в строку.

function solution(str){
  return str.split('').reverse().join('');  
}

 */
