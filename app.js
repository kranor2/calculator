let display = document.querySelector(".main-screen");
let displayValue;
let numOne;
let numTwo;
let operator;
let lengthOkay = false;
let operatorPressed = false;
let clearState = false;
let equalityPressed = false;
let decPressed = false;

function operate(numOne, numTwo, operator) {
    if (operator === "&plus") {
        return Number(numOne) + Number(numTwo);
    } else if (operator === "&minus") {
        return Number(numOne) - Number(numTwo);
    } else if (operator === "&times") {
        return Number(numOne) * Number(numTwo);
    } else if (operator === "&divide") {
        return Number(numOne) / Number(numTwo);
    };
};

function checkDisplay() {
    let displayLength = display.textContent.length;
    if (displayLength >= 8 && lengthOkay === false) {
        lengthOkay = false;
        return lengthOkay;
    } else {
        return true;
    };
};

let numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (checkDisplay()) {
            if (operatorPressed === true || clearState === true || equalityPressed === true) {
                display.textContent = "";
                operatorPressed = false;
                clearState = false;
                equalityPressed = false;
            }
            display.textcontent = display.textContent + button.textContent;
            displayValue = display.textContent;
            if (numOne !== undefined) numTwo = displayValue;
            lengthOkay = false;
        };
    }); 
});

let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (numTwo !== undefined) {
            let number;
            if (String(operate(numOne, numTwo, operator)).length >= 8) {
                number = operate(numOne, numTwo, operator).toExponential(3);
            } else {
                number = operate(numOne, numTwo, operator);
            }
            display.textContent = number;
            displayValue = display.textContent;
        }
        numOne = displayValue;
        if (button.textContent !== "&equals") {
            operator = button.textContent;
            operatorPressed = true;
        } else if (button.textContent) {
            numTwo = undefined;
            numOne = undefined;
            equalityPressed = true;
        }
        lengthOkay = true;
        decPressed = false;
    });
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = "0";
    displayValue = display.textContent;
    numOne = undefined;
    numTwo = undefined;
    clearState = true;
    decPressed = false;
});

let backspaceButton = document.querySelector("#backspace");
backSpaceButton.addEventListener("click", () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.substring(0, display.textContent.length-1);
        displayValue = display.textContent;
    } else {
        display.textContent = 0;
        displayValue = display.textContent;
    }
    if (!display.textContent.includes(".")) {
        decPressed = false;
    };
});

let decButton = document.querySelector("#decimal");
decButton.addEventListener("click", () => {
    if (!decPressed) {
        display.textContent = display.textContent + ".";
        decPressed = true;
    }
})