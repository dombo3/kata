const matches = {
  "(":")",
  "[":"]",
  "{":"}",
}
const lastOpen = [];
let currentBrace;

function validBraces(braces) {
  if (braces.length % 2 != 0) {
    return false;
  }

  for (let i = 0; i < braces.length; i++) {
    currentBrace = braces[i];
    if(matches[currentBrace]) {
      lastOpen.unshift(currentBrace);
    } else {
      if (matches[lastOpen.shift()] !== currentBrace) {
         return false;
      }
    }
  }
  
  return lastOpen.length === 0;
}

module.exports = validBraces;