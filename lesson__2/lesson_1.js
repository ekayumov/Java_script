const textMy = Object.create( {}, {
  word: {
    value: "Name",
    writable: true,
    configurable: true,
    },
  length: {
    get: function () {
      return (this.worde.length)
    }
  },
  isCapitalized:{
    get: function () {
      const firstChar = this.word[0];
      const letterRegExp = new RegExp("^[a-zA-Z]+$");

      if (!letterRegExp.test(firstChar)) {
        return false;
      }

      return firstChar === firstChar.toUpperCase();
    }
  }
})
