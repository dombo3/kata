function sumPairs(ints, s) {
  let indexPairs = [];

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        if (j - i === 1) {
          return [ints[i], ints[j]]
        } else {
          indexPairs.push([i, j]);
        }
      }
    }
  }
}


module.exports = sumPairs;