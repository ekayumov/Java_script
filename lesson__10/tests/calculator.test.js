describe('Calculator', () => {
  const calc = () => new Calculator()

  describe('#operation', () => {
    describe('+',  () => {
      it('adds a new operation to calculator',  () => {
        assert.equal(calc().operation('2 + 2'), 2)
      })
    })

    describe('-',  () => {
      it('adds a new operation to calculator',  () => {
        assert.equal(calc().operation('2 - 2'), 0)
      })
    })
  })

  describe('#addOperation', () => {
    let calculator = calc()

    it('adds a new operation to calculator and we can exec it',  () => {
      assert.isUndefined(calculator.addOperation('*', (a, b) => a * b))
      assert.equal(calculator.operation('45 * 44'), 1980)
    })
  })

  describe('#history', () => {
    let calculator = calc()

    it('return an array of operation objects',  () => {
      assert.isEmpty(calculator.history())
      calculator.operation('2 + 2')
      assert.deepInclude(calculator.history(), [{ operation: '+', operands: [2, 2] }])
    })
  })

  describe('#clearHistory', () => {
    let calculator = calc()

    it('clears calculator history',  () => {
      assert.isEmpty(calculator.history())
      calculator.operation('1 + 1')
      calculator.clearHistory()
      assert.isEmpty(calculator.history())
    })
  })
})
