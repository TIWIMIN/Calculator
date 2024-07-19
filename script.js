let firstNum = '';
let secondNum = ''; 
let operator = ''; 

let displayValue = '';
let currDigit = '';  

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b; 
}

function divide (a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    let sol = ''; 

    switch(operator) {
        case "+": 
            sol = add(firstNum, secondNum)
            populateDisplay(sol);
            break;
        case "-":
            sol = subtract(firstNum, secondNum)
            populateDisplay(sol);
            break;
        case "x":
            sol = multiply(firstNum, secondNum)
            populateDisplay(sol);
            break;
        case "%":
            sol = divide(firstNum, secondNum)
            populateDisplay(sol);
            break;
        default: 
    }

    return sol;
}

const display = document.querySelector(".display");

function populateDisplay(value) {
    display.textContent += value.toString();
}

function clearDisplay() {
    display.textContent = '';
}

function solve() {
    clearDisplay();
    secondNum = displayValue;
    firstNum = operate(firstNum, secondNum, operator);
    displayValue = firstNum;
    secondNum = ''; 
    operator = ''; 
}

const board = document.querySelector(".board")
board.addEventListener("click", (e) => {
    let key = e.target.id; 
    let keyClass = e.target.className;

    switch(keyClass) {

        case "board":
            return;
        

        case "digit":
            if (firstNum !== '' && displayValue === '') {
                clearDisplay();
            }
            if (displayValue === '' && display.textContent !== '') {
                clearDisplay();
            }

            currDigit = key.slice(3);
            displayValue += currDigit;
            populateDisplay(currDigit);
            currDigit = '';
            break;

        case "symbol":
            if (displayValue === '') {
                return;
            }

            if (firstNum === '' && operator === '') { 
                console.log('hi?');
                firstNum = displayValue;
                operator = key.slice(3);
                displayValue = ''; 
            }

            else if (firstNum !== '' && operator !== '') {
                console.log("here?");
                solve();
                operator = key.slice(3);
                displayValue = '';
            }

            else if (firstNum !== '' && operator === '') {
                operator = key.slice(3);
                secondNum = displayValue;
                displayValue = ''; 
            }

            break;
        
        case "solve":
            return (displayValue === '') ? null : solve();
            break;

        case "clear":
            clearDisplay();
            firstNum = '';
            secondNum = '';
            operator = '';
            displayValue = '';
            currDigit = '';

    }

    console.log("a " + firstNum);
    console.log("b " + secondNum);
    console.log("d " + displayValue);
    console.log("o " + operator);
})