const employees = [
    {
     firstName: "Alex",
     lastName: "Smith",
     age: 54,
     salary: 10000,
     position: "Architect"
    },
    {
     firstName: "Gustav",
     lastName: "Andersen",
     age: 31,
     salary: 5000,
     position: "Software engineer"
    },
    {
     firstName: "Liz",
     lastName: "Taylor",
     age: 20,
     salary: 7000,
     position: "Manager"
    }
]

function averageSalary(emp) {
  return emp.map((item) => item.salary).reduce((a, b) => a + b, 0) / emp.length
}

function compareSalary(a, b) {
  return a.salary - b.salary
}

function sortBySalary(emp) {
  return emp.sort(compareSalary)
}

function filterEmployees(emp, minSalary, minAge){
  return emp.filter(e => e.salary >= minSalary && e.age >= minAge)
}

averageSalary(employees)
sortBySalary(employees)
filterEmployees(employees, 4500, 25)
