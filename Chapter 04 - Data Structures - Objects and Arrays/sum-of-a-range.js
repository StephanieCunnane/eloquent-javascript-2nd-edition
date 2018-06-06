function range(start, end) {
  var result = [];
  for (var counter = start; counter <= end; counter++) {
    result.push(counter);
  }
  return result;
}

function sum(givenArray) {
  var result = 0;
  for (var counter = 0; counter < givenArray.length; counter++) {
    result += givenArray[counter];
  }
  return result;
}

console.log(sum(range(1, 10)));

// Modified range function that accepts an optional third argument
// for a 'step' value
function rangeWithStep(start, end, step) {
  var result = [];
  if (arguments.length < 3) {
    for (var counter = start; counter <= end; counter++) {
      result.push(counter);
    }
  } else {
    if (step > 0) {
      for (var counter = start; counter <= end; counter += step) {
        result.push(counter);
      }
    } else {
      for (var counter = start; counter >= end; counter += step) {
        result.push(counter);
      }
    }
  }
  return result;
}
