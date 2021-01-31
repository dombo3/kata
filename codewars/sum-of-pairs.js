function sumPairs(ints, s) {
  let residuals = [];
    for (let i = 0; i < ints.length; i++) {
      let index = residuals.findIndex(e => e === ints[i])
      if (index !== -1) {
        return [ints[index], ints[i]];
      } else {
        residuals.push(s - ints[i]);
      }
    }
}

module.exports = sumPairs;

