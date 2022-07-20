const MoneyBox = function() {
  let money = 0
  this.getAmount = function() { return money}
  this.addCoin = function() { money += 1}
}

box = new MoneyBox()

box.getAmount() //0
box.addCoin() // +1
box.addCoin() // +
box.getAmount() //2
