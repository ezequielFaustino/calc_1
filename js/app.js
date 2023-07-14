const previousOperation = document.querySelector('[data-js="previous-operation"]')
const currentOperation = document.querySelector('[data-js="current-operation"]')
const resultOperation = document.querySelector('[data-js="result"]')
const buttonsContainer = document.querySelectorAll('[data-js="buttons-container"]')


const getValues = () => {
  buttonsContainer.forEach((element) => {
    element.addEventListener('pointerdown', (e) => {
      const value = e.target.innerText

      if(+value >= 0 || value === '.') {
        // pegar numeros e calcular
        console.log(`${value} é um numero`)
      }
    })
  })
}

getValues()