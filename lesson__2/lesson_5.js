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

const mapCollbackSalary = function (item) {
  return item.salary
}

function averageSalary(emp) {
  return emp.map(mapCollbackSalary).reduce((a, b) => a + b, 0) / emp
}

function compareSalary(a, b) {
  const n1 = a.salary
  const n2 = b.salary
  if (n1 > n2) return 1;
  if (n1 == n2) return 0;
  if (n1 < n2) return -1;
}

function sortBySalary(emp) {
  return emp.sort(compareSalary)
}

function filterEmployees(emp, minSalary, minEge){
  return emp.filter(e => e.salary >= minSalary && e.age >= minEge)
}

averageSalary(employees)
sortBySalary(employees)
filterEmployees(employees, 4500, 25){
