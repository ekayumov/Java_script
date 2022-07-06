const numbers = [-20, -10, 0, 10, 20, 30]

function sortDesc(num) {
  return num.sort(function(a, b) {
    return b - a;
  })
}
