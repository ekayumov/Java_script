describe('#filterByLength1', () => {
  const fruits = ['lime', 'orange', 'apple', 'banana', '']
  describe('when gets an array of numbers', () => {
    it('returns a descending sorted array', () => {
      assert.deepEqual(filterByLength1(fruits, 6, 6), ['orange', 'banana'])
    })
  })
})
