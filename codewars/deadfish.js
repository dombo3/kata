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
  const idso = chars.match(/[idso]/g);
  
  idso.forEach(char => {
    switch(char) {
      case 'i':
        value++;
        break;
      case 'd':
        value--;
        break;
      case 's':
        value *= value;
        break;
      case 'o':
        result.push(value);
        break;
    } 
  });

  return result;
}

module.exports = deadfish;