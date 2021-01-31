function sumPairs(ints, s) {
    for (let i = 1; i < ints.length; i++) {
      let searchFor = s - ints[i];
  
      for (let j = 0; j < ints.length; j++) {
          if (j === i) {
            break;
          } else if (ints[i] + ints[j] === s) {
            return [ints[j], ints[i]];
          }
      }
    }
}

module.exports = sumPairs;

