function calculator(numbers) {
  if (numbers === "") {
    return 0;
  } else if (numbers.length === 1) {
    return Number.parseInt(numbers);
  } else {
    let regex = /\d/g;
  
    return numbers
      .match(regex)
      .map(num => Number.parseInt(num))
      .reduce((a,b) => a + b);
  }
}

module.exports = calculator;