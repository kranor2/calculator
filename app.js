let display = document.querySelector(".main-screen");
let numOne = "";
let numTwo = "";
let operator = "";
let output = "";
let solution = 0;
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numButtons = document.querySelector(".num-button");
const upperScreenText = document.querySelector(".upper-screen");
const currentText = document.querySelector(".main-screen");

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (output === "") {
            numOne += button.value;
            if (numOne.length >= 12) {
                currentText.textContent = "Too big. Try again."
                numOne = "";
            } else {
                currentText.textContent = numOne;
            }
        } else if (output.charAt(output.length-2) === "=") {
            numOne = "";
            numOne += button.value;
            currentText.textContent = numOne;
            output = "";
            upperScreenText.textContent = output;
        } else {
            numTwo += button.value;
            if (numTwo.length >= 12) {
                currentText.textContent = "Too bit. Try again."
                numTwo = "";
            } else {
                currentText.textContent = numTwo;
            }
        }
    })
});

const decButton = document.getElementById("decimal");
function useDecimal() {
    if (output === "") {
        if (!numOne.includes(".") && numOne.length >= 1) {
            numOne += ".";
            currentText.textContent = numOne;
        }
    } else {
        if (!numTwo.includes(".") && numOne.length >= 1) {
            numTwo += ".";
            currentText.textContent = numTwo;
        }
    }
}
dotButton.addEventListener("click", () => {
    useDecimal();
});

const backspaceButton = document.getElementById("backspace");
function backspace() {
    if (output === "") {
        if (numOne.length >= 1) {
            numOne = numOne.substring(0, numOne.length - 1);
            currentText.textContent = numOne;
        }
    } else {
        if (numTwo.length >= 1) {
            numTwo = numTwo.substring(0, numTwo.length - 1);
            currentText.textContent - numTwo;
        }
    }
}
backspaceButton.addEventListener("click", () => {
    backspace();
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    numOne = "";
    numTwo = "";
    output = "";
    solution = "";
    currentText.textContent = "";
    upperScreenText.textContent = "";
});

function operate() {
    if (operator === "+") {
        solution = Number(numOne) + Number(numTwo);
    } else if (operator === "−") {
        solution = Number(numOne) - Number(numTwo);
    } else if (operator === "×") {
        solution = Number(numOne) * Number(numTwo);
    } else if (operator === "÷") {
        solution = Number(numOne) / Number(numTwo);
    }
    solution = parseFloat(solution.toFixed(2));
    currentText.textContent = solution;
    numOne = solution.toString();
    numTwo = "";
};
function topOutput(operationSign, operationName) {
    output = numOne + operationSign;
    upperScreenText.textContent = output;
    operator = operationName;
};
function chooseOperation(operationSign, operationName) {
    if (numOne.length != 0 && (output === "" || (output != "" && numTwo.length === 0))) {
        topOutput(operationSign, operationName);
    } else if (numOne.length != 0 && numTwo.length != 0 && output != "") {
        operate();
        topOutput(operationSign, operationName);
    }
};

const plusButton = document.getElementById("add");
plusButton.addEventListener("click", () => {
    chooseOperation (" + ", "+");
});

const minusButton = document.getElementById("subtract");
minusButton.addEventListener("click", () => {
    chooseOperation(" − ", "−")
});

const timesButton = document.getElementById("multiply");
timesButton.addEventListener("click", () => {
    chooseOperation(" × ", "×");
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () => {
    chooseOperation(" ÷ ", "÷");
});

function getSolution() {
    if (numOne.length != 0 && numTwo.length != 0 && output.charAt(output.length - 2) != "=") {
        output += numTwo + " = ";
        operate();
        operation = "";
        upperScreenText.textContent = output;
    }
}
const equalsButton = document.getElementById("equal");
equalsButton.addEventListener("click", () => {
    getSolution();
});

document.addEventListener("keydown", (event) => {
    if (numbers.includes(event.key)) {
        if (output === "") {
            numOne += event.key;
            if (numOne.length >= 12) {
                currentText.textContent = "Too big. Try again.";
                numOne = "";
            } else {
                currentText.textContent = numOne;
            }
        } else if (output.charAt(output.length - 2) == "=") {
            numOne = "";
            numOne += event.key;
            currentText.textContent = numOne;
            output = "";
            upperScreenText.textContent = output;
        } else {
            numTwo += event.key;
            if (numTwo.length >= 12) {
                currentText.textContent = "Too big. Try again.";
                numTwo = "";
            } else {
                currentText.textContent = numTwo;
            }
        } 
    } else if (event.key === ".") {
        useDecimal();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Delete") {
        numOne = "";
        numTwo = "";
        output = "";
        solution = "";
        upperScreenText = "";
        currentText = "";
    } else if (event.key === "+") {
        chooseOperation (" + ", "+");
    } else if (event.key === "-") {
        chooseOperation(" − ", "−")
    } else if (event.key === "*") {
        chooseOperation(" × ", "×");
    } else if (event.key === "/") {
        chooseOperation(" ÷ ", "÷");
    } else if (event.key === "=" || event.key === "Enter") {
        getSolution();
    }
});