export class Calculator {
  // atributos = variaveis ou caracteristicas
  constructor(previousOperationText, currentOperationText) {
    this._previousOperationText = previousOperationText;
    this._currentOperationText = currentOperationText;
    this._currentOperation = "";
  }

  // adicionar digito ao display da calculadora
  addDigit = (digit) => {
    // verificar se numero digitado ja tem um ponto
    if (digit === "." && this._currentOperationText.innerText.includes(".")) {
      return;
    }

    this._currentOperation = digit;
    this._updateScreen();
  };

  // processar todas as operacoes da calculadora
  processOperation = (operation) => {
    // verificar se valor atual esta vazio
    if (this._currentOperationText.innerText === "" && operation !== "C") {
      // muda operacao
      if (this._previousOperationText.innerText !== "") {
        this._changeOperation(operation);
      }
      return;
    }

    // pega valor atual e anterior do calculo
    let operationValue;
    let previous = +this._previousOperationText.innerText.split(" ")[0];
    let current = +this._currentOperationText.innerText;

    // switch
    switch (operation) {
      case "+":
        operationValue = previous + current;
        this._updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this._updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this._updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this._updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this._processDelOperator();
        break;
      case "CE":
        this._processClearCurrentOperator();
        break;
      case "C":
        this._processClearOperator();
        break;
      case "=":
        this._processEqualOperator();
        break;
      default:
        return;
    }
  };

  _updateScreen = (
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) => {
    if (operationValue === null) {
      this._currentOperationText.innerText += this._currentOperation;
    } else {
      // se valor for zero adiciona ao valor atual
      if (previous === 0) {
        operationValue = current;
      }
      // valor atual passa a ser  o valor anterior
      this._previousOperationText.innerText = `${operationValue} ${operation}`;
      this._currentOperationText.innerText = "";
    }
  };

  // mudas a operacao matematica
  _changeOperation = (operation) => {
    const mathOperations = ["+", "-", "*", "/"];

    if (!mathOperations.includes(operation)) {
      return;
    }

    this._previousOperationText.innerText =
      this._previousOperationText.innerText.slice(0, -1) + operation;
  };

  _processDelOperator = () => {
    this._currentOperationText.innerText =
      this._currentOperationText.innerText.slice(0, -1);
  };

  _processClearCurrentOperator = () => {this._currentOperationText.innerText = "";}

  _processClearOperator = () => {
    this._currentOperationText.innerText = "";
    this._previousOperationText.innerText = "";
  }

  _processEqualOperator = () => {
    let operation = this._previousOperationText.innerText.split(" ")[1];

    this.processOperation(operation);
  }

}
