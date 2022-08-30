describe('MoneyBox', () => {
  const moneyBox = () => new MoneyBox()
  it('increments count of coins and returns undefined', () => {
      assert.isUndefined(moneyBox().addCoin())
  })

  it('returns count of coins', () => {
      let box = moneyBox()

      assert.equal(box.getAmount(), 0)
      box.addCoin()
      assert.equal(box.getAmount(), 1)
  })
}) 
