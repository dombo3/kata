function narcissistic(num) {
  const digits = new String(num).split('');
  const narcissisticNumber = digits.reduce((acc, curr) => {
    return acc + Math.pow(curr, digits.length);
  }, 0)

  return narcissisticNumber === num;
}

module.exports.narcissistic = narcissistic;