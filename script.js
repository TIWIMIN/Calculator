let firstNum;
let secondNum; 
let operator; 


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
    switch(operator) {
        case "plus": 
            add(firstNum, secondNum);
            break;
        case "minus":
            subtract(firstNum, secondNum);
            break;
        case "times":
            multiply(firstNum, secondNum);
            break;
        case "obelus":
            divide(firstNum, secondNum);
            break;
        default: 
    }
}

