/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const vowels = ['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'O', 'U'];

function disemvowel(str) {
  const newStr = Array.from(str);

  let i = 0;
  while (i !== (newStr.length - 1)) {
    vowels.forEach((element) => {
      delete newStr[newStr.indexOf(element)];
    });
    i++;
  }

  return newStr.join('');
}
console.log(disemvowel('This website is for losers LOL!'));
