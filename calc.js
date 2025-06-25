let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let afterOp = "";

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) throw new Error("Can't divide by zero");
    return a / b;
}
function operate(a, b, operator) {
    return operator(a, b);
}

function getOperatorFunction(op) {
    switch (op) {
        case "+": return add;
        case "−": return subtract;
        case "×": return multiply;
        case "÷": return divide;
    }
}

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "C") {
            num1 = null;
            num2 = null;
            operator = null;
            result = null;
            screen.textContent = "";
            afterOp = "";
            return;

        }

        

        if (["+", "−", "×", "÷"].includes(btn.textContent)) {
            num1 = Number(screen.textContent);
            operator = getOperatorFunction(btn.textContent)
            screen.textContent += btn.textContent;
            return;

        }

        
        if (btn.textContent === "=") {
            num2 = Number(afterOp);
            result = operate(num1, num2, operator);
            screen.textContent = result;
            num1 = result;
            num2 = null;
            operator = null;
            afterOp = "";
            return;
        }

        // If operator has already been selected, collect digits for num2
        if (operator !== null) {
            afterOp += btn.textContent;
        }

        screen.textContent += btn.textContent;
        
    });
});