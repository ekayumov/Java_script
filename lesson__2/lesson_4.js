const numbers = [-20, -10, 0, 10, 20, 30]

function compareNumbers(a, b) {
  return a - b;
}

function sortDesc(num) {
  return num.sort(compareNumbers).reverse()
}
