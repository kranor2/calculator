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
    result = parseFloat(solution.toFixed(2));
    currentText.textContent = solution;
    numOne = solution.toString();
    numTwo = "";
};

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

const decButton = document.getElementById("#decimal");
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

const backspaceButton = document.getElementById("#backspace");
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