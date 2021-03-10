function highAndLow(numbers) {
  const newNumberArray = numbers.split(' ');
  /**
   *  the fist argument to apply () sets the “this” value,
   * but “this” is not used in the Math.max () method, so we pass null.

   */
  const maxNumber = Math.max.apply(null, newNumberArray);
  const minNumber = Math.min.apply(null, newNumberArray);
  return `${maxNumber} ${minNumber}`;
}
