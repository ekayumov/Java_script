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
  this.eat = function() {return 'eat'}
  this.sleep = function() {return 'sleep'}
  this.callFriend = function() {return 'callFriend'}
}

const human_john = new Human("John", "Smith", "Russia", "+1234567890" )

function Employee (position, baseSalary, salaryCurrency, department) {
	this.position = position
	this.baseSalary = baseSalary
	this.salaryCurrency = salaryCurrency
	this.department =  department
	this.writeReport = function() { return 'writeReport' }
	this.organizeMeeting = function () { return 'organizeMeeting'}
  this.retire: function () {}
  this.startVacation: function () {}
}

function EmployeeStatus (startDate, endDate) {
	this.startDate = startDate
	this.endDate = endDate
  }

const human_john = new Human("John", "Smith", "Russia", "+1234567890" )
Employee.prototype = human_john
const employer_john = new Employee("Senior engineer",  "10000", "$", "IT")
EmployeeStatus.prototype = employer_john
