export class Calculator {
  // atributos = variaveis ou caracteristicas
  constructor(previousOperationText, currentOperationText) {
    this._previousOperationText = previousOperationText;
    this._currentOperationText = currentOperationText;
    this._currentOperation = "";
  }

  // adicionar digito a tela
  addDigit(digit) {

    // verificar se o numero ja tem um ponto
    if (digit === "." && this._currentOperationText.innerText.includes(".")) {
      return;
    }

    this._currentOperation = digit;
    this._updateScreen();
  }

  // processa todas as operacoes da calculadora
  processOperation(operation) {
    // verifica se o valor atual eh vazio
    if(this._currentOperationText.innerText === "" && operation !== "C") {
      // muda operacao
      if(this._previousOperationText.innerText !== "") {
        this._changeOperation(operation);
      }
      return;
    }

    // pega os valores atuais e anteriores
    let operationValue;
    let previous = +this._previousOperationText.innerText.split(" ")[0];
    let current = +this._currentOperation.innerText;

    switch(operation) {
      case "+":
        operationValue = previous + current;
        this._updateScreen(operationValue, operation, current, previous);
        break;
      
      default:
        return;

    }
  }

  _updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      // adiciona numero para o valor atual
      this._currentOperationText.innerText += this._currentOperation;
    } else {
      // verifica se o valor é 0, se for add valor atual
      if (previous === 0) {
        operationValue = current;
      }
      // add valor atual para o anterior
      this._previousOperationText.innerText = `${operationValue} ${operation}`;
      this._currentOperationText.innerText = "";
    }
  }

  _changeOperation(operation) {
    const mathOperations = ["*", "-", "+", "/"];

    if(!mathOperations.includes(operation)) {
      return;
    }

    this._previousOperationText.innerText = this._previousOperationText.innerText.slice(0, -1) + operation;
  }
}
