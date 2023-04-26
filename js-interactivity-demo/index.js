const minusButton = document.getElementById('minus-btn')
const resetButton = document.getElementById('reset-btn')
const plusButton = document.getElementById('plus-btn')
const counterElement = document.getElementById('counter')

let count = 0

plusButton.addEventListener('click', () => {
    count++
    counterElement.innerHTML = `${count} clicks`
})

minusButton.addEventListener('click', () => {
    count--
    counterElement.innerHTML = `${count} clicks`
})

resetButton.addEventListener('click', () => {
    count = 0
    counterElement.innerHTML = `${count} clicks`
})