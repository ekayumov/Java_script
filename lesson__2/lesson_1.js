function isCapitalized(str) {
  const firstChar = str[0];
  const letterRegExp = new RegExp("^[a-zA-Z]+$");

  if (!letterRegExp.test(firstChar)) {
    return false;
  }

  return firstChar === firstChar.toUpperCase();
}

const name = "Name"

 let obj = {word: name, length: name.length, isCapitalized: isCapitalized(name)}
