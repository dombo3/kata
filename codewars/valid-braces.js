const b = {
  "(":")",
  "[":"]",
  "{":"}",
}

const opens = ["(", "[", "{"];

const lastOpen = [];

function validBraces(braces) {
  if (braces.length % 2 != 0) {
    return false;
  }
  let valid = true;
  const bracesArray = braces.split('').forEach(brace => {
    if(isOpen(brace)) {
      lastOpen.unshift(brace);
    } else {
      let last = lastOpen.shift();
      if (b[last] !== brace) {
         valid = false;
      }
    }
   });
  
    return valid && lastOpen.length === 0;
}
  
function isOpen(brace) {
  return opens.includes(brace);
}

module.exports = validBraces;