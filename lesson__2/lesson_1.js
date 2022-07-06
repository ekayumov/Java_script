function isCapitalized(str) {
  const firstChar = str.split('')[0];
  const isAChar = new RegExp("^[a-zA-Z]+$");

  if (isAChar.test(firstChar) === false) {
    return false;
  }

  return firstChar === firstChar.toUpperCase() ? true : false;
}

const name = "Name"

 let obj = {word: name, length: name.length, isCapitalized: isCapitalized(name)}
