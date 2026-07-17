const input = document.querySelector("#text-field");
const numberButtons = document.querySelectorAll(".num-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const functionButtons = document.querySelectorAll(".function-buttons");
const equalsBtn = document.querySelector("#btn-equals");

console.log(numberButtons, operatorButtons, functionButtons);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const inputValue = input.value;
        input.value = "";
        console.log(inputValue);
        if (checkValidity(inputValue)) {
            calculate(inputValue);
        }

    }
});

equalsBtn.addEventListener("click", (event) => {
    const inputValue = input.value;
    input.value = "";
    console.log(inputValue);
    if (checkValidity(inputValue)) {
        calculate(inputValue);
    }
})

for (let i = 0; i < numberButtons.length; i++) {
    const value = (i + 1) % 10;

    numberButtons[i].addEventListener("click", () => {
        input.value += value;
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", () => {
        console.log(operatorButtons[i].textContent)
        input.value += operatorButtons[i].textContent;
    })
}

function checkValidity(str) {
    let invalid = false;
    const operators = "+-/*"
    const numbers = "1234567890. "
    if (
        str.startsWith("+") || str.endsWith("+") ||
        str.startsWith("-") || str.endsWith("-") ||
        str.startsWith("*") || str.endsWith("*") ||
        str.startsWith("/") || str.endsWith("/")
    ) {
        input.value = "ERR";
        invalid = true;
    }
    for (let i = 0; i < str.length; i++) {
        if (!operators.includes(str[i]) && !numbers.includes(str[i])) {
            input.value = "ERR";
            invalid = true;
        }
        if (operators.includes(str[i]) && operators.includes(str[i + 1])) {
            input.value = "ERR";
            invalid = true;
        }
    }
    if (!invalid) {
        return true;
    }
    else{
        return false;
    }
}

function calculate(operation) {
    let operationArr = operation.replaceAll(" ", "").split(/([+\-*/])/);
    let result = Number(operationArr[0]);
    console.log(operationArr);

    for (let i = 1; i < operationArr.length; i += 2) {
        const operator = operationArr[i];
        const value = Number(operationArr[i + 1]);

        switch (operator) {
            case "+":
                result += value;
                console.log(result);
                break;
            case "-":
                result -= value;
                console.log(result);
                break;
            case "*":
                result *= value;
                console.log(result);
                break;
            case "/":
                if (value === 0) {
                    input.value = "ERR";
                    console.log("ERR");
                    return;
                }
                result /= value;
                break;
        }
    }
    input.value = result;
}