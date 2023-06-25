import { Calculator } from "./api/models/Calculator.js";

// Eventos
const previousOperations = document.querySelector("#previous-operations");
const currentOperation = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

// instancia objeto da classe
let calc = new Calculator(previousOperations, currentOperation);


// Eventos
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if(+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value)
    } else {
      calc.processOperation(value);
    }

  })
})