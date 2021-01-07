function calculator(numbers) {
  if (numbers === "") {
    return 0;
  }
  
  let regex = /-?\d+/g;
  
  const nums = numbers.match(regex).map(num => Number.parseInt(num));
  const negative = nums.find(num => num < 0);
  
  if (negative) {
    throw new Error('negatives not allowed: ' + negative);
  }

  return nums
      .reduce((a,b) => a + b);
}

module.exports = calculator;