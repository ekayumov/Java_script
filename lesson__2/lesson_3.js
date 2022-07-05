const fruits = ['lime', 'orange', 'apple', 'banana', '']

function filterByLength( words, ferstL, lastL) {
  const result = words.filter(word => word.length >= ferstL && word.length <= lastL)
  return result
}
