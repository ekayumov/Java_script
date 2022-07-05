function isCapitalized(str) {
  const firstChar = str.split('')[0];
  const isAChar = new RegExp("^[a-zA-Z]+$");

  if (isAChar.test(firstChar) === false) {
    return false;
  }

  return firstChar === firstChar.toUpperCase() ? true : false;
}

const name = "Name"

const textMy = Object.create( {}, {
  word: {
    value: name,
    writable: true,
    configurable: true,
    },
  length: {
    value: name.length,
    writable: true,
    configurable: true,
  },
  isCapitalized:{
    value: isCapitalized(name),
    writable: true,
    configurable: true,
  }
})
