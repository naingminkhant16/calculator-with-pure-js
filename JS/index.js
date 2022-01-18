let number = '';
let result = null;
let displayEquation = document.querySelector("#equation");
let displayResult = document.querySelector("#result");

function setNum(num) {
    number += num;
    displayEquation.textContent = number;
    displayEquation.style.fontSize = "3rem";
    displayEquation.style.color = "white";
    if (result) {
        displayResult.style.color = "darkgrey";
        displayResult.style.fontSize = "1.5rem";
    }
}

function execute() {
    result = eval(number);
    displayResult.style.color = "white";
    displayResult.style.fontSize = "3rem";

    displayEquation.style.fontSize = "1.5rem";
    displayEquation.style.color = "darkgrey";

    displayResult.textContent = "= " + result;
    number = result.toString();
}

function clearData() {
    number = '';
    displayEquation.textContent = '';
    displayResult.textContent = '';
}