function sumfPositives(numberArray) {
  if (!Array.isArray(numberArray)) throw TypeError('Argument must be an Array')

  let count = 0
  const sum = numberArray.reduce((sum, number) => {
    if (number > 0) {
      count++
      return sum + number
    } else {
      return sum
    }
  }, 0)

  return { sum: sum, count: count }
}
