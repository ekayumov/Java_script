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
    get: function (value) {
      return (this.firstname + " " + this.lastName)
    },
    set: function (value) {
      [this.firstname, this.lastName] = value.split(" ")
    }
  },
  dateOfBirth: {
    value: '2010-09-20',
    writable: true,
    configurable: true
  },
  age: {
    get:  function () {
      var day = 1000 * 60 * 60 * 24
      var now = new Date().getTime()
      var birthday = new Date(this.dateOfBirth).getTime()
      var years = Math.floor((now - birthday)/day/31/12)
      return years
    }
  }
})
