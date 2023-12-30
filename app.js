let display = document.querySelector(".main-screen");
let displayValue;
let numOne;
let numTwo;
let operator;

function operate(numOne, numTwo, operator) {
    if (operator === "&plus") {
        return Number(numOne) + Number(numTwo)
    } else if (operator === "&minus") {
        return Number(numOne) - Number(numTwo)
    } else if (operator === "&times") {
        return Number(numOne) * Number(numTwo)
    } else if (operator === "&divide") {
        return Number(numOne) / Number(numTwo)
    };
};

