function dataEvent(event) {
    event.preventDefault()

    switch(event.type) {
        case 'copy':
            alert('Запрет на копирование инфромации')
            break
        case 'cut':
            alert('Запрет на вырезание информации')
            break
        case 'contextmenu':
            alert('Запрет на вызов контекстного меню')
            break
    }
}

document.addEventListener('copy', dataEvent)
document.addEventListener('cut', dataEvent)
document.addEventListener('contextmenu',dataEvent)

class Calculator {
  constructor() {
    this.calculator = document.querySelector(".calculator");
    this.result = document.querySelector(".input-field");
    this.commandEdit = document.getElementById('command-edit')
    this.commandEdit.addEventListener('submit', (e) => this.addOperation(e))

    this.currentOperand = null;
    this.previousOperand = null;
    this.currentOperation = null;

    this.operations = {
      "+": function (a, b) {
        return a + b;
      },
      "-": function (a, b) {
        return a - b;
      },
      "*": function (a, b) {
        return a * b;
      },
      "/": function (a, b) {
        return a / b;
      }
    };
  }

  perform() {
    this.currentOperand = this.operations[this.currentOperation](+this.previousOperand,  +this.currentOperand);
    this.result.innerHTML = this.currentOperand;
  }

  clear() {
    this.currentOperand = null;
    this.previousOperand = null;
    this.currentOperation = null;
    this.result.innerHTML = "";

  }

  operation(val){
    if (this.previousOperand && this.currentOperand) this.perform();
    this.previousOperand = this.currentOperand;
    this.currentOperand = null;
    this.currentOperation = val;
    this.result.innerHTML = "";
  }



  handleInput(buttonValue) {
    if (this.operations[buttonValue]) {
      this.operation(buttonValue);
    } else {
      switch (buttonValue) {
        case "=":
        case "Enter":
          this.perform();
          break;
        case "C":
        case "c":
          this.clear();
          break;
        case "Backspace":
          this.currentOperand = +this.currentOperand.toString().slice(0, -1);
          this.result.textContent = this.currentOperand;
          break;
        default:
          if (Number.isInteger(+buttonValue)) {
            this.currentOperand =
              this.currentOperand === null ? buttonValue : this.currentOperand + buttonValue;
            this.result.textContent = this.currentOperand;
          }
      }
    }
  }

   addOperation(params) {
    params.preventDefault()
    let form = params.target
    let key = form.querySelector('input[name=key]').value
    let funct = form.querySelector('textarea[name=funct]').value
    let rot = document.getElementById("last-rot")
    let newButton = document.createElement("div");
    this.operations[key] = funct
    newButton.className = "button";
    newButton.innerHTML = `${key}`;
    rot.appendChild(newButton)
  }

  init() {
    document.querySelector( ".calculator").addEventListener("click", (e) => this.handleInput(e.target.textContent));
    document.addEventListener("keydown", (e) => this.handleInput(e.key));
  }
}

const c = new Calculator();
c.init();

const c = new Calculator();
c.init();
