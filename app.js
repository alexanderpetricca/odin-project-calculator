// https://www.theodinproject.com/lessons/foundations-calculator


const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('#screen');  

let displayValue = null;
const operators = ['+', '-', '*', '/', 'p']
let x = null;
let y = null;
let operator = null;
let awaitingY = false;


buttons.forEach((button) => {
    button.addEventListener('click', btnPress);
})

screen.textContent = '0'


function updateScreen() {
    screen.textContent = displayValue;
    if (displayValue.length > 11) {
        screen.textContent = displayValue.substring(0, 11);
    }
}


function btnPress() {    
    const btnValue = this.value;
    
    if (btnValue === 'c') {
        allClear();
    } else if (operators.includes(btnValue)) {
        operandInput(btnValue);
    } else if (btnValue === 's') {
        switchValue();
    } else if (btnValue === '=') {
        operate();
    } else {
        numberInput(btnValue);
    }
}


function numberInput(value) {

    if (displayValue === null || awaitingY) {
        displayValue = value;
    } else {
        displayValue += value;
    }
    awaitingY = false;
    updateScreen()
}


function operandInput(value) {
    operator = value;
    x = Number(displayValue);

    if (operator == 'p') {
        operate()
    } else {
        awaitingY = true;
    }
}


/**
 * Clears the stored values of x, y, operator and resets the screen to 0.
 */
function allClear() {
    displayValue = null;
    x = 0;
    y = 0;
    operator = null;
    screen.textContent = '0';
}


/**
 * Returns the sum of x and y, as a number.
 * @return {Number}
 */
function add(x, y) {
    return x + y;
}


/**
 * Returns the difference of x and y, as a number.
 * @return {Number}
 */
function subtract(x, y) {
    return x - y;
}


/**
 * Returns the product of x and y, as a number.
 * @return {Number}
 */
function multiply(x, y) {
    return x * y;
}


/**
 * Returns the quotient of x and y, as a number.
 * @return {Number}
 */
function divide(x, y) {
    return x / y;
}


/**
 * Returns the quotient of x and y, as a number.
 * @return {Number}
 */
function percentage(x) {
    return x / 100;
}


/**
 * Toggles the displayValue to either plus or minus.
 * @return {null}
 */
function switchValue() {
    if (displayValue[0] === '-') {
        displayValue = displayValue.slice(1)
    } else {
        displayValue = '-' + displayValue
    }
    updateScreen()
}


function operate() {

    y = Number(displayValue);
    
    let result = 0;

    if (operator === '+') {
        result = add(x, y);
    }
    else if (operator === '-') {
        result = subtract(x, y);
    }
    else if (operator === '*') {
        result = multiply(x, y);
    }
    else if (operator === '/') {
        result = divide(x, y);
    }
    else if (operator === 'p') {
        result = percentage(x);
    }

    displayValue = result.toString();
    updateScreen();
}