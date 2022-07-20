// 3. Калькулятор
//
// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract
//
// Пример:
// const calculator = new Calc()
//
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
//
// Также, он должен хранить историю всех операций и выводить ее по запросу:
//
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
//
// И очищать историю
// calculator.clearHistory()
// calculator.history() // []


const calculator = function () {
  let calculatorHistory = []
  let calculatorOperations = {}

  this.addOperation = (key, funct) => {
    calculatorOperations[key] = funct
    return false
  }

  this.history = () => {
    return calculatorHistory
  }

  this.operations = () => {
    return calculatorOperations
  }

  this.clearHistory = () => {
    calculatorHistory = []
    return calculatorHistory
  }

  this.operation = (text) => {
    const arrayText = text.split(" ")
    const numberFirst = Number(arrayText[0])
    const operator = arrayText[1]
    const numberSecond = Number(arrayText[2])
    if (calculatorOperations[operator]) {
      calculatorHistory.push({operation: operator, operands: [numberFirst, numberSecond]})
      return calculatorOperations[operator](numberFirst, numberSecond)
    }
    else { return false}
  }
}


cal = new calculator()
cal.history() // []
cal.operations() // {}
cal.operation("45 * 44")
cal.addOperation('+', (a, b) => a + b) // false
cal.operations() // {"+", "(a, b) => a + b"}
cal.operation("45 + 44") // 89
cal.history() //[{operation: '+', operands: [45,44]}
cal.operation("45 * 44") // false
