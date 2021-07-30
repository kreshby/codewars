/* eslint-disable no-plusplus */
function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase().indexOf(str[i]) !== str.toLowerCase().lastIndexOf(str[i])) {
      return false; // repeats
    }
  }
  return true;
}
/**
 * use .indexOf() и .lastIndexOf() , чтобы определить, повторяется ли индекс. Это означает, что если первое вхождение
 * символа является также и последним вхождением, то вы знаете, что оно не повторяется. Если это не так,то оно повторяется.
 *
 */
