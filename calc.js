
let num1, num2, operator;


function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) throw new Error("Can't divide by zero");
    return a/b;
}

function operate(a, b, operator) {
    return operator(a, b);
}

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        screen.textContent += btn.textContent;
    }
    )
})

