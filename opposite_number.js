function opposite(number) {
  let result;
  if (!isNaN(Math.sign(number))) {
    result = number * (-1);
  }
  return result;
}
