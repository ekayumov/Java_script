const human = Object.create( {}, {
  firstName: {
    value: "sss",
    writable: true,
    configurable: true
  },
  lastName: {
    value: "aaa",
    writable: true,
    configurable: true
  },
  fullName: {
    get() { return (this.firstname + " " + this.lastName)
    },
    set: function (value) {
      [this.firstname, this.lastName] = value.split(" ")
    }
  },
  dateOfBirth: {
    // принимаем параметр date
    get() { return this._dateOfBirth},
    set: function (value) {
      var day = 1000 * 60 * 60 * 24
      var now = new Date().getTime()
      var birthday = value.getTime()
      var years = Math.floor((now - birthday)/day/31/12)
      this.age = years
      this._dateOfBirth = value
    }
  }
})
