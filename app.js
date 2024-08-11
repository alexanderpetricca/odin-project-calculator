// https://www.theodinproject.com/lessons/foundations-calculator


const buttons = document.querySelectorAll('.btn')

let displayValue = '0';
const operators = ['+', '-', '*', '/']
let x = null;
let y = null;
let operator = null;


buttons.forEach((button) => {
    button.addEventListener('click', btnPress);
})


function updateScreen() {
    const screen = document.querySelector('#screen');    
    screen.textContent = displayValue;

    if (displayValue.length > 11) {
        screen.textContent = displayValue.substring(0, 11);
    }
}


function btnPress() {    
    const btnValue = this.value;
    
    if (btnValue === 'ac') {
        allClear()
    } else if (operators.includes(btnValue)) {
        operandInput(btnValue)
    } else if (btnValue === '=') {
        operate()
    } else {
        numberInput(btnValue)
    }
}


function numberInput(value) {

    if (displayValue === '0') {
        displayValue = value;
    } else if (x) { // !! Last major issue is detecting whether inputting second operand, and allowing it be entered.
        displayValue = value; 
    } else {
        displayValue += value;
    }
    updateScreen()
}


function operandInput(value) {
    operator = value
    x = Number(displayValue)
}


/**
 * Clears the stored values of x, y, operator and resets the screen to 0.
 */
function allClear() {
    displayValue = '0'
    x = 0
    y = 0
    operator = null
    updateScreen()
}


/**
 * Returns the sum of x and y, as a number.
 * @return {Number}
 */
function add(x, y) {
    return x + y
}


/**
 * Returns the difference of x and y, as a number.
 * @return {Number}
 */
function subtract(x, y) {
    return x - y
}


/**
 * Returns the product of x and y, as a number.
 * @return {Number}
 */
function multiply(x, y) {
    return x * y
}


/**
 * Returns the quotient of x and y, as a number.
 * @return {Number}
 */
function divide(x, y) {
    return x / y
}


function operate() {

    y = Number(displayValue)
    
    let result = 0

    if (operator === '+') {
        result = add(x, y)
    }
    else if (operator === '-') {
        result = subtract(x, y)
    }
    else if (operator === '*') {
        result = multiply(x, y)
    }
    else if (operator === '/') {
        result = divide(x, y)
    }

    displayValue = result.toString()
    updateScreen()
}