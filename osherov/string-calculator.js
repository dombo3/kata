function calculator(numbers) {
  if (numbers === "") {
    return 0;
  }
  
  let regex = /\d+/g;
  const nums = numbers.match(regex).map(num => Number.parseInt(num));
  return nums
      .reduce((a,b) => a + b);
}

module.exports = calculator;