/**
 * Create the function prefill that returns an array of n elements that all have the
 *  same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is omitted, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123')
that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid,
where you replace n for the actual value passed to the function.
 */

function prefill(n, v) {
  if (Number.isInteger(n)) {
    console.log('True. checking n');

    if (typeof v !== 'undefined' || v !== 0) {
      console.log('check v');
    } else {
      if (typeof v === 'undefined') {
        console.log('undefined');
      }
      if (v === 0) {
        console.log('v=0');
      }
    }
  } else {
    console.log('typeError');
  }
}

// prefill(3,1);

// prefill(2,"abc");

// !prefill("1", 1); does not work

// prefill(3, prefill(2,'2d'));

// prefill("xyz", 1)
