const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('#screen')

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        const btnSound = new Audio('keyclick.mp3');
        btnSound.play();
        
        const btnValue = button.value
        const screenLen = screen.textContent.length + 1
                
        if (btnValue === 'ac') {
            screen.textContent = ''
        } else if (btnValue === 'c') {
            screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1)
        } else if (('+', '-', 'x', '/').includes(btnValue)) {
            // Add screenvalue to buffer and convert to number
            // Save and convert operator
            console.log(btnValue)
        } else {
            if (screenLen < 11) {
                screen.textContent += button.value    
            }
        }
    })
})


function add(x, y) {
    return x + y
}


function subtract (x, y) {
    return x - y
}


function multiply (x, y) {
    return x * y
}


function divide (x, y) {
    return x / y
}