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
    let value = e.target.innerText;
    
    if(value >= 0 || value === ".") { 
      calc.addDigit(value);
      
    } else {
      console.log(typeof value);
      calc.processOperation(value);
    }

  })
})