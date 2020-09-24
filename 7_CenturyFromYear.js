let centuryEnd;

function century(inYear) {
  let century;
  const newYear = String(inYear);

  const year = newYear.split('').join('');
  const len = year.length;

  if (`${year[len - 2]}${year[len - 1]}` === String('00')) {
    century = Math.round(Number(inYear) / 100);
  } else if (year.length < 3) {
    century = 1;
  } else if (year.length > 4) {
    century = Math.ceil(Number(inYear) / 100);
  } else {
    centuryEnd = `${year[0]}${Number(year[1]) + 1}00`;

    century = Math.round(centuryEnd / 100);
  }

  return century;
}
