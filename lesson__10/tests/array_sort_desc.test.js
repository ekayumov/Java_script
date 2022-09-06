describe('#sortDesc', () => {
  describe('when gets an array of numbers', () => {
    it('returns a descending sorted array', () => {
      assert.deepEqual(sortDesc([2,3,1]), [3, 2, 1])
    })
  })
})
