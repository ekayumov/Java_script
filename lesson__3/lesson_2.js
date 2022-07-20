const myHash = {}

const cache = function(number, degree) {
  const key = [number, degree]
  const run = function() {
    if (myHash[key]) {
      return {value: myHash[key], fromCache: true}}
    else {
      myHash[key] = Math.pow(number, degree)
      return {value: myHash[key], fromCache: false}
    }
  }
  return run()
}
