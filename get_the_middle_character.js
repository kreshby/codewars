/* eslint-disable no-unused-expressions */
function getMiddle(s) {
  let result;

  const strLength = s.length;

  strLength % 2 === 0
    ? (result = s.slice(strLength / 2 - 1, strLength / 2 + 1))
    : (result = s.slice((strLength - 1) / 2, (strLength - 1) / 2 + 1));

  return result;
}
