// Recursive function (unknown nesting depth)
function deepEqual(thing1, thing2) {
  // Base case (comparison by identity, shallow equality)
  if (thing1 === thing2) {
    return true;
  }
  // Make sure we're only compairing objects (null is an odd edge case whose
  // typeof is 'object')
  if (thing1 === null || thing2 === null ||
      typeof thing1 !== 'object' || typeof thing2 !== 'object') {
    return false;
  }

  var propsInThing1 = 0;
  var propsInThing2 = 0;

  for (var prop in thing1) {
    propsInThing1++;
  }

  for (var prop in thing2) {
    propsInThing2++;
    if (!(prop in thing1) || !deepEqual(thing1[prop], thing2[prop])) {
      return false;
    }
  }
  return propsInThing1 === propsInThing2;
}