let firstNum = '';
let secondNum = ''; 
let operator = ''; 

let displayValue = '';
let currDigit = ''; 
let pointCount = 0; 


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
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    let sol = ''; 

    if (secondNum === 0 && operator === "%") {
        return ("break");
    }

    switch(operator) {
        case "+": 
            sol = add(firstNum, secondNum);
            (sol.toString().length > 9) ? populateDisplay(sol.toExponential(3)) : populateDisplay(sol);
            break;
        case "-":
            sol = subtract(firstNum, secondNum);
            (sol.toString().length > 9) ? populateDisplay(sol.toExponential(3)) : populateDisplay(sol);
            break;
        case "x":
            sol = multiply(firstNum, secondNum);
            (sol.toString().length > 9) ? populateDisplay(sol.toExponential(3)) : populateDisplay(sol);
            break;
        case "%":
            sol = divide(firstNum, secondNum);
            (sol.toString().length > 9) ? populateDisplay(sol.toExponential(3)) : populateDisplay(sol);
            break;
        default: 
    }

    return sol;
}

const display = document.querySelector(".display");
display.textContent = '';

function populateDisplay(value) {
    display.textContent += value.toString();
}

function clearDisplay() {
    display.textContent = '';
    pointCount = 0;
}

function reset() {
    pointCount = 0;
    clearDisplay();
    firstNum = '';
    secondNum = '';
    operator = '';
    displayValue = '';
    currDigit = ''
}

function solve() {
    clearDisplay();
    secondNum = displayValue;
    firstNum = operate(firstNum, secondNum, operator);

    if (firstNum === "break") {
        reset();
        populateDisplay("nuh uh"); 
        return("break");
    }

    if (!Number.isInteger(firstNum)) {
        pointCount = 1; 
    }

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
            break;
        

        case "digit":
            if (firstNum !== '' && displayValue === '') {
                clearDisplay();
            }
            if (displayValue === '' && display.textContent !== '') {
                clearDisplay();
            }
            if (firstNum !== '' && operator === '') {
                clearDisplay();
                firstNum = '';
                displayValue = '';
            }

            if (display.textContent === '0') {
                clearDisplay();
                displayValue = '';
            }

            if (display.textContent.length > 9) {
                break;
            }

            currDigit = key.slice(3);
            displayValue += currDigit;
            populateDisplay(currDigit);
            currDigit = '';
            break;

        case "symbol":
            if (displayValue === '') {
                break;
            }

            if (firstNum === '' && operator === '') { 
                firstNum = displayValue;
                operator = key.slice(3);
                displayValue = ''; 
            }

            else if (firstNum !== '' && operator !== '') {
                if (solve() === "break") {
                    break; 
                }
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
            if (operator === '') {
                break;
            }
            if (displayValue === '') {
                break;
            }
            if (solve() === "break") {
                break; 
            }
            
            break;

        case "point":
            if (pointCount >= 1 || display.textContent.length > 11) {
                break;
            }
            if (displayValue === '') {
                populateDisplay("0.");
                displayValue += "0.";
                pointCount++; 
            }
            else {
                populateDisplay('.');
                displayValue += ".";
                pointCount++;
            }
            break;

        case "clear":
            reset();
            break;
    }

    /*console.log("a " + firstNum);
    console.log("b " + secondNum);
    console.log("d " + displayValue);
    console.log("o " + operator); */
})