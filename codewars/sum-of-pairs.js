function sumPairs(ints, s) {
  let indexOfMyPair = [];
  for (let i = 0; i < ints.length; i++) {
    if (indexOfMyPair[ints[i]] !== undefined) {
      return [ints[indexOfMyPair[ints[i]]], ints[i]];
    }
    indexOfMyPair[s - ints[i]] = i;
  }
}

module.exports = sumPairs;