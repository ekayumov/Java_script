describe('#sumPositives', () => {
  describe('when gets an array', () => {
    it('returns an object with count and sum of positive numbers', () => {
      assert.deepEqual(sumPositives([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), {count: 5,  sum: 357})
    })
  })

  describe('when gets not array', () => {
    it('throws an error', () => {
      assert.throws(() => sumPositives(1), 'Argument must be an Array')
    })
  })
})
