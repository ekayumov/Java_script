const text = "Men were eating meat, washing it down with beer! They did not understand a thing from the stableman is speech!!!"

function isCapitalized(str) {
  const firstChar = str[0];
  const letterRegExp = new RegExp("^[a-zA-Z]+$");

  if (!letterRegExp.test(firstChar)) {
    return false;
  }

  return firstChar === firstChar.toUpperCase();
}


function myWord(str) {
  return {word: str, length: str.length, isCapitalized: isCapitalized(str)}
}

function myText(text) {
  const textArray = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
  textArray.forEach((item) => myWord(item))
}
