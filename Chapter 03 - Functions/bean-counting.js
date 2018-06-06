// A very specific function to work out the mechanics of
// how to solve the problem
function countBs(givenString) {
  var result = 0;
  for (var count = 0; count < givenString.length; count++) {
    if (givenString.charAt(count) === 'B') {
      result++;
    }
  }
  return result;
}

// Generalize the function so that's it's much more
// flexible and useful
function countChar(givenString, charToFind) {
  var result = 0;
  for (var count = 0; count < givenString.length; count++) {
    if (givenString.charAt(count) === charToFind) {
      result++;
    }
  }
  return result;
}

// Apply the more general solution to rewrite the countBs function
function countBs(givenString) {
  return countChar(givenString, 'B');
}