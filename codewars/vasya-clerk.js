function tickets(peopleInLine) {
  const vallet = {
    25: 0,
    50: 0,
    100: 0,
  }
  
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      vallet[25]++;
    } else if (peopleInLine[i] === 50) {
      vallet[50]++;
      vallet[25]--;
      if (vallet[25] < 0) {
        return "NO";
      }
    } else if (peopleInLine[i] === 100) {
      vallet[100]++;
      if (vallet[50] > 0) {
        vallet[50]--;
        vallet[25]--;
      } else {
        vallet[25]--;
        vallet[25]--;
        vallet[25]--;
      }

      if (vallet[25] < 0) {
        return "NO";
      }
    }
  }

  return "YES";
}

module.exports = tickets;