  describe('#cache', () => {
  it('returns an object with value and fromCache flag', () => {
    assert.deepEqual(calculate(2, 2), { value:4 , fromCache: false})
  })

  it('returns an object with value and fromCache flag', () => {
    assert.deepEqual(calculate(2, 2), { value: 4, fromCache: true})
  })
})
