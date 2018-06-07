// Returns a new array, does not modify givenArray
// Implemented with unshift (the simpler (better) implementation)
function reverseArray(givenArray) {
  var newArray = [];
  for (var i = 0; i < givenArray.length; i++) {
    newArray.unshift(givenArray[i]);
  }
  return newArray;
}

// Returns a new array, does not modify givenArray
// Loops over givenArray backward
// A bit more complicated implementation than the one above (and not as good)
function reverseArray(givenArray) {
  var newArray = [];
  for (var i = givenArray.length - 1; i >= 0; i--) {
    newArray.push(givenArray[i]);
  }
  return newArray;
}

// *********************************************************************

// Swap elements in place
function reverseArrayInPlace(givenArray) {
  for (var i = 0; i < Math.floor(givenArray.length / 2); i++) {
    // Get at each pair
    var lowerElement = givenArray[i];
    var upperElement = givenArray[givenArray.length - (i + 1)];

    // Swap the elements of each pair in place
    givenArray[givenArray.length - (i + 1)] = lowerElement;
    givenArray[i] = upperElement;
  }
  return givenArray;
}
