/**
 * Create a function (or write a script in Shell) that takes an
 * integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. *
 */
function even_or_odd(number) {
  let result;

  Math.abs(number % 2) == 1
    ? result = 'Odd'
    : result = 'Even';

  return result;
}
