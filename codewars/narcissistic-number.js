function narcissistic(num) {
  const digits = getDigitsOf(num)
  const narcissisticNumber = digits.reduce((acc, curr) => {
    return acc + Math.pow(curr, digits.length);
  }, 0)

  return narcissisticNumber === num;
}

function getDigitsOf(num) {
  const digits = [];
  let residual = num;

  while (residual >= 1) {
    digits.unshift(residual % 10);
    residual = Math.floor(residual / 10);
  }

  return digits;
}

module.exports.narcissistic = narcissistic;
module.exports.getDigitsOf = getDigitsOf;