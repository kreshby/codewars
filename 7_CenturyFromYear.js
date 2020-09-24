let centuryEnd;

function century(inYear) {
  let century;
  const newYear = String(inYear);

  const year = newYear.split('').join('');

  if (`${year[2]}${year[3]}` === String('00')) {
    century = Number(inYear) / 100;
  } else {
    centuryEnd = `1${Number(year[1]) + 1}00`;

    century = centuryEnd / 100;
  }

  return century;
}
