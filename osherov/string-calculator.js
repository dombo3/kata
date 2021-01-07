function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  
  let regex = /-?\d+/g;
  
  const nums = numbers.match(regex).map(num => Number.parseInt(num));
  const negatives = nums.filter(num => num < 0);
  
  if (negatives.length > 0) {
    throw new Error('negatives not allowed: ' + negatives.join());
  }

  return nums
      .reduce((a,b) => a + b);
}

module.exports = add;