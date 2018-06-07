// Don't confuse lists with arrays
// A list is a nested set of objects, with the first object holding a reference
// to the second, the second to the third and so on.
// A simple example list:
var list = {
  value: 1,
  rest : {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

// Best done back to front
function arrayToList(givenArray) {
  var list = null;
  for (var i = givenArray.length - 1; i >= 0; i--) {
    list = {
      value: givenArray[i],
      rest: list
    };
  }
  return list;
}

function listToArray(givenList) {
  var arrayFromList = [];
  // node always points to the current sublist
  for (var node = givenList; node; node = node.rest) {
    arrayFromList.push(node.value);
  }
  return arrayFromList;
}

// A helper function that takes in a new value and a linked list and adds the // value as a new node at the head of the list
function prepend(value, givenList) {
  return {
    value: value,
    rest: givenList
  };
}

// Recursive function that takes an index and a linked list and returns the
// value at the given index in the list (or undefined that index doesn't
// exist)
function nth(linkedList, index) {
  if (!linkedList) {
    return undefined;
  } else if (index === 0) {
    return linkedList.value;
  } else {
    return nth(linkedList.rest, index--);
  }
}