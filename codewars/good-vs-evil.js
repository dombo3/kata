const goodWorth = [1, 2, 3, 3, 4, 10];
const evilWorth = [1, 2, 2, 2, 3, 5, 10];

function goodVsEvil(good, evil) {
  const worthOfGood = good.split(' ')
        .map(num => Number.parseInt(num))
        .reduce((worth, currentCount, index, array) => {
          return worth + currentCount * goodWorth[index];
        }, 0);

  const worthOfEvil = evil.split(' ')
        .map(num => Number.parseInt(num))
        .reduce((worth, currentCount, index) => {
          return worth + currentCount * evilWorth[index];;
        }, 0);

  return worthOfGood === worthOfEvil ? "even" :
          worthOfGood > worthOfEvil ? "good" : "evil";
}

module.exports = goodVsEvil;