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
  let historyArray = []
  let operationsArray = {}

  this.addOperation = (key, funct) => {
        operationsArray[key] = funct
        return "оператор '"+ key +"' cохранен"
  }

  this.history = () => {
        return historyArray
  }

  this.operations = () => {
        return operationsArray
  }

  this.clearHistory = () => {
        historyArray = []
        return historyArray
  }

  this.operation = (text) => {
    const arrayText = text.split(" ")
    const namberFirst = Number(arrayText[0])
    const operator = arrayText[1]
    const namberSecond = Number(arrayText[2])
    if (operationsArray[operator]) {
      historyArray.push({operation: operator, operands: [namberFirst, namberSecond]})
      return operationsArray[operator](namberFirst, namberSecond)
    }
    else { return "оператор '" + operator + "' не найден"}
  }
}


cal = new calculator()
cal.history() // []
cal.operations() // {}
cal.operation("45 * 44")
cal.addOperation('+', (a, b) => a + b) // оператор '+' cохранен
cal.operations() // {"+", "(a, b) => a + b"}
cal.operation("45 + 44") // 89
cal.history() //[{operation: '+', operands: [45,44]}
cal.operation("45 * 44") // оператор '*' не найден


















calculator.operation('31 + 32')

const operation function (text) {
  const arrayText = text.split(" ")
  const namberFirst = arrayText[0]
  const operator = arrayText[1]
  const namberSecond = arrayText[2]

  operator
}

calculator = new Calc()

const Cals = function() {
  this.operation = ...
  this.addOperation = ...
  this.history = ...
}
