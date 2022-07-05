const human = Object.create( {}, {
  name: {
    value: "",
    writable: true,
    configurable: true
  },
  lastName: {
    value: "",
    writable: true,
    configurable: true
  }
})

human.name = "Alex"

human.lastName = "Smith"

human.name = "Bob"

delete human.name
delete human.lastName
