

function filterByLength( words, firstL, lastL) {
  const result = words.filter(word => word.length >= firstL && word.length <= lastL)
  return result
}
