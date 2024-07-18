let firstNum;
let secondNum; 
let operator; 

let displayValue; 

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

/*
let key0 = document.querySelector("#key0");
let key1 = document.querySelector("#key1");
let key2 = document.querySelector("#key2");
let key3 = document.querySelector("#key3");
let key4 = document.querySelector("#key4");
let key5 = document.querySelector("#key5");
let key6 = document.querySelector("#key6");
let key7 = document.querySelector("#key7");
let key8 = document.querySelector("#key8");
let key9 = document.querySelector("#key9");
*/

const display = document.querySelector(".display");

function populateDisplay(value) {
    display.textContent += value.toString();
}

const board = document.querySelector(".board")
board.addEventListener("click", (e) => {
    let key = e.target.id; 
    if (key !== '') {
        displayValue = key.slice(3);
    }
    populateDisplay(displayValue);
    displayValue = '';
})