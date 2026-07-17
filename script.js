const input = document.querySelector("#text-field");
const numberButtons = document.querySelectorAll(".num-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const functionButtons = document.querySelectorAll(".function-buttons");

console.log(numberButtons, operatorButtons, functionButtons);

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        const inputValue = input.value;
        console.log(inputValue);
    }
}
);

calculate(){}


