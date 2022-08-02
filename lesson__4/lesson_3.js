const john = {
  name: "John",
  lastName: "Smith",
  position: "Senior engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890",
  eat: function() {},
  sleep: function() {},
  callFriend: function() {},
  writeReport: function() {},
  organizeMeeting: function () {},
  retire: function () {},
  startVacation: function () {}
}

function Human(name, lastName, location, phoneNumber) {
  this.name = name
  this.lastName = lastName
  this.location = location
  this.phoneNumber =  phoneNumber
}

Human.prototype.eat = function() {return 'eat'}
Human.prototype.sleep = function() {return 'sleep'}
Human.prototypes.callFriend = function() {return 'callFriend'}

function Employee (
  name,
  lastName,
  location,
  phoneNumber,
  position,
  baseSalary,
  salaryCurrency,
  department
) {
  Human.call(name, lastName, location, phoneNumber)
	this.position = position
	this.baseSalary = baseSalary
	this.salaryCurrency = salaryCurrency
	this.department =  department
}

Employee.prototype.writeReport = function() { return 'writeReport' }
Employee.prototype.organizeMeeting = function() { return 'organizeMeeting'}
Employee.prototype.retire = function() { return "retire"}
Employee.prototype.startVacation = function() { return "startVacation"}

function CurrentEmployees (
  name,
  lastName,
  location,
  phoneNumber,
  position,
  baseSalary,
  salaryCurrency,
  department,
  startDate
) {
  Employee.call(
    name,
    lastName,
    location,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    department
  )
  this.startDate = startDate
}

function  FormerEmployee (
  name,
  lastName,
  location,
  phoneNumber,
  position,
  baseSalary,
  salaryCurrency,
  department,
  endDate
) {
  Employee.call(
    name,
    lastName,
    location,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    department
  )
	this.endDate = endDate
}

Employee.prototype = Object.create(Human.prototype)
CurrentEmployees.prototype = Object.create(Employee.prototype)
FormerEmployee.prototype = Object.create(Employee.prototype)
