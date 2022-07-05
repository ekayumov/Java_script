function isCapitalized(str) {
  const firstChar = str.split('')[0];
  const isAChar = new RegExp("^[a-zA-Z]+$");

  if (isAChar.test(firstChar) === false) {
    return false;
  }

  return firstChar === firstChar.toUpperCase() ? true : false;
}

function textMy (str) {
  const word = str
  const lng = str.length
  const isCap = isCapitalized(str)

  return [word, lng, isCap]
}
