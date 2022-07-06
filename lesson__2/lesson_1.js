function isCapitalized(str) {
  const firstChar = str[0];
  const letterRegExp = new RegExp("^[a-zA-Z]+$");

  if (!letterRegExp.test(firstChar)) {
    return false;
  }

  return firstChar === firstChar.toUpperCase();
}

function textMy(str) {
  return {word: str, length: str.length, isCapitalized: isCapitalized(str)}
}
