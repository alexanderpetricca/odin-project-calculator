// https://www.theodinproject.com/lessons/foundations-calculator


const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('#screen')

let buffer = '0'
let operator = null
const operators = ['+', '-', '*', '/']


function keyPress() {    
    const btnValue = this.value;
    const screenLen = screen.textContent.length + 1;
    
    if (btnValue === 'ac') {
        allClear()
    } else if (btnValue === 'c') {
        clear()
    } else if (btnValue === '=') {
        operate()
    } else {
        buttonPress(btnValue, screenLen)
    }
}


function buttonPress(value, screenLen) {

    // Needs logic to prevent adding operator to empty buffer

    if (screenLen < 11) {
        if (buffer === '0') {
            buffer = value;
        } else {
            if (operators.includes(value)) {
                operator = value
            }
            buffer += value;
        }
    }
    updateScreen()
}


function updateScreen() {
    screen.textContent = buffer
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


/**
 * Clears the stored values of x, y, operator and resets the screen to 0.
 */
function allClear() {
    buffer = '0'
    x = 0
    y = 0
    operator = null
    updateScreen()
}


function clear(){
    buffer = buffer.substring(0, buffer.length - 1)
    if (buffer === '') {
        buffer = '0'
    }
    updateScreen()
}


function operate() {

    // Improve this algorithm, to be more reliable:
    // - needs to work without spaces.
    // - needs to store the numbers in variables, rathan than split, I think.
    // - needs to only allow one operator.
    // - needs to ensure an operator is not added first, without a number.
    
    let components = [buffer];
    
    operators.forEach(operator => {
        components = components.flatMap(subStr => subStr.split(operator))
    })

    let x = Number(components[0])
    let y = Number(components[1])
    
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

    buffer = result.toString().slice(0, 11)
    updateScreen()
}


buttons.forEach((button) => {
    button.addEventListener('click', keyPress);
})
