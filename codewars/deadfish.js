const deadfish = {}

deadfish.parse = function(chars) {
  if (chars === "") {
    return [];
  }

  if (typeof chars !== "string") {
    throw new Error('Please provide a string containing i s d o characters!');
  }

  let value = 0;
  const result = [];
  return chars.match(/[idso]/g).reduce((result, char) => {
    char === 'i' ? value++ :
    char === 'd' ? value-- :
    char === 's' ? value *= value :
    char === 'o' ? result.push(value) : "";
    return result;
  }, [])
}

module.exports = deadfish;